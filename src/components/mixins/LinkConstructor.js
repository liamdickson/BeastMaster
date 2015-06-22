'use strict';

var actions = require('../../actions/BeastMasterActions');
var BeastMasterStore = require('../../BeastMasterStore');
var assign = require('lodash.assign');

module.exports = {
    goToApp: function(app, e) {
        if(e) {
            e.preventDefault();
        }
        this.props.context.executeAction(actions.navigate, {app, test: ''});
        this.checkLoad(app, this.props.model.env, '', '');
    },
    goToEnv: function(env, e) {
        if(e) {
            e.preventDefault();
        }
        this.props.context.executeAction(actions.navigate, {env, test: ''});
        this.checkLoad(this.props.model.app, env, '', '');
    },
    goToService: function(service, e) {
        if(e) {
            e.preventDefault();
        }
        this.props.context.executeAction(actions.navigate, {service, test: ''});
        this.checkLoad(this.props.model.app, this.props.model.env, service, '');
    },
    goToTest: function(test, e) {
        if(e) {
            e.preventDefault();
        }
        this.props.context.executeAction(actions.navigate, {test});
        this.checkLoad(this.props.model.app, this.props.model.env, this.props.model.service, test);
    },
    checkLoad: function(app, env, service, test) {
        this.props.context.executeAction(actions.loadRecentTests, {app, env, service, test});
    }
};