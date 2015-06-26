var Glue = require('glue');

Glue.compose(require('./app/manifest'), function (err, server) {
    server.start(function (err) {
        // UI running on port 80,
        // API running on port 9000
    });
});