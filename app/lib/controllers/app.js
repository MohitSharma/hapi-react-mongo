var Config  = require('config'),
    Path = require('path');

module.exports = [
    {
        path: '/',
        method: 'GET',
        handler: function (request, reply) {
            'use strict';
            reply("Welcome to wonderland");

        }
    }
];