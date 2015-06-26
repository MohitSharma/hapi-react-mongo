'use strict';

var Config = require('config'),
    Path = require('path');

module.exports = {
    server: {
        cache: {
            engine: 'catbox-mongodb',
            host: Config.database.host,
            port: Config.database.port,
            partition: Config.database.dbName
        }
    },

    connections: [
        {
            labels: ['web'],
            host: Config.server.web.host,
            port: Config.server.web.port
        }
    ],

    plugins: {
        "hapi-mongo-models": {
            mongodb     : Config.database,
            autoIndex   : false,
            models      : require('./lib/models/index')
        },
        'hapi-router': {routesDir: Path.join(__dirname, '/lib/controllers')},
        'hapi-mongoose-db-connector': {
            mongodbUrl: Config.database.url
        },

        good: {
            opsInterval: 5000,
            logRequestHeaders: true,
            reporters: [{
                reporter: 'good-console',
                args: [{response: '*', log: '*', error: '*'}] //"ops": "*",
            }]
        },
        yar: {
            maxCookieSize: 0, //set 0  to always use server-side storage.
            cache: {
                expiresIn : 86400000
            },
            cookieOptions: {
                password    : 'SDEs29Fsdw003wer9062#$%Rsdfsd',
                isSecure    : false,
                isHttpOnly  : true
            }
        }
    }

};
