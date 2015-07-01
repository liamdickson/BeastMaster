'use strict';

var _ = require('underscore');

module.exports = {
    apps: [
        'mothra'
    ],
    envs: {
        mothra: [
            'QA',
            'DEV'
        ]
    },
    getEnvs: function () {
        var envs = [];
        _.forEach(this.envs, function (envList, app) {
            envs = envs.concat(envList);
        });
        return envs;
    },
    services: {
        mothra: [
            'Ecom',
            'Identity',
            'Inventory',
            'Logistics'
        ]
    },
    getServices: function () {
        var services = [];
        _.forEach(this.services, function (serviceList, app) {
            services = services.concat(serviceList);
        });
        return services;
    },
    copy: {
        title: {
            mothra: 'Mothra'
        },
        body: {
            mothra: ''
        }
    },
    emptyObject: function () {return {};},
    esUrl: 'http://jalapeno:9200/mothra-*/'
};