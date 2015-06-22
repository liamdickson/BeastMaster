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
    emptyObject: ()=>{return {};},
    esUrl: 'http://jalapeno:9200/mothra-test/'
};