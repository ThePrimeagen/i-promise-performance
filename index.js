var restify = require('restify');
var server = restify.createServer();
var callbacks = require('./server-callback');

server.get('/callback-simple', callbacks.simple);
server.listen(1337, '127.0.0.1', function listen() {
    console.log('ready to go');
});
