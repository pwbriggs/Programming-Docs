## Getting started {#getting_started}

### Onboarding

If you haven\'t yet, follow the instructions in
[Onboarding](Programming_Onboarding "wikilink") to install all the
required tools you\'ll need.

### Fork the XbotEdu repository {#fork_the_xbotedu_repository}

A fork is a copy of a repository. Forking a repository allows you to
freely experiment with changes without affecting the original project.
[More background on
forking](https://help.github.com/articles/fork-a-repo/).

1.  In the browser, navigate to
    [XbotEdu](https://github.com/Team488/XbotEdu)
2.  On github in the upper right hand corner click the \'Fork\' button
    (You might have to close the banner first)
3.  A dialog will appear asking you where you want to fork the repo but
    not always, it might just do it automatically. select your user
    account (should be the first entry)

### Sync the repository locally {#sync_the_repository_locally}

1.  If you haven't already, you will [Use SmartGit to
    clone](Use_SmartGit_to_clone "wikilink") that forked XbotEdu
    repository locally.
    1.  Make sure to have the following options selected as part of the
        clone:
        1.  Include Submodules (checked)
        2.  Fetch all Heads and Tags (checked)

**Note:** If you didn\'t use SmartGit to clone (eg. You used the command
line, like a GitWizard), run the following commands:

    git submodule init
    git submodule update

### Open the Edu projects in VSCode {#open_the_edu_projects_in_vscode}

1.  Open VSCode
2.  File -\> Open Workspace\...
3.  Navigate to your XbotEdu repository location (By default, might be
    Documents/Github/XbotEdu)
4.  Open XbotEdu.code-workspace

## Next Steps {#next_steps}

Continue with the next challenge: [Basic Robot
Principles](Basic_Robot_Principles "wikilink")
