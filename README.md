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

##  Documentation | Usage 

The Untity Module Contains some Function That Help Implement Pagianation, Sorting & Filtering Accross Multiple Modules .
It provides support for pagination, filtering and sorting .

To get Started call the`` hydate`` endpoint which is of Type ``POST`` '/api/rooms/hydrate' to add data to the db (if not any)
The after you can go ahead to call the rooms endpoint to get all rooms ``/api/rooms/hydrate``


The Utility module exports 2 Functions ``getOrder`` & ``getWhere``

the getOrder is allows you to sort your data in desired format
while the getWhere allows for filtering 

To Use this Utility Modules You need to pass parameters annotated with the following otto you controller endpoint:
  ``@PaginationParam``,``@SortingParams``, ``@FilteringParams``

Each the SortingParams & FilteringParams requires you to pass the allowed fields.

To sort you can pass an Object to the sort array i.e ``{"field":"name","order":"ASC"}``
Also to filter you have to pass the field, value and the operators
The following are allowed operators

        * equals
        * not
        * gt (greater than)
        * gte (greater than or equal)
        * lt (less than)
        * lte (less than or equal)
        * like
        * in
        * notIn
        * isNull
        * isNotNull


Where are some instances you can try out 
 *  /api/rooms?page=0&limit=10&filters=[]&sort=[{"field":"name","order":"ASC"}]
 * /api/rooms?page=0&limit=5&filters=[{"field":"capacity","value":10,"operator":"gte"}]&sort=[{"field":"name","order":"ASC"}]
/api/rooms?page=1&limit=2&filters=[{"field":"userId","value":1,"operator":"equals"}]&sort=[{"field":"capacity","order":"DESC"}]
page=0&limit=5&filters=[{"field":"name","value":"Room","operator":"like"}]&sort=[{"field":"userId","order":"ASC"}]

Once more again Thanks for considering my application.


* Please Note: The ca.pem is an ssl certificate provided my the posgress db provider which is required to connect to the db

