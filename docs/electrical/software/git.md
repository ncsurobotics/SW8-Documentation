
*Note that this page is currently incomplete.*

This is meant to be a starting point for those with little / no knowledge of git or using the command line to get started with using git.

## Installation

### Windows

- Download the "Standalone Installer" (`exe` file) from (git-scm.com)[https://git-scm.com/]
- Run the installer. It will require administrative privileges.
- Follow the instructions of the installer. Generally, the default set of components and options are fine. Noted below are options you may want to change
    - You may want to choose a different "default editor". Vim is a command line editor, but is not intuitive if you are not familiar with it. If not sure what to choose, nano is a different command line editor that is easier to follow for those not familiar with command line text editors.
    - Override default branch name to "main" (this is consistent with what github does)


### macOS

On macOS, git is installed with the Xcode command line tools

- Open the Terminal app
- Run the command `git`
- If not already installed, you will be prompted to install Xcode command line tools
- If they are already installed you will get a help message for git that looks something like the following

```
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--super-prefix=<path>] [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.
```


### Linux

- Git should be available through your distribution's package manager
    - Ubuntu, Debian: `sudo apt install git`
    - Fedora / RHEL: `sudo dnf install git`
    - Arch: `sudo pacman -S git`


## GitHub Authentication

GitHub disallow less secure "basic password" authentication. Thus to clone private repositories or push to repositories you have write access to, you must be able to authenticate with a more secure method. There are three ways of doing this

- Use Git Credential Manager (recommended as this is the easiest to setup)
- Use a personal access token (strongly discouraged for general use)
- Use a SSH key registered to your GitHub account

### Git Credential Manager

Generally we are using git on local computers with a graphical login. Thus, Git Credential Manager can be used. It should be installed by default with the git installer for windows. Other platforms, follow the instructions [here](https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/install.md).

Once installed and configured, you can clone and interact with git repositories using "https" protocol. When you need to login to your github account to access a repository, a small window will popup allowing you to login. Git credential manager will remember the login on that computer in the future.


## Using Git

*Note: There are many graphical tools out there for git (GitHub desktop, SourceTree, etc), however this guide focuses on using git from the command line.*


### Where to Put Repositories

TODO


### Open a Terminal

TODO: Opening and navigating to correct directory


### Clone a Repository

TODO: How to and what this does


### Making Changes

TODO: Add, commmit, push


### Getting others Changes

TODO: Pull & merging basics
