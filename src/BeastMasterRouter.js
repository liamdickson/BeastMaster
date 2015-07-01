'use strict';

var Router = require('ampersand-router');
var BeastMasterStore = require('./BeastMasterStore');
var config = require('./config');
var actions = require('./actions/BeastMasterActions');

module.exports = Router.extend({
    routes: {
        '(:app)(/)' : 'getTestList',
        ':app/:env(/:service)(/)' : 'getTestList',
        ':app/:env/:service/:test(/)' : 'getTest'
    },
    initialize(options) {
        options = options || {};
        this.context = options.context;
        var store = this.context.getStore(BeastMasterStore);
        this.listenTo(store, 'change', () => {
            this.navigate(store.getModel().toUrlString());
        })
    },
    getTestList(app, env, service, test) {
        this.goToUrl(app, env, service, test);
        this.context.executeAction(actions.loadRecentTests);
    },
    getTest(app, env, service, test) {
        this.goToUrl(app, env, service, test);
        this.context.executeAction(actions.loadTest);
    },
    goToUrl(app, env, service, test) {
        var payload = {};
        payload.app = app = app || config.apps[0];
        if(config.envs[app].indexOf(env) === -1){
            env = config.envs[app][0];
        }
        if(config.services[app].indexOf(service) === -1){
            service = config.services[app][0];
        }
        payload.env = env;
        payload.service = service;
        payload.test = test || '';
        this.context.executeAction(actions.navigate, payload);
    }
});