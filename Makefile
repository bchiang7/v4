deploy:
	rsync -hr --delete --progress ./public root@dtrautwein.eu:/var/www/dtrautwein.eu
