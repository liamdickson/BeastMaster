'use strict';

var State = require('ampersand-state');
var config = require('./config');

module.exports = State.extend({
    extraProperties: 'reject',
    props: {
        env: {
            'type': 'string',
            'required': true,
            'values': config.envs,
            'default': config.envs[0]
        },
        service: {
            'type': 'string',
            'required': false,
            'values': config.services
        },
        test: {
            'type': 'string',
            'required': false
        },
        isLoading: {
            'type': 'boolean',
            'default': true
        },
        testData: {
            'type': 'object',
            'default': config.testData
        }
    },
    toUrlString() {
        if (this.service && this.test) {
            return `/${this.env}/${this.service}/${this.test}`;
        } else if (this.service) {
            return `/${this.env}/${this.service}/`;
        }
        return `/${this.env}/`;
    }
});