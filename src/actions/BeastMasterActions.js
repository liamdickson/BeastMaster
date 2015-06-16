'use strict';

var BeastMasterStore = require('../BeastMasterStore');

module.exports = {
    fetchApiDocs(actionContext) {
        console.log('fetchApiDocs: ', actionContext);
    },
    navigate(actionContext, payload) {
        console.log('navigate: ', actionContext, ", ", payload);
        actionContext.dispatch('navigated', payload);
        //return actionContext.executeAction(module.exports.fetchApiDocs);
    },
    goToEndpoint(actionContext, payload) {
        console.log('goToEndpoint: ', actionContext, ", ", payload);
        actionContext.dispatch('endpointSelected', payload.service);
    }
};