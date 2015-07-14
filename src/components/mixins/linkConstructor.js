'use strict';

var actions = require('../../actions/BeastMasterActions');
var BeastMasterStore = require('../../BeastMasterStore');
var assign = require('lodash.assign');
var config = require('../../config');

module.exports = {
    goToApp: function(app, e) {
        if(e) {
            e.preventDefault();
        }
        var env = this.props.model.env;
        var service = this.props.model.service;
        if(config.envs[app].indexOf(env) === -1){
            env = config.envs[app][0];
        }
        if(config.services[app].indexOf(service) === -1){
            service = config.services[app][0];
        }
        this.props.context.executeAction(actions.navigate, {app, env: env, service: service, test: ''});
        this.checkLoad(app, env, service, '');
    },
    goToEnv: function(env, e) {
        if(e) {
            e.preventDefault();
        }
        this.props.context.executeAction(actions.navigate, {env, test: ''});
        this.checkLoad(this.props.model.app, env, this.props.model.service, '');
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
        if(test){
            this.props.context.executeAction(actions.loadTest, {app, env, service, test});
        }else if(env) {
            this.props.context.executeAction(actions.loadRecentTests, {app, env, service, test});
        }
    }
};
