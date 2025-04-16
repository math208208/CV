DOCKER_USERNAME ?= math208
APPLICATION_NAME ?= php-fpm
PATH_DOCKER ?= ./docker/php/Dockerfile

build:
		docker build --tag ${DOCKER_USERNAME}/${APPLICATION_NAME} -f ${PATH_DOCKER} .

up:
		docker compose up -d

down:
		docker compose down

exec:
		docker compose exec node npm run dev

startwp:
		npm run start

buildwp:
		npm run build