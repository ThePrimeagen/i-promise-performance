var restify = require('restify');
var server = restify.createServer();
var callbacks = require('./server-callback');
var promise = require('./server-promise');
var rx = require('./server-rxjs');

server.get('/callback-simple', callbacks.simple);
server.get('/promise-simple', promise.simple);
server.get('/rx-simple', rx.simple);
server.listen(1337, '127.0.0.1', function listen() {
    console.log('ready to go');
});
