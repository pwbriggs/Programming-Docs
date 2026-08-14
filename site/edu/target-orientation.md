In this challenge we\'re going to rotate the robot to a target
orientation. This is a very common thing we need to do autonomously
during competition, for example to point at a goal to shoot balls into
it.

**REMINDER** Don\'t forget to make a new branch! Get into the habit of
doing this at the start of each new feature.

## Our orientation system {#our_orientation_system}

Read this to understand how we define rotation: [Frames of
reference](https://github.com/Team488/SeriouslyCommonLib/wiki/Frames-of-reference)

You\'ll need to know this to complete this challenge.

## Graphical Tests {#graphical_tests}

[images/Rotation-visualizer.png](images/Rotation-visualizer.png "wikilink")

Like the previous challenge, we have a nice visualizer that\'s easier to
read/understand than reading hundreds of log statements.

You can visualize the rotation of the virtual robot as your code is
running using the visualization utility. To run it on IntelliJ, find the
\"RotationTestVisuallizer\" run configuration at the top of the window,
and run it. When the window opens, select the test you are working on to
start the simulation.

-   The yellow line represents your robot\'s current orientation
    (initial position, and will remain yellow if the robot isn\'t
    moving. It will turn into a black line when the robot starts moving)
-   The black line represents your robot\'s current orientation
-   The pink line represents the goal
-   The bar in the middle of the black line represents your robot\'s
    current rotational speed
-   The bar on the outside of the black line represents your robot\'s
    current rotational power

Note - your robot may not necessarily start at 0 degrees! =\]

## Part1: Turning 90 degrees {#part1_turning_90_degrees}

The goal is to write a command that will rotate the robot 90 degrees to
the left as quickly as possible, and then end.

-   Command:
    \\XbotEdu\\src\\main\\java\\competition\\subsystems\\drive\\commands\\TurnLeft90DegreesCommand.java
-   Unit test:
    \\XbotEdu\\test\\java\\xbot\\edubot\\rotation\\TurnLeft90DegreesCommand.java
-   Visualizer Test:
    \\XbotEdu\\test\\java\\xbot\\edubot\\rotation\\RotationTestVisualizer.java

**Hint**: You will need to use the `getCurrentHeading().getDegrees()` in
the `PoseSubystem` to figure out where you are pointing.

**Hint**: The `pose.getCurrentHeading().getDegrees()` is relative to the
field and returns a value from -180 to 180 degrees.

**Real World**: A real robots absolute heading is not known with
absolute certainty and the value relative to the field degrades with
time.

## Part 2: Turning to an arbitrary orientation {#part_2_turning_to_an_arbitrary_orientation}

Now that you have your basic 90 degree turn working, we\'re going to
expand upon that with a more complicated command that will rotate the
robot to an arbitrary heading, starting from any arbitrary heading - and
do it as fast as possible!

This will involve handling some trickier cases with respect to angles
around a circle.

-   Command:
    /EduBot/src/xbot.edubot.subsystems.drive.commands/DriveToOrientationCommand.java
-   Unit test:
    /EduBot/tests/xbot.edubot.rotation/DriveToOrientationTest.java

Now you should be able to get all tests in this class to pass, since you
have both TurnLeft90DegreesCommand and DriveToOrientationCommand
written.

## Next steps {#next_steps}

Now that you have a good foundation with writing individual commands,
let\'s learn about combining them with
[CommandGroups](Curriculum‐Lesson‐~‐CommandGroups "wikilink")
