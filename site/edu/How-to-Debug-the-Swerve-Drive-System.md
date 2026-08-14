**SET UP BEFORE TESTING**

1. Get an Xbox controller for the robot.
2. Update the main branch in Git or GitHub Desktop.
3. Open TeamXbot[insert year here]'s repository, then run the "Build Robot" configuration.
4. Grab your desired robot that you want to test, and put it **ON BLOCKS**. Make sure the wheels are free and not touching anything.
5. Turn on your desired robot, then connect to the robot (through WiFi or cable, but preferrably WiFi if it works).
6. Open FRC Driver Station
7. Run the "Build & Deploy Robot" configuration while connected to the robot, then connect the controller to your computer.
8. Carefully enable the robot through FRC Driver Station. To test individual motors, look at next steps.
9. Open Elastic (WPILib). Press file, open layout, find the TeamXbot[insert year here] file, then elasticLayout, and open the layout. Halve all the speed limits and set the correct Electrical Contract.

**HOW TO TEST INDIVIDUAL MOTORS**

10. Press up on the D-Pad to put the robot into motor testing mode. Then, press right on the D-Pad to switch between individual motors.
11. Test each motor. First, start with the left joystick, and slowly push upwards. If the individual motor's wheel moves in the intended direction, it works. Then, use the right joystick and slowly push to the right. If the motor's wheel spins to the intended direction, it was successful.
12. Cycle step 10 until you test every motor. Skip the up arrow on the D-Pad step if you have already done it once.

If step 10 and 11 were successful, go to the next step. If not, fix the motor configuration in the code.

13. To turn the robot back into normal drive mode, press the down arrow on the D-Pad. If all the motors are now activated and they move in the intended direction using the left joystick, there should be no issues. If there are issues, go to the next step.
14. If the motors jitter in normal drive mode, the motors might be inverted in the code. Add code into the Electrical Contract to fix the issue.