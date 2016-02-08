var Rx = require('rxjs');
var Promise = require('promise');

module.exports = {
    callbacks: function apiCallback(callback) {
        process.nextTick(function() {
            callback(generateData());
        });
    },

    rx: function apiRx() {
        return Rx.Observable.create(rxProcessNextTick);
    },

    promise: function apiPromise() {
        return new Promise(promiseProcessNextTick);
    }
};

function rxProcessNextTick(obs) {
    process.nextTick(function() {
        obs.next(generateData());
        obs.complete();
    });
}

function generateData() {
    return {
        version: 1,
        data: 42
    };
}

function promiseProcessNextTick(resolve, reject) {
    process.nextTick(function() {
        resolve(generateData());
    });
}
