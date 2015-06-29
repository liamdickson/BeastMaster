'use strict';

var State = require('ampersand-state');
var config = require('./config');

module.exports = State.extend({
    extraProperties: 'reject',
    props: {
        app: {
            'type': 'string',
            'required': true,
            'values': config.apps,
            'default': config.apps[0]
        },
        env: {
            'type': 'string',
            'required': false,
            'values': config.getEnvs()
        },
        service: {
            'type': 'string',
            'required': false,
            'values': config.getServices()
        },
        test: {
            'type': 'string',
            'default': ''
        },
        isLoading: {
            'type': 'boolean',
            'default': true
        },
        testDataSet: {
            'type': 'object',
            'default': config.emptyObject
        },
        testData: {
            'type': 'object'
        },
        hideAll: {
            'type': 'boolean',
            'default': false
        },
        searchString: {
            'type': 'string',
            'default': ''
        },
        error: {
            'type': 'string'
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