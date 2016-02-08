var args = process.argv.slice(2);
var port = args[0] || 1337;
var type = args[1] || 'callback';
var totalTries = args[2] || 100;
var restifyClients = require('restify-clients');
var client = restifyClients.createJsonClient({
    url: 'http://127.0.0.1:' + port,
    retry: false,
    agent: false
});

if (type === 'callback') {
    runner('/callback-simple', totalTries)();
}
if (type === 'promise') {
    runner('/promise-simple', totalTries)();
}
if (type === 'rx') {
    runner('/rx-simple', totalTries)();
}

function runner(url, count) {
    var i = 0;
    return function innerRunner() {
        if (i > count) {
            return;
        }

        client.get(url, function(err, _, res) {
            i++;
            innerRunner();
        });
    };
}
