'use strict';

var State = require('ampersand-state');
var config = require('./config');

module.exports = State.extend({
    extraProperties: 'reject',
    props: {
        service: {
            'type': 'string',
            'required': false,
            'values': config.services
        },
        test: {
            'type': 'string',
            'required': false,
            'values': config.tests
        },
        testData: 'string',
        error: 'string',
        endpoint: {
            'type': 'string',
            'default': null
        },
        isLoading: {
            'type': 'boolean',
            default: true
        }
    },
    toUrlString() {
        if (this.service) {
            return `/${this.service}/${this.test}/`;
        }
        return `/`;
    }
});