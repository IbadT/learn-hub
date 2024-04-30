| Переменная окружения      | Назначение                            | По умолчанию
|---------------------------|---------------------------------------|--------------------------------------------------------------
| SERVICE_NAME              | Название сервиса                      | learn_hub
| NODE_ENV                  | Окружение                             | local
| HTTP_PORT                 | Порт, на котором слушает приложение   | 3000
| HTTP_HOST                 | Хост, на котором поднято приложение   | localhost
| HTTP_VERSION              | Версия http приложения                | 1
| HTTP_PREFIX               | Префикс http для приложения           | /api
|                           |                                       |
|                           |                                       |
| DB_TYPE                   | тип базы данных                       | postgres
| DB_HOST                   | хост(адрес) базы данных для разработки| localhost
| DB_PORT                   | порт, на котором работает база данных | 5432
| DB_NAME                   | имя базы данных                       | learn_hub_back
| DB_NAME_TEST              | имя базы данных, используемое для     | learn_hub_back
|                           |   тестирования                        |
| DB_NAME_PRODUCTION        | имя базы данных для продакшн          | learn_hub
| DB_USERNAME               | имя пользователя, которое используются| postgres
|                           |   для подключения к базе данных       |
| DB_PASSWORD               | пароль, который используются для      | admin
|                           |   подключения к базе данных           |
| DB_LOGGING                | нужно ли вести логирование            | false
|                           |   SQL-запросов                        |
<!-- | DB_MIGRATIONS             |                                       |  -->
| DB_MIGRATIONS_RUN         | следует ли автоматически выполнять    | true
|                           |   миграции при запуске приложения     |
| DB_MIGRATIONS_TABLE_NAME  | имя таблицы, в которой хранится       | migrations
|                           |   информация о примененных миграциях  |
|                           |                                       |
|                           |                                       |
| PGADMIN_DEFAULT_EMAIL     | адрес электронной почты по умолчанию  | ibadtoff@gmail.com
|                           |   для pgAdmin                         |
| PGADMIN_DEFAULT_PASSWORD  | пароль по умолчанию для учетной записи| pgadmin4
|                           |   администратора в pgAdmin            |
| JWTKEY                    | ключ (секрет), используемый для       | random_secret_key
|                           |   создания и проверки (JWT)           | 
| TOKEN_EXPIRATION          | время, через которое JWT истекает     | 48h
| BEARER                    | префикс, используемый в Headers       | Bearer
|                           |   аутентификации для передачи JWT     |
| DATABASE_URL              | URL-адрес, который содержит информацию| postgres://postgres:admin@localhost:5432/learn_hub_back
|                           |   о подключении к базе данных         |
| SERVICE_JWT_SECRET        | Секреты для обычных токенов           | fc3029d4ac4940100352d9f814cf401390a564daaeff7e05952636e6ba98d5f7
| SERVICE_JWT_REFRESH_SECRET| Секреты для токенов обновления        | a57ba46388368c6a965b316bc18b74dc20b80f96b228063844f758501766525f







<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).