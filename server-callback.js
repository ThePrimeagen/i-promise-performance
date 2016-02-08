var api = require('./api');
module.exports = {
    /**
     */
    simple: function simpleCallback(req, res, next) {
        api.callback(function myCallback(data) {
            res.send(data);
            next();
        });
    },

    multipleLevels: function multiCallbacks() {
    }
};
