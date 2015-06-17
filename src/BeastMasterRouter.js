'use strict';

var Router = require('ampersand-router');
var BeastMasterStore = require('./BeastMasterStore');
var config = require('./config');
var BeastMasterActions = require('./actions/BeastMasterActions');

module.exports = Router.extend({
    routes: {
        ':service(/:test)(/)' : 'goToUrl',
        '' : 'goToUrl'
    },
    initialize(options) {
        options = options || {};
        this.context = options.context;
        var store = this.context.getStore(BeastMasterStore);
        this.listenTo(store, 'change', () => {
            this.navigate(store.getModel().toUrlString());
        })
    },
    goToUrl(service, test) {
        var payload = {};
        payload.service = service || '';
        payload.test = test || '';
        this.context.executeAction(BeastMasterActions.navigate, payload);
    }
});