var api = require('./api');
module.exports = {
    /**
     */
    simple: function simpleRx(req, res, next) {
        api.rx.subscribe(function myRx(data) {
            res.send(data);
            next();
        });
    },

    multipleLevels: function multiRx() {
    }
};

