'use strict';

var BeastMasterStore = require('../BeastMasterStore');

module.exports = {
    navigate(actionContext, payload) {
        actionContext.dispatch('navigate', payload);
    },
    loadRecentTests(actionContext) {
        actionContext.dispatch('loadRecentTests');
    },
    loadTest(actionContext, payload) {
        actionContext.dispatch('loadTest', payload);
    }
};