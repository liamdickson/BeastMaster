'use strict';

var BeastMasterStore = require('../BeastMasterStore');

module.exports = {
    navigate(actionContext, payload) {
        actionContext.dispatch('navigate', payload);
    },
    loadRecentTests(actionContext, payload) {
        actionContext.dispatch('loadRecentTests', payload);
    }
};