# Flatware::Cookie-Parser

Cookie Parser middleware for Flatiron.js

## Include as dependency

Add "flatware-cookie-parser" to your dependencies in `package.json`.

    $ npm install

## Add it to the server

```javascript
var CookieParser = require('flatware-cookie-parser');

  var server = union.createServer({
    before: [
      CookieParser(),
      // ...
    ]
  });
```