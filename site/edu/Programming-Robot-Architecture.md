Team 488 programs its robots using a model known as the \"Command\"
pattern.

It roughly works like this:

-   A **Robot** is made out of
    [Subsystems](Programming-Robot-Architecture#Subsystems "wikilink").
    -   **Subsystems** have areas of responsibility. A robot might have
        a DriveSubsystem, an ArmSubsystem, a VisionSubsystem\...
    -   Basically, every \"thing\" on the robot is contained by one
        **Subsystem.**
-   [Commands](Programming-Robot-Architecture#Commands "wikilink") use
    **Subsystems** . One **Subsystem** will have many **Commands** that
    use it.
    -   RaiseArmCommand, LowerArmCommand, and StopArmCommand would all
        use the **ArmSubsystem**.
    -   **Commands** can use more than one **Subsystem**. You could have
        a RaiseArmAndDriveForwardCommand.
    -   **Commands** are often triggered by humans pushing
        joystick/gamepad buttons.
-   The **Scheduler** runs Commands on the robot, and handles conflicts.
    It decides what happens when somebody tries to run RaiseArmCommand
    and LowerArmCommand at the same time.

FIRST also has a great page that explains the Command pattern:
<https://wpilib.screenstepslive.com/s/3120/m/7952/l/105519-what-is-command-based-programming>

## More Details

### Subsystems

Subsystems are responsible for all of the direct communication with
physical devices on the robot (things like motors, sensors etc..). They
provide a single place for Commands that need to use these things to do
so in a clean, abstract manner.

#### Motivation

For example, imagine a robot that has 2 motors on it (1 per side). All
code that needs to move the robot needs to communicate with these 2
motors (this could be a lot of places in the code). Overtime the robot
might change and now there are 4 motors instead of 2, all of the places
that were talking to the motors need to be updated to account for this
change. In order to avoid having to do this bulk updating of code, we
use a Subsystem to wrap the motors (however many there are) and just
expose out methods that aren\'t likely to change for others to use.

### Commands

This diagram helps show the lifecycle that a Command goes through:
\[Commands\](https://github.com/Team488/SeriouslyCommonLib/wiki/Commands)

#### Starting commands

On the real robot, commands are often started by a human pushing a
joystick button. For example the operator might push a button to run the
intake to suck balls into the robot. They can also be manually started
by calling \`.schedule()\` on the command (which you will see in the
tests sometimes).

#### Requires

Requires is the way to ensure that only 1 command is telling
motors/mechanisms what to do at any given time. For example if you had a
command called DriveForward and another one called StopDrive you
wouldn\'t want them both running at the same time or they would fight
over the motors and bad things would happen.

A Command can \"require\" one or more subsystems. What this means in
practice is that when this command starts running if there were any
commands already running that also required any of these subsystems,
those existing commands will be cancelled.

#### Default commands

A Subsystem can optionally have 1 default command specified. This
command will be run whenever no other commands that require the
subsystem are running. This can be really useful for providing a safe
default behavior (for instance for an arm that can move perhaps by
default you want to stop it\'s motors so it doesn\'t hurt itself).
Another common use is for a subsystem that will really only have 1
command that ever runs on it and it should be running all the time.

Default Commands for Subsystems are specified in the
`SubsystemDefaultCommandMap` class. A default Command must require the
Subsystem is it default for.

#### Operator Command Map

TODO populate this

### Virtual Subsystems

TODO populate this

## How tos

-   [ How to create a new
    subsystem](Programming:_How_to_create_a_new_subsystem "wikilink")
