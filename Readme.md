# Приложение на подобии Express

Это простое приложение, использующее фреймворк Express.js.

## Возможности

- Базовая настройка Express.js
- Конфигурация Docker для контейнеризации приложения

## Необходимые условия

- [Node.js](https://nodejs.org/) (версии 14 или выше)
- [Docker](https://www.docker.com/)

## Установка

1. Клонируйте репозиторий:
    ```sh
    git clone https://github.com/danilger/express.git
    cd express
    ```

2. Установите зависимости:
    ```sh
    npm install
    ```

## Запуск приложения

### С использованием Node.js

1. Запустите приложение:
    ```sh
    npm start
    ```

2. Приложение будет доступно по адресу `http://localhost:3000`.

### С использованием Docker

1. Сборка и запуск контейнера:
    ```sh
    docker-compose up --build
    ```

2. Приложение будет доступно по адресу `http://localhost:3000`.

## Структура проекта

- `src/` - Исходный код приложения
  - `index.js` - Основной файл для запуска сервера Express.
  - `routes/` - Директория для определения маршрутов приложения.
  - `controllers/` - Директория для хранения логики обработки запросов.
  - `models/` - Директория для моделей данных (если используется база данных).
- `docker-compose.yml` - Конфигурация Docker Compose для контейнеризации приложения.
- `package.json` - Метаданные проекта и зависимости.
- `README.md` - Документация проекта.

## Функционал

Это приложение на подобии Express включает следующие возможности:

- Запуск веб-сервера с использованием Express.js.
- Определение маршрутов и логики обработки запросов.
- Возможность расширения приложения с помощью дополнительных маршрутов и контроллеров.
- Контейнеризация приложения с использованием Docker для удобного развертывания и управления.

## Запуск контейнера MongoDB

Для запуска контейнера с MongoDB используйте следующий `docker-compose.yml`:

```yaml
version: '3.8'

services:
  mongo:
    image: mongo:latest
    container_name: mongo
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
    driver: local


## Инструкция
https://www.youtube.com/watch?v=243pQXC5Ebs&t=5904s
https://drive.google.com/file/d/1HRzkiCz2ZVzDCIL48Q7G42x3heBeyHol/view?usp=drive_link
