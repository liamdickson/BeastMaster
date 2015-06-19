'use strict';

module.exports = {
    services: [
        'mothra',
        'mechagodzilla'
    ],
    envs: [
        'dev',
        'qa'
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