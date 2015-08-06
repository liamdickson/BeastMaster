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
            'default': config.defaultEnv
        },
        service: {
            'type': 'string',
            'required': false,
            'values': config.getServices(),
            'default': config.defaultService
        },
        page: {
            'required': false,
            'default': 0
        },
        test: {
            'type': 'string',
            'default': ''
        },
        envs: {
            'type': 'array'
        },
        isLoading: {
            'type': 'boolean',
            'default': true
        },
        loadingVal: {
            'type': 'number',
            'default': 0
        },
        testDataSet: {
            'type': 'object',
            'default': config.emptyObject
        },
        testData: {
            'type': 'object'
        },
        totalHits: {
            'type': 'number'
        },
        testLoadingPercent: {
            'type': 'number',
            'default': 0
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
        if (this.test) {
            return `/${this.app}/${this.env}/${this.service}/${this.test}/`;
        } else if (this.page){
            return `/${this.app}/${this.env}/${this.service}/page/${this.page}`;
        } else if (this.service) {
            return `/${this.app}/${this.env}/${this.service}/`;
        } else if (this.env) {
            return `/${this.app}/${this.env}/`;
        }
        return `/${this.app}/`;
    }
});