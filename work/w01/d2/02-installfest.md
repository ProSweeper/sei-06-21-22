<img src="https://i.imgur.com/pF2sUV5.jpg">

# SEI Installfest

We'll be installing the following tools.

- WSL (for Windows Users)
- Homebrew
- Xcode
- VS Code
- Git
- Node.js
- PostgreSQL
- MongoDB
- Python
- Django
- Spectacle
- Imgur

#### Note on Running Commands in Terminal

When running several of the following commands today in terminal, note that many of them simply do not provide a response - this is a case of "no news is good news" - only be concerned if you receive error/warning messages.

## WSL (for Windows Users)

Because Linux commands are very similar to those in the Mac operating systems (they both have their roots in the Unix operating system), you will want to run Linux on your Windows machine during SEI.

Luckily, Windows has made it far easier to run Linux (vs. using a virtual machine) by including [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install).

Please follow the instructions in the above link to set it up.

## Homebrew

Homebrew is a package manager that we will use to install various command line tools in our class.

Open up terminal, and paste the following command to install Homebrew. You might be prompted to install XCode Command Line Tools during the install process.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

If you are prompted to install the XCode CLI, say yes and your homebrew installation will continue.

After the installation process, run the command `brew doctor`. If any warnings or errors are displayed, we will need to resolve them before proceeding with the rest of the install fest.

Lastly, make sure to run `brew update` to make sure you have the latest lists of available software.

