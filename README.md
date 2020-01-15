# nexxusjs

  [![npm package](https://nodei.co/npm/nexxusjs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nexxusjs/)

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Maintenance][maintenance-img]][maintenance-url]

  [![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
  [![GitHub issues][issues-open-image]][issues-open-url]
  [![GitHub forks][forks-image]][forks-url]
  [![GitHub stars][stars-image]][stars-url]

## Why

This library is designed to speed server creation and define routes.
But I need everyone's contribution to improve the library and grow fast and optimized.

Open a lot of tasks if necessary to improve this.
I count on the collaboration of all.

## How to use

```sh
yarn add nexxusjs
or
npm install --save nexxusjs
```


### Simple express server create.

The server uses by default, cors released to everyone, morgan with 'dev' option and helmet

```js
const nexxusjs = require('nexxusjs');

const default = require('./default/router');
const defaultPostRoute = require('./defaultPostRoute');

new nexxusjs()
  .setPort(3000)
  .setMiddleware(function (req, res, next) {
    console.log("My middleware logic here");
    next();
  })
  .setMasterRout('/api')
  .setRoute('/1', default)
  .setRouteWithMiddleware('/2', default, function (req, res, next) {
    console.log("Middleware logic here");
    next();
  })
  .createRoute('get', 'test', (req, res, next) => {
    res.status(200).send("Work").end();
  })
  .createRoute('post', '/test', defaultPostRoute)
  .run()
```

## License

  [![npm](https://img.shields.io/npm/l/loggers.svg)](https://github.com/AndreOneti/nexxusjs/blob/master/LICENSE)


  [forks-image]: https://img.shields.io/github/forks/AndreOneti/nexxusjs.svg
  [forks-url]: https://github.com/AndreOneti/nexxusjs
  [downloads-image]: https://img.shields.io/npm/dt/nexxusjs.svg
  [downloads-url]: https://npmjs.org/package/nexxusjs
  [npm-image]: https://img.shields.io/npm/v/nexxusjs.svg
  [npm-url]: https://npmjs.org/package/nexxusjs
  [maintenance-img]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
  [maintenance-url]: https://github.com/AndreOneti/nexxusjs

  [vulnerabilities-image]: https://snyk.io/test/github/AndreOneti/nexxusjs/badge.svg?targetFile=package.json
  [vulnerabilities-url]: https://snyk.io/test/github/AndreOneti/nexxusjs?targetFile=package.json
  [issues-open-image]: https://img.shields.io/github/issues/AndreOneti/nexxusjs.svg
  [issues-open-url]: https://github.com/AndreOneti/nexxusjs/issues?q=is%3Aopen+is%3Aissue

  [stars-image]: https://img.shields.io/github/stars/AndreOneti/nexxusjs.svg
  [stars-url]: https://github.com/AndreOneti/nexxusjs
