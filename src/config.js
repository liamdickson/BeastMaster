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
            mothra: 'Mothra results can be found below.',
            mechagodzilla: 'MechaGodzilla results can be found below.'
        }
    },
    testData: function () {
        return [];
    }
};