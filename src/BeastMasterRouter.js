'use strict';

var Router = require('ampersand-router');
var BeastMasterStore = require('./BeastMasterStore');
var config = require('./config');
var actions = require('./actions/BeastMasterActions');

module.exports = Router.extend({
    routes: {
        '(:env)(/)' : 'goToUrl',
        ':env/:service(/:test)(/)' : 'goToUrl'
    },
    initialize(options) {
        options = options || {};
        this.context = options.context;
        var store = this.context.getStore(BeastMasterStore);
        this.listenTo(store, 'change', () => {
            this.navigate(store.getModel().toUrlString());
        })
    },
    goToUrl(env, service, test) {
        var payload = {};
        payload.env = env || config.envs[0];
        payload.service = service || config.services[0];
        payload.test = test || '';
        this.context.executeAction(actions.navigate, payload);
        this.context.executeAction(actions.loadRecentTests, payload);
    }
});