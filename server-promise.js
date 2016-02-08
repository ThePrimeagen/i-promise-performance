var api = require('./api');
module.exports = {
    /**
     */
    simple: function simplePromise(req, res, next) {
        api.promise.then(function myPromise(data) {
            res.send(data);
            next();
        });
    },

    multipleLevels: function multiPromise() {
    }
};

