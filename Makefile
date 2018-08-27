.PHONY: deploy

deploy:
	git pull
	npm run build
	rm -rf /var/www/html
	cp -R build /var/www/html
