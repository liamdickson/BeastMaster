'use strict';

var Router = require('ampersand-router');
var BeastMasterStore = require('./BeastMasterStore');
var config = require('./config');
var BeastMasterActions = require('./actions/BeastMasterActions');

module.exports = Router.extend({
    routes: {
        '' : 'goToService',
        ':service' : 'goToService',
        ':service/:test' : 'goToService'
    },
    initialize(options) {
        console.log('Initialize Router');
        options = options || {};
        this.context = options.context;
        var store = this.context.getStore(BeastMasterStore);
        this.listenTo(store, 'change', () => {
            this.navigate(store.getModel().toUrlString());
        })
    },
    goToService: function (service, test) {
        console.log('goToService: ', service, ", ", test);
        service = service || '/';
        test = test || '/';
        this.context.executeAction(BeastMasterActions.goToEndpoint, {
            service, test
        })
    }
});