> If you're a Linux user, please refer to [Homebrew's Docs for Linux](https://docs.brew.sh/Homebrew-on-Linux) 

## Xcode

We do not use Xcode in class but some other applications that we do use require some Xcode libraries. Normally, all you need is the Xcode CLI which should have already been installed when you installed Homebrew.

DO NOT worry about installing Xcode unless prompted to do so (usually using the command `xcode-select --install`).

If you do need to install Xcode - **be patient**, it's a beast!

>  If you need to, you can install Xcode through the App Store. (You probably don't need to.) [Link here](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)

## Visual Studio Code

Text editors are a personal choice. One of the most popular open source text editors these days, for good reason, is Visual Studio Code.

> Note: VS Code's _keyboard shortcuts_ are different than the shortcuts used by the Sublime or Atom editors. If you already know Sublime's shortcuts and don't want to learn those of VS Code, it's possible to configure VS Code to use Sublime's.

Download and install VS Code from [https://code.visualstudio.com/](https://code.visualstudio.com/).


#### Add Ability to Launch VS Code by typing `code`

1. **IMPORTANT** - Be sure that VS Code is in your Mac's `Applications` folder.
2. Launch VS Code using spotlight (`command + space` - then start typing `vs c` until you see the app, then press enter).
3. Type `shift + command + P` to open the command palette.
4. Start typing `shell command` and when you the<br>`Shell Command: Install 'code' command in PATH` command - click it!
5. Quit VS Code and Terminal.
6. Relaunch Terminal
7. You should now be able to open a folder to edit by typing `code .`

Check [this link](https://code.visualstudio.com/docs/setup/mac) for troubleshooting if you run into issues.

## Git

Git is the version control software we will be using - it's extremely popular.

You should have already installed Git as instructed to complete the pre-work.

If it's not installed, we can use Homebrew to install it:

```
brew install git
```

#### Github

[Github](https://github.com/) provides a way to host Git repos in the cloud.  It enables collaboration and is wildly popular.

You should have already opened a personal Github account, however, you need to have a General Assembly Github Enterprise account as well.  You can get one by signing up here:  [http://git-invite.generalassemb.ly/](http://git-invite.generalassemb.ly/)

> Note that you may use the same username for both GH & GHE, however, it's recommended that you distinguish between the two by appending `-ga` to your GH username, i.e., `<your GH usename>-ga`

#### Configuring git to default to a branch named `main`

GitHub (in the cloud) now defaults newly created remote repos to use a default branch named `main` instead of `master`.  To ensure that when you create a local repo (using `git init`) it does the same, run the following command:

```
git config --global init.defaultBranch main
```

#### Configuring git's "pull" Mode:

Run the following command to inform how git should merge fetched commits:

```
git config --global pull.rebase true
```

#### Configuring git to use VS Code as its Editor

There will be a time when git needs info and automatically opens an editor.  The default editor used by git is usually vim or nano - and neither is very user friendly.  The following command will set git's editor to VS Code:

```
git config --global core.editor "code --wait" 
```

#### Configuring your Preferred username & email:

Run the following two commands to configure your preferred Git username and email - it is recommended that you use your **personal GH** info, **not GHE**:

```
git config --global user.name "username"
```

then...

```
git config --global user.email "youremail@domain.com"
```

#### Configuring a Global git ignore

> IMPORTANT: **THIS STEP IS CRITICAL**

Everyone should have a global **git ignore** file so that you don’t have to worry about making the appropriate entries in a project’s git ignore.

First, create the file:  `touch ~/.gitignore_global`

Next, configure git to use this file:  `git config --global core.excludesfile ~/.gitignore_global`

Finally, lets put some good stuff in there by editing the newly created `.gitignore_global` file using VS Code:

1. `code ~/.gitignore_global` to open the file in VS Code

2. Copy/paste the following into `~/.gitignore_global`:

```sh
# This is a list of rules for ignoring files in every Git repositories on your computer.
# See https://help.github.com/articles/ignoring-files

# Compiled source #
###################
*.class
*.com
*.dll
*.exe
*.o
*.so

# Packages #
############
# it's better to unpack these files and commit the raw source
# git has its own built in compression methods
*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip

# Logs and databases #
######################
*.log

# OS generated files #
######################
._*
.DS_Store
.DS_Store?
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Testing #
###########
.rspec
capybara-*.html
coverage
pickle-email-*.html
rerun.txt
spec/reports
spec/tmp
test/tmp
test/version_tmp

# node #
########
node_modules

# Rails #
#########
**.orig
*.rbc
*.sassc
.project
.rvmrc
.sass-cache
/.bundle
/db/*.sqlite3
/log/*
/public/system/*
/tmp/*
/vendor/bundle


# Ruby #
########
*.gem
*.rbc
.bundle
.config
.yardoc
_yardoc
doc/
InstalledFiles
lib/bundler/man
pkg
rdoc
tmp

# for a library or gem, you might want to ignore these files since the code is
# intended to run in multiple environments; otherwise, check them in:
# Gemfile.lock
# .ruby-version
# .ruby-gemset

# CTags #
#########
tags

# Env #
#######
.env

# Python #
#######
*.pyc
__pycache__/

# Misc #
.eslintcache

```

3. Save the file.

#### Avoiding Having to Create A Git Message Every Time a Git Merge Takes Place

By default, git asks for a commit message any time a merge takes place, for example, you'll be running this command quite a bit:  `git pull upstream master`.

To avoid this from happening, we can add a single line to our terminal configuration - this is the line we're going to need to add anywhere inside of the file identified below:

```
export GIT_MERGE_AUTOEDIT=no
```

**IF using ZSH users:**

Use VS Code to edit the `~/.zshrc` file:

```
code ~/.zshrc
```

**If NOT using ZSH**, run `ls -a ~` and check for either a `.bash_profile` or a `.bashrc` file, then use VS Code to edit that file:

```
code ~/.bash_profile    (or ~/.bashrc, depending on which one exists)
```

**Regardless of which file you edited, be sure to save it.  You will also need to quit (`command + Q`) terminal and relaunch it for this setting to take effect.**

## Node.js

Node is a JavaScript engine for the backend. We use it to power our web servers and connect to our databases.

```
brew install node
```

#### Windows WSL Installation

[Follow these instructions if you are running WSL 2 on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)

#### Can't Install Node Due to Outdated Operating System

If you receive an error regarding that your operating system is no longer supported, your first option is to update your operating system.  Otherwise, install Node by browsing to [its website](https://nodejs.org/en/), then clicking on the green **Current** button.

#### Verifying the Install

Verify the installation afterwards by running:

```
node -v
npm -v
```

The above commands should display versions without any errors. To verify that all the required permissions are set correctly, try to install a package such as the useful _nodemon_ globally:

```
npm install -g nodemon
```

## PostgreSQL

Install the **PostgreSQL** database management system (DBMS) using Homebrew with this command:

```
brew install postgresql
```

If you receive an error regarding that your operating system is no longer supported, skip to the "Can't Install PostgreSQL Due to Outdated Operating System" installation instructions below...

After Postgres is installed run this command:

```
brew services start postgresql
```
 
Followed by this command to test the install by creating a new database named the same as the current system user:
 
```
createdb
```

#### Windows WSL Installation

First, [follow these instructions if you are running WSL 2 on Windows](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql)

After installing PostgreSQL following the above instructions, it's time to add your usual machine user to PostgreSQL to ease development with Django, etc...

1. Open a WSL/Ubuntu terminal

2. Make sure that you are logged in as your usual user (restart your system if necessary). Then type `whoami` and take note of your username.

3. Login as the `postgres` user created during the install:

  ```
  sudo -i -u postgres
  ```

4. Make sure that your usual machine user is not already created:

  ```
  dropuser <the username that whoami returned>
  ```

5. Add your username to PostgreSQL:

  ```
  createuser --interactive <the username that whoami returned>
  ```
  > IMPORTANT:  Be sure to type in 'y' when asked if the new role shall be a superuser.

6. Congrats - your usual machine user is now a user in PostgreSQL as well!  Log back in as your usual user:

  ```
  sudo -i -u <the username that whoami returned>
  ```
  > You may be prompted to enter the password for the **postgres** user you created during the install.  If you can't remember it, try typing 'exit', or restart the system.

7. After logging in as your usual user, open a WSL/Ubuntu terminal and test that you can create/delete a database:

  ```
  createdb testdb
  dropdb testdb
  ```

#### Can't Install PostgreSQL Due to Outdated Operating System

We'll install an older version of PostgreSQL that's compatible with your operating system.  Don't worry, though, the older version will be just as capable...

1. Install the slightly older version:

	```
	brew install postgresql@9.5
	```
	
2. In the output of the install process, there will be the message:

	**If you need to have postgresql@9.5 first in your PATH run:**
	
	The command that follows begins with `echo 'export PATH...`
	
	Copy that entire command and run it.
	
3. Next, run this command:

	```
	brew link --force postgresql@9.5
	```
	
4. Now let's start up the database:

	```
	brew services start postgresql@9.5
	```
	
5. And finally:

	```
	createdb
	```

## Installing MongoDB

Install **MongoDB** using Homebrew using the following commands:

```
brew tap mongodb/brew
```

The above command might take a moment or two to complete.  When finished, install MongoDB with:

```
brew install mongodb-community
```

### Starting the MongoDB Server

You start the Mongo database server with the following command:

```
brew services start mongodb-community
```

The above command also ensures that the MongoDB engine runs after restarting your computer.

More info about installing MongoDB using Homebrew can be found [here](https://github.com/mongodb/homebrew-brew).

#### Windows WSL Installation

[Follow these instructions if you are running WSL 2 on Windows](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-mongodb)

## Installing Python 3

> Note: Due to time constraints and for simplicity, we will not be using Python "virtual environments" during SEI.  If you are familiar with using virtual environments, you may continue to use them.  If you decide to continue to develop using Python beyond SEI, your next step would be to learn about using virtual environments.

Brew is also used to install Python 3. (Python 2 is already installed on your Mac.)

Install **Python** using Homebrew with this command: `brew install python`. 

You can test the installation by running `python3 --version`.

Python 3's package manager, `pip3` should have automatically been installed with Python 3.  Test that it was installed by running `pip3 --version`.

## Installing Django

We will use `pip3` to install Django, a robust web framework for Python. We will be installing the latest version (3.x.x):

```
pip3 install Django
```

If you receive a "permissions" error, try this command:

```
pip3 install --user Django
```

## Installing Spectacle

Install [Spectacle](https://www.spectacleapp.com/) for resizing windows.

This free "productivity" tool is invaluable when it comes to minimizing the time spent sizing windows using the mouse.

## Installing Imgur

Create an account on [imgur.com](https://imgur.com/) and install [mac2imgur](https://github.com/mileswd/mac2imgur) to ease uploading screenshots and other images from your computer to your imgur account.

## Update Your Shell to Show Repo Info

If you've already personalized your shell, be it Bash or Zsh, you'll want to skip this section.

#### Bash

Use VS Code to edit the `~/.bash_profile` or `~/.bashrc` file:

```
code ~/.bash_profile    (or ~/.bashrc, depending on which one exists)
```

Copy and paste the following (it doesn't matter where):

```
parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}
export PS1="\u@\h \[\e[32m\]\w \[\e[91m\]\$(parse_git_branch)\[\e[00m\]$ "
```

Save the file, quit Terminal (`command + Q`), then re-launch Terminal.

#### Zsh

Zsh users should install Oh-My-Zsh found [here](https://ohmyz.sh/).
