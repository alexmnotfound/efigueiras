.PHONY: dev build deploy lint

dev:
	cd app && npm run dev

build:
	cd app && npm run build

lint:
	cd app && npm run lint

deploy: build
	firebase deploy
