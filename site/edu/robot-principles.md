## Overview

With the "XbotEdu" git folder open in IntelliJ, in the left file tree navigate to `src` > `test` > `java` > `xbot` > `edubot` > `basic_understanding`. There you will find a test class called <code>AObserveHowCommandsWork.java</code>. This Java class is meant for you to run each test individually, watch the output log, and then view the associated code to get a basic understanding of how the robot command system works.

Feel free to modify any of the code or play around - these classes are just meant to help you, and aren't used anywhere else in the curriculum. The techniques for running the examples are described in the following sections.

If you want to read more, I recommend [[Programming Robot Architecture]], but consider running each of the tests once first. There's also a state machine diagram of what methods the scheduler runs on commands at the [SeriouslyCommonLib commands page].

## How to actually run tests

With the test class open (in our case, AObserveHowCommandsWork.java), click the green arrow to the left of the test method. (The arrow at the class level will run all of the tests in the class; since there is only one test in the class, it's essentially the same as pressing the arrow at the function level.)


![Screenshot](https://github.com/Team488/XbotEdu/assets/3144757/cb10dd89-4cff-4f0b-b1dd-e174786e1f55)

It will run the selected test.

## A_ObserveHowCommandsWork

This test uses xbot.edubot.basic_understanding.ExampleCommand.java. You'll see a command get started, and then executed 10 times.

## B_ObserveChatter

This test uses xbot.edubot.basic_understanding.ChatCommandThatEnds. You'll see a command get started, executed a number of times, and then end itself, even though the scheduler keeps running.

## C_ObserveFightingCommands

This test uses xbot.edubot.basic_understanding.CommandA and xbot.edubot.basic_understanding.CommandB. Both of these commands "require" xbot.edubot.basic_understanding.ExampleSubsystem, and so the scheduler prevents both of them from running at the same time; the command that starts later will "win."

## Check your understanding

Take this [quick quiz](https://forms.gle/WfjFZPoCUBNndW6q9)

## Next Steps
Continue with the next curriculum challenge: [[Curriculum challenge ~ Tank Drive]]

[SeriouslyCommonLib commands page]: https://github.com/Team488/SeriouslyCommonLib/wiki/Commands 
