Pré-requis pour installation sur Debian :

	- Installer git
		sudo apt-get install git

	- Installer node js et nvm
		wget -qO- https://deb.nodesource.com/setup_10.x | sudo -E bash -
	 	sudo apt-get install -y nodejs

	- Cloner le dépot 
		git clone https://gitlab.loleske.ovh/MSamoht/yann-logs.git
		cd ~/yann-logs

	- Installer yann-logs par npm
		npm i

	- Lancer yann-logs
		npm run dev

	- Dans une interface web, saisir :
		http://127.0.0.1:3000/<chemin  non relatif>
		exemple : http://127.0.0.1:3000//etc/fstab
