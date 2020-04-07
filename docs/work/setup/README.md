# Computer & Environment Setup
## Setup and Install
This a list of things you are going to need to install to get your computer setup:

* Chrome
* [Slack](https://slack.com/downloads/mac)
* [Sonos](https://www.sonos.com/en-us/support) for the jams
* [Zoom.us](Zoom.us)
* [1Password](https://1password.com/)  - Taylor will invite you to our vault
* [VS Code](https://code.visualstudio.com/download) (this is what most of our developers use)
* Things to install via command line 
	* [Xcode dev tools](http://osxdaily.com/2014/02/12/install-command-line-tools-mac-os-x/) 
		* `xcode-select —install`
	* [Homebrew](https://brew.sh/) 
	* `/bin/bash -c “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)”`
	* Generate a new[SSH key](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) 
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

### Helpful VS Code Plugins (optional)
* [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
* [advanced-new-file](https://marketplace.visualstudio.com/items?itemName=patbenatar.advanced-new-file)
* [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
* [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
* [Setting Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
* [File Utils](https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils)
* [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)

### Optional  but Helpful Things 
* [Magnet app](https://apps.apple.com/us/app/magnet/id441258766?mt=12)
* [Bear](https://apps.apple.com/us/app/bear/id1091189122?mt=12)
* [Copy Clip 2](https://apps.apple.com/us/app/copyclip-2-clipboard-manager/id1020812363?mt=12)
* [Transmit](https://apps.apple.com/us/app/transmit-5/id1436522307?mt=12)
* [Muzzle ](https://muzzleapp.com/)

