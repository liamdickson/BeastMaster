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
        app: {
            'type': 'string',
            'required': false,
            'values': config.apps
        },
        service: {
            'type': 'string',
            'required': false,
            'values': config.services
        },
        test: {
            'type': 'string',
            'default': ''
        },
        isLoading: {
            'type': 'boolean',
            'default': true
        },
        testData: {
            'type': 'object',
            'default': config.testData
        },
        hideAll: {
            'type': 'boolean',
            'default': false
        },
        searchString: {
            'type': 'string',
            'default': ''
        }
    },
    toUrlString() {
        if (this.app && this.service && this.test) {
            return `/${this.app}/${this.env}/${this.service}/${this.test}/`;
        } else if (this.app && this.service) {
            return `/${this.app}/${this.env}/${this.service}/`;
        } else if (this.env) {
            return `/${this.app}/${this.env}/`;
        }
        return `/${this.app}/`;
    }
});