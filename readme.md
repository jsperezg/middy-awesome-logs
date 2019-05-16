# middy-awesome-logs

[![npm (scoped)](https://img.shields.io/npm/v/middy-awesome-logs.svg)](https://github.com/jsperezg/middy-awesome-logs) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/middy-awesome-logs.svg)](https://github.com/jsperezg/middy-awesome-logs)

## Description
This package provides a middy Middleware that logs requests, errors and responses. It is based on 
[@middy/input-out-logger](https://www.npmjs.com/package/@middy/input-output-logger) middleware.

## Why

[@middy/input-out-logger](https://www.npmjs.com/package/@middy/input-output-logger) is great but since it requires 
[@middy/core](https://www.npmjs.com/package/@middy/core) I decided to create something that was useful for all those
that still work with [middy](https://www.npmjs.com/package/middy).


## Install
`$ npm install @jsperezg/middy-awesome-logs`

## Options
*logger* property accept a function (default *console.log*).

## Usage
```javascript
const middy = require('middy');
const awesomeLogs = require('middy-awesome-logs');
 
const handler = middy((event, context, cb) => {
  const response = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({ message: 'hello world' })
  };
 
  callback(null, response)
});
 
handler.use(awesomeLogs());

```
