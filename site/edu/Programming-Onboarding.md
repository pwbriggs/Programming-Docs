**Short link:** <https://tinyurl.com/xbotsetup>

**Please don\'t skip any steps** during this onboarding process, it
always results in pain down the road as we try to figure out which steps
you did/didn\'t do! If you run into any problems at all don\'t hesitate
to reach out to other people on the programming team, we\'re here to
help!

# Account setup {#account_setup}

Follow the instructions below to get accounts for the following
services.

If you are using a team laptop - create your own user account on the
machine. Initially login as the Xbot account, and use that to make your
own account.

## GitHub

We store all of our code in git on github. If you aren\'t familiar with
the terms source control or git, read [Git
Introduction](Git_Introduction "wikilink").

1.  If you don\'t already have one, sign up for an account at
    <http://www.github.com>
2.  Ask someone on the programming team (including students) to add you
    to the xbot project.
3.  You\'ll get an invite in the mail to join the group. You have to
    click the link in this email to join the team488 organization in
    github.

## Slack

Slack is kind of a modern IRC chat tool and we use it as our primary
communication tool. To get an invite to xbots account bug one of the
Programming mentors with your email address.

<https://xbot.slack.com/>

## Asana

Asana is our light-weight task tracking system. We use it to keep track
of what\'s currently being worked on by who as well as what\'s on deck
next.

1.  Ask a programmer to add you to the Asana workspace. If you tell them
    your gmail account you can just use that to sign in.
2.  Navigate to <http://www.asana.com>

Note that seattleschools.org email addresses don\'t seem to allow you to
join our organization. If you have a gmail address, that works best. If
Asana forces you to sign in with your seattleschools.org email address,
you can clear your browser cookies to sign in with your personal email.

# Software Install {#software_install}

If you\'re borrowing a laptop from the team it might already have some
of the required software on it, ask someone to help you figure out
what\'s missing.

A quick sanity check is look for a program called \`2025 WPILib VS
Code\`, if it\'s there you\'re probably good for this year.

## Install GitHub Desktop {#install_github_desktop}

1.  Go to <https://desktop.github.com/> and click the \"Download for
    Windows\" button.
2.  Run the installer. It won\'t ask any questions. It will open GitHub
    Desktop when it\'s done.
3.  Click \"Sign in to Github.com\" and sign in with your account.

## Installing/Updating FRC Game Tools {#installingupdating_frc_game_tools}

*It is recommended to uninstall any previous FRC related files according
to the instructions*

For Macs, go here and read this instead:
[Here](https://github.com/Team488/XbotEdu/wiki/Setting-up-QDriverStation-for-Macs)

Go here and follow the instructions:
<https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/frc-game-tools.html>

-   When installing the FRC Game Tools, you\'ll be prompted to login. Go
    ahead and create a new account. You can set Organization to team488.
-   Update in the National Instruments app when prompted.

## Installing WPILib Tools {#installing_wpilib_tools}

***Note:** It is easy to miss a step here, read the instructions
carefully!*

For Windows: [Go
here](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/wpilib-setup.html)

1.  Follow the **WPILib Installation Guide** steps.
2.  When in [GitHub](https://github.com/wpilibsuite/allwpilib/releases)
    to download your appropriate installers, scroll down until you reach
    \"assets\" and choose your appropriate installer. Continue following
    the Instructions.
3.  Download and run the WPILibInstaller, it will prompt you to select
    All Users or Current User, select either.
4.  There will be checkboxes signaling whether or not you have the
    required files. If greyed out and checked it means it is installed,
    otherwise the installer will install what you need.

Once you hit the \"Post-Installation\" step in the WPILib Installation
Guide, you can stop.

## Installing and Configuring IntelliJ {#installing_and_configuring_intellij}

1.  Go
    [here](https://www.jetbrains.com/idea/download/download-thanks.html?platform=windows&code=IIC)
    to download the IntelliJ Community installer if you\'re on Windows.
    If you\'re not on Windows, find the IntelliJ Community installer
    [here](https://www.jetbrains.com/idea/download).
2.  Run the installer. The default settings in the installer should work
    fine.
3.  Launch IntelliJ Community.
4.  Find the plugins tab and install the following plugins: FRC,
    CheckStyle-IDEA, VSCode Keymap (optional, but recommended).
5.  Restart IntelliJ.
6.  From the Welcome screen on the Projects tab, find the link to
    Configure FRC Team Number. Enter 488 in the dialog box and save the
    team number.
7.  From the Welcome screen, on the Customize tab, select VSCode under
    Keymap (optional, but recommended).

## Installing Device Programming Tools {#installing_device_programming_tools}

Rev Hardware Client and Phoenix Tuner X are programs used to set up
motor controllers and other similar devices. Not everyone needs to use
these, but they can be helpful to have if you are working on bringing up
a brand new robot.

1.  Go to [the REV Hardware Client 2
    instructions](https://docs.revrobotics.com/rev-hardware-client-2)
    and follow the installation instructions.
2.  Install Phoenix Tuner X from the [Microsoft
    Store](https://apps.microsoft.com/detail/9nvv4pwdw27z?hl=en-US&gl=US).
