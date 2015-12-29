var test = require('tap').test,
    EE    = require('events').EventEmitter;

var cookieParser = require('..');

test('should default to {} when no cookies are present', function(t) {
  var req = {headers: {}},
      res = new EE(),
      parser = cookieParser()
      ;
  
  res.on('next', function() {
    t.equivalent(req.cookies, {});
    t.end();
  });
  parser(req, res);
});

test('should populate req.cookies', function(t) {
  var req = {headers: {'cookie': 'abc=def; ghi=jkl'}},
      res = new EE(),
      parser = cookieParser()
      ;
  
  res.on('next', function() {
    t.equivalent(req.cookies, {abc:'def', ghi:'jkl'});
    t.end();
  });
  parser(req, res);
});