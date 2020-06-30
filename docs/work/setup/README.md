# Computer & Environment Setup

This guide shows how to set up Ample devices for running, debugging, developing, and testing web applications. 

Here is a list of programs you are going to need to install: 
- We recommend utilizing Google Chrome.
- We communicate and collaborate internally and with clients on [Slack](https://slack.com/downloads/mac)
- Most of our meetings that aren't on Slack are on [Zoom.us](Zoom.us)
- [1Password](https://1password.com/)  - Taylor will invite you to our vault
- We recommend using [VS Code](https://code.visualstudio.com/download) (this is what most of our developers use)

# Getting Started 

Most of our developers use a Mac. Please use the command line to install the following to set up  your environment: 

* [Xcode dev tools](http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/) 
		* `xcode-select —install`
	* [Homebrew](https://brew.sh/) 
	* `/bin/bash -c “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)”`
	* Generate a new [SSH key](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) 
		1. `ssh-keygen -t rsa -b 4096 -C “/your_email@example.com/“`
		2. When you’re prompted to “Enter a file in which to save the key,” press Enter
		3. Then you will be asked add a secure passphrase
 `> Enter passphrase (empty for no passphrase): /[Type a passphrase]/`
For more info on [SSH key passphrase](https://help.github.com/en/github/authenticating-to-github/working-with-ssh-key-passphrases) 
		4. Once you have generated your  SSH key you need to add it to your GitHub in setting/keys
	* [Direnv](https://direnv.net/) 
		1. ` curl -sfL https://direnv.net/install.sh | bash`
		2. `eval “$(direnv hook bash)”`
	* [Nvm](https://github.com/creationix/nvm) 
		* `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash`
	* [Rbenv](https://github.com/rbenv/rbenv) 
		1. `brew install rbenv`
		2. `rbenv init`
		3. Close your terminal and  open a new one
		4. Verify that rbenv is properly set up using this  [rbenv-doctor](https://github.com/rbenv/rbenv-installer/blob/master/bin/rbenv-doctor)  script:
		`curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash`

	* [Oh My ZSH](https://github.com/robbyrussell/oh-my-zsh) 
		* `sh -c “$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)”`

### Install Helpful VS Code Plugins (optional)
* [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) helps you visualize code authorship at a glance, seamlessly navigate and explore Git repos, and gain valuable insights via comparison commands. 
* [advanced-new-file](https://marketplace.visualstudio.com/items?itemName=patbenatar.advanced-new-file) Create new directories while creating a new file, and fuzzy-matching autocomplete to create new files relative to existing path.
* [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) stores history as a graph of snapshots. 
* [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) enables real-time collaboration.  It gives the ability to share a session with someone else, allowing them to edit code as well as share a server and debugging session. 
* [Setting Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) allows settings, extensions, and keyboard shortcuts across multiple devices. 
* [File Utils](https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils) is a convenient way of creating, duplicating, moving, renaming, and deleting files and directories. 
* [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets) provides rainbow colors for the round brackets, square brackets, and the squiggly brackets. 

### Our Developers recommend... 
* [Magnet app](https://apps.apple.com/us/app/magnet/id441258766?mt=12) - Every time you move content from one app to the other, compare data side by side or multitask in any other way, you need all the windows arranged accordingly. Magnet makes this process clean and simple. In one drag to the edge, you size a window into half of your screen.
* [Bear](https://apps.apple.com/us/app/bear/id1091189122?mt=12) - A beautiful, flexible writing app for crafting notes and prose. 
* [Copy Clip 2](https://apps.apple.com/us/app/copyclip-2-clipboard-manager/id1020812363?mt=12) - A lightning fast clipboard manager for your Mac.
* [Transmit](https://apps.apple.com/us/app/transmit-5/id1436522307?mt=12) - A file transfer client program for macOS.
* [Muzzle](https://muzzleapp.com/) - A free app that silences incoming notifications during presentations and screen-sharing.