# docker-test

## Запуск локального образа из Dockerfile

`docker build . -t image_name`

## Запуск контейнера из хаба или локального образа

`docker run -dp 8080:80 --name docker-test -v ${PWD}:usr/ --rm nginx`
фоновый режим, прокидка портов, имя образа, прокидка томов, удаление после остановки

## Запуск контейнеров из docker-compose

`docker compose up -d` запуск
`docker compose down` остановка
`docker compose up -d --build` запуск со сборкой
