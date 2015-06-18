'use strict';

var actions = require('../../actions/BeastMasterActions');
var BeastMasterStore = require('../../BeastMasterStore');
var assign = require('lodash.assign');

module.exports = {
    goToEnv: function(env, e) {
        if(e) {
            e.preventDefault();
        }
        this.props.context.executeAction(actions.navigate, {env, test: ''});
        this.checkLoad(env, this.props.model.service, '');
    },
    goToService: function(service, e) {
        if(e) {
            e.preventDefault();
        }
        this.props.context.executeAction(actions.navigate, {service, test: ''});
        this.checkLoad(this.props.model.env, service, '');
    },
    goToTest: function(test, e) {
        if(e) {
            e.preventDefault();
        }
        this.props.context.executeAction(actions.navigate, {test});
        this.checkLoad(this.props.model.env, this.props.model.service, test);
    },
    checkLoad: function(env, service, test) {
        if(!test) {
            this.props.context.executeAction(actions.loadRecentTests);
        }else{
            this.props.context.executeAction(actions.loadTest, {env, service, test});
        }
    }
};