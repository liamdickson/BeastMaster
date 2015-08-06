'use strict';

var Router = require('ampersand-router');
var BeastMasterStore = require('./BeastMasterStore');
var config = require('./config');
var actions = require('./actions/BeastMasterActions');

module.exports = Router.extend({
    routes: {
        '(:app)(/)' : 'getTestList',
        ':app/:env(/:service)(/)' : 'getTestList',
        ':app/:env/:service/page/:num(/)' : 'getTestList',
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
    getTestList(app, env, service, page) {
        app = app || config.apps[0];
        this.goToUrl(app, env, service, null, page);
        this.context.executeAction(actions.loadRecentTests, {app, env, service, page});
    },
    getTest(app, env, service, test) {
        this.goToUrl(app, env, service, test);
        this.context.executeAction(actions.loadTest, {app, env, service, test});
    },
    goToUrl(app, env, service, test, page) {
        var payload = {};
        payload.app = app = app || config.apps[0];
        payload.env = env || config.defaultEnv;
        payload.service = service || config.defaultService;
        payload.test = test;
        payload.page = page;
        this.context.executeAction(actions.loadEnvs);
        this.context.executeAction(actions.navigate, payload);
    }
});