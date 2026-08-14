## Getting started

### Onboarding

If you just want to do the curriculum, follow the instructions in: [Edu
Onboarding](Edu_Onboarding "wikilink")

Or if you need to setup for in-season robot programming, follow the
instructions in [Full Programming
Onboarding](Programming_Onboarding "wikilink") to install all the
required tools you\'ll need.

### Fork the XbotEdu repository

A \'fork\' is a personal copy of a code repository. Forking a repository
allows you to freely experiment with changes without affecting the
original project. [More background on
forking](https://help.github.com/articles/fork-a-repo/).

1.  In the browser, navigate to
    [XbotEdu](https://github.com/Team488/XbotEdu)
2.  On github in the upper right hand corner click the \'Fork\' button
    (You might have to close the banner first)
3.  A dialog will appear asking you where you want to fork the repo but
    not always, it might just do it automatically. select your user
    account (should be the first entry)

### Sync the repository locally

1.  If you haven't already, you will [Use GitHub Desktop to
    clone](Use_GitHub_Desktop_to_clone "wikilink") that forked XbotEdu
    repository locally.

**Note:** If you didn\'t use GitHub Desktop to clone (eg. You used the
command line, like a GitWizard), run the following commands:

    git submodule init
    git submodule update

### Open the Edu projects in IntelliJ

1.  Open the application \'IntelliJ IDEA Community Edition\' that we
    installed during the onboarding steps.
2.  Click Open from the Projects tab.
3.  Navigate to your XbotEdu repository location (by default, might be
    in Documents/GitHub/XbotEdu) and open it.
4.  If prompted, you want to open the project as a Gradle project, not
    an Eclipse project.
5.  If prompted, trust the project.
6.  The project will automatically start building.

IntlliJ requires some additional configuration after you load a project
for the first time:

`<img width="416" height="158" alt="Main menu" src="https://github.com/user-attachments/assets/a324e688-b384-40e1-b46a-9555e84e421e" />`{=html}

`<img width="717" height="479" alt="Project settings menu item" src="https://github.com/user-attachments/assets/782ef074-b50c-49e1-8411-b194f76f5d70" />`{=html}

`<img width="1862" height="856" alt="Select SDK" src="https://github.com/user-attachments/assets/078485d5-28e2-4549-9a1d-fdeb771fa2da" />`{=html}

Select the SDK \"temurin-17\". If it\'s not present, you may need to
select \"Add JDK from disk\...\" and find the JDK that you installed
with WPILib, which is located at `C:\Users\Public\wpilib\<year>\jdk`

`<img width="1842" height="1260" alt="Verify correct SDK" src="https://github.com/user-attachments/assets/c3e24666-8a06-4e25-ac8c-1a5e050bc30b" />`{=html}

Go to the SDKs tab and select the same JDK (in this case,
\"temurin-17\") and verify that the paths all have
`C:\Users\Public\wpilib\<year>\jdk`.

Click OK.

`<img width="711" height="529" alt="Settigs menu item" src="https://github.com/user-attachments/assets/37014dde-5c29-4ab0-b24e-3227b638017b" />`{=html}

Open up the Settings dialog.

`<img width="1982" height="1382" alt="Gradle Project SDK" src="https://github.com/user-attachments/assets/8fa6ca6d-ab1b-4f8c-b197-845ea0da7614" />`{=html}

Navigate to \"Build, Execution, Deployment\" -\> \"Build Tools\" -\>
\"Gradle\" in the menu on the left. In the \"Gradle JVM\" field, select
\"Project SDK\", and then click OK.
