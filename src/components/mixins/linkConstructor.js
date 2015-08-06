'use strict';

var actions = require('../../actions/BeastMasterActions');
var BeastMasterStore = require('../../BeastMasterStore');
var config = require('../../config');

module.exports = {
    goToURL: function(payload, e) {
        if (e) {
            e.preventDefault();
        }
        var app;
        payload.app = app = payload.app || this.props.model.app;
        payload.env = payload.env || config.defaultEnv;
        payload.service = payload.service || config.defaultService;
        payload.test = payload.test || null;
        payload.page = payload.page || null;

        this.props.context.executeAction(actions.navigate, payload);
        this.checkLoad(payload);
    },
    checkLoad: function(payload) {
        if (payload.test) {
            this.props.context.executeAction(actions.loadTest, payload);
        } else {
            this.props.context.executeAction(actions.loadRecentTests, payload);
        }
    }
};
