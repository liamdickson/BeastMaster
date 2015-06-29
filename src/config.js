'use strict';

var _ = require('underscore');

module.exports = {
    apps: [
        'mothra',
        'mechagodzilla'
    ],
    envs: {
        mothra: [
            'QA',
            'DEV'
        ],
        mechagodzilla: [
            'QA',
            'Prod',
            'Stage',
            'Custom Server'
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
        ],
        mechagodzilla: [
            'Account',
            'MessageCenter',
            'Login',
            'PDP',
            'Register',
            'Checkout',
            'Redirect'
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
            mothra: 'Mothra',
            mechagodzilla: 'MechaGodzilla'
        },
        body: {
            mothra: '',
            mechagodzilla: ''
        }
    },
    emptyObject: function () {return {};},
    esUrl: 'http://jalapeno:9200/mothra-test/'
};