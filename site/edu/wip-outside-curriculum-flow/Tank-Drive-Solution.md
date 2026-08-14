### DriveSubsystem

    package competition.subsystems.drive;

    import com.ctre.phoenix.motorcontrol.FeedbackDevice;
    import com.google.inject.Inject;
    import com.google.inject.Singleton;

    import competition.electrical_contract.ElectricalContract;
    import xbot.common.command.BaseSubsystem;
    import xbot.common.controls.actuators.XCANTalon;
    import xbot.common.injection.wpi_factories.CommonLibFactory;
    import xbot.common.injection.electrical_contract.CANTalonInfo;

    @Singleton
    public class DriveSubsystem extends BaseSubsystem {

        public final XCANTalon frontLeft;
        public final XCANTalon frontRight;

        private final double simulatedEncoderFactor = 256.0 * 39.3701; //256 "ticks" per meter, and ~39 inches in a meter

        @Inject
        public DriveSubsystem(CommonLibFactory factory, ElectricalContract electricalContract) {
            log.info("Creating DriveSubsystem");
            // instantiate speed controllers and sensors here, save them as class members

            this.frontLeft = factory
                    .createCANTalon(new CANTalonInfo(1, true, FeedbackDevice.CTRE_MagEncoder_Absolute, true, simulatedEncoderFactor));
            this.frontRight = factory
                    .createCANTalon(new CANTalonInfo(2, true, FeedbackDevice.CTRE_MagEncoder_Absolute, true, simulatedEncoderFactor));

            frontLeft.createTelemetryProperties(this.getPrefix(), "frontLeft");
            frontRight.createTelemetryProperties(this.getPrefix(), "frontRight");

            this.register();
        }

        public void tankDrive(double leftPower, double rightPower) {
            frontRight.simpleSet(rightPower);
            frontLeft.simpleSet(leftPower);
        }
        
        @Override
        public void periodic() {
            super.periodic();
            frontLeft.updateTelemetryProperties();
            frontRight.updateTelemetryProperties();
        }
    }

-   Question: Does the order of the drive command matter?

### TankDriveWithJoysticksCommand

    package competition.subsystems.drive.commands;

    import com.google.inject.Inject;

    import xbot.common.command.BaseCommand;
    import competition.operator_interface.OperatorInterface;
    import competition.subsystems.drive.DriveSubsystem;

    //This first exercise is mostly completed for you. Take your time to read through it,
    // review all the comments, and then complete it by adding in a bit more code of your own.

    public class TankDriveWithJoysticksCommand extends BaseCommand {

        DriveSubsystem drive;
        OperatorInterface operatorInterface;

        @Inject
        public TankDriveWithJoysticksCommand(DriveSubsystem driveSubsystem, OperatorInterface oi) {
            drive = driveSubsystem;
            operatorInterface = oi;
            this.addRequirements(drive);
        }

        @Override
        public void initialize() {
            // This code is run one time, right when the command is started.
            // You don't need to write any code here for this exercise.
        }

        @Override
        public void execute() {
            // You need to get values from the joysticks and pass them into the motors.

            // Get values from the joysticks:
            // Here's how to get how far the left joystick's Y-axis is pushed:
            double leftValue = operatorInterface.gamepad.getLeftVector().y;
            double rightValue = operatorInterface.gamepad.getRightVector().y;
            // You'll need to get how far the RIGHT joystick's Y-axis is pushed as well.

            // Pass values into the DriveSubsystem so it can control motors:
            // right now, this just sends the left power to the left part of the drive.
            // You'll
            // need to give it a right power as well.
            drive.tankDrive(leftValue, rightValue);
        }

    }
