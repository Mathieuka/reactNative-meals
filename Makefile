install:
	npm install

reinstall:
	rm -rf node_modules && npm install

android-dev: 
	@if [ ! -e .server ]; then \
	npm start -- --reset-cache > .server $$&  \
	touch .server;  echo ">>> Server Metro Started"; \
	npm run android; \
	else echo ">>> Server already in running on port 80811" ; \
	lsof -i tcp:8081; \
	npm run android; fi

ios-dev:  
	@if [ ! -e .server ]; then \
	npm start -- --reset-cache > null $$&  \
	touch .server;  echo ">>> Server Metro Started"; \
	npm run ios; \
	else echo ">>> Server already in running on port 8081" ; \
	lsof -i tcp:8081; \
	npm run ios; fi

server:
	@if [ ! -e .server ]; then \
	npm start -- --reset-cache > null $$& \
	touch .server;  echo ">>> Server Metro Started"; \
	else echo ">>> Server already in running on port 8081" ; \
	lsof -i tcp:8081; fi

kill-server:
	@if [ -e .server ]; then \
	kill -9 $$(lsof -t -i:8081); \
	rm .server; \
	echo ">>> Server shutdown !"; \
	else echo ">>> Server already shutdown"; fi










