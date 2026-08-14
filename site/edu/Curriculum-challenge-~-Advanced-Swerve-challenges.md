Notable files:

* XbotEdu\src\main\java\competition\subsystems\drive\commands\SwerveDriveWithJoysticksCommand.java
* XbotEdu\src\main\java\competition\subsystems\drive\SwerveDriveSubsystem.java

SwerveDriveWithJoysticksCommand:
* Determine how you want to map a desired X velocity (meters/second), Y velocity (meters/second), and rotational velocity (radians/second) from the gamepad and send it to the `move` method on the SwerveDriveSubsystem.

SwerveDriveSubsystem:
* There is already code to go from ChassisSpeeds to SwerveModuleStates. See the line that sets `desiredSwerveModuleStates` in the `move()` function. `desiredSwerveModuleStates` is an array of 4 `SwerveModuleState`, each of which has a `speedMetersPerSecond` and an `angle` (in radians).
* You will need to have each swerve module point to its respective `angle`. This is very similar to the earlier curriculum challenge about pointing the whole robot to an angle, except here, you are only moving a single swerve module.
* You will need to have each swerve module drive at its goal velocity. This can also use PID, but note that the goal here is a little different than previous challenges - once the motor has reached its target speed, you will need to keep applying power or the motor will slow down again.

You can check on your progress using AdvantageScope when the robot code is run in Simulation mode.
* Create a "Swerve" tab and drag AdvantageKit/RealOutputs/SwerveDriveSubsystem/CurrentSwerveState into the Red state, and AdvantageKit/RealOutputs/SwerveDriveSubsystem/DesiredSwerveStates into the Blue state.
    * Note that DesiredSwerveStates won't appear until you enable the robot and ensure that the `move()` method is called at least once.
* Create an Odometry or 3D Field tab and drag  AdvantageKit/RealOutputs/PoseSubsystem/Location into Poses or 2D Poses, respectively.