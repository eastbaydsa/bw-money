.PHONY: deploy

deploy:
	git pull
	npm install
	npm run build
	rm -rf /var/www/html
	cp -R build /var/www/html

convert-donors-csv:
	npx gulp convertToJson
