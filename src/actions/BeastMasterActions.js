'use strict';

module.exports = {
    navigate(actionContext, payload) {
        actionContext.dispatch('navigate', payload);
    },
    loadEnvs(actionContext) {
        actionContext.dispatch('loadEnvs');
    },
    loadRecentTests(actionContext, payload) {
        actionContext.dispatch('loadRecentTests', payload);
    },
    loadTest(actionContext, payload) {
        actionContext.dispatch('loadTest', payload);
    },
    setState(actionContext, payload) {
        actionContext.dispatch('set', payload);
    }
};