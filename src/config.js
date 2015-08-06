'use strict';

var _ = require('underscore');

var config = module.exports = {
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
        _.forEach(this.envs, function (envList) {
            envs = envs.concat(envList);
        });
        envs.push(config.defaultEnv);
        return envs;
    },
    defaultEnv: 'All',
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
        _.forEach(this.services, function (serviceList) {
            services = services.concat(serviceList);
        });
        services.push(config.defaultService);
        return services;
    },
    defaultService: 'All',
    copy: {
        title: {
            mothra: 'Mothra'
        }
    },
    emptyObject: function () {return {};},
    envsUrl: 'http://sagan.intranet.1stdibs.com/version/data',
    envsProxyUrl: '/data/envs',
    // TODO: Make this functional for years after 2999!
    esUrl: 'http://elastic.intranet.1stdibs.com:9200/mothra-2*/',
    pageSize: 5
};