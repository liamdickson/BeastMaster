'use strict';

module.exports = {
    apps: [
        'mothra',
        'mechagodzilla'
    ],
    envs: [
        'QA',
        'DEV'
    ],
    services: [
        'Ecom',
        'Identity',
        'Inventory',
        'Logistics'
    ],
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
    testData: function () {
        return {};
    }
};