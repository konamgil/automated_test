# Flatware::Session

Session Middleware for Flatiron.js.

Supports Memory Store and Redis.

## Install

Add "flatware-session" to the dependencies of your `package.json` manifest.

    $ npm install

## Add it to your server:

```javascript
var Session = require('flatware-session');

var server = union.createServer({
  before: [
    Session(),
    // ...
  ]
});
```

## Customize It

Options in the constructor:

```javascript

var Session = require('flatware-session');

Session(sessionCookieName, store);
```
`sessionCookieName` defaults to "sid".

`store` can be `require('flatware-session/memory_store')`, `require('flatware-session/redis_store')` or any other conforming store.

Example using Redis:

```javascript
var Session = require('flatware-session');

var cookieName = 'my-sid';
var storeOptions = {
    timeout: 2 * 60 * 60 // 2 hours
  , pass   : "mypasswordforaccessingredis",
  , prefix : "my-session-key-prefix-in-redis" // defaults to "--session-"
};

var store = require('flatware-session/redis_store')(storeOptions);

var server = union.createServer({
  before: [
    Session(cookieName),
    // ...
  ]
});
```