'use strict';

var React = require('react');
var assign = require('lodash.assign');
var BeastMasterStore = require('../../BeastMasterStore');
var actions = require('../../actions/BeastMasterActions');

module.exports = {
    getEndpointUrl(endpoint) {
        var props = assign(this.props.model.toJSON(), {endpoint});
        var store = this.props.context.getStore(BeastMasterStore);
        return store.getUrlForProps(props);
    },
    selectEndpoint(id, e) {
        e.preventDefault();
        this.props.context.executeAction(actions.goToEndpoint, id);
    }
};
