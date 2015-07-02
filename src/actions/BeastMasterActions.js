'use strict';

module.exports = {
    navigate(actionContext, payload) {
        actionContext.dispatch('navigate', payload);
    },
    loadRecentTests(actionContext) {
        actionContext.dispatch('loadRecentTests');
    },
    loadTest(actionContext) {
        actionContext.dispatch('loadTest');
    },
    setState(actionContext, payload) {
        actionContext.dispatch('set', payload);
    }
};