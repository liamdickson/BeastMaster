
'use strict';

var actions = require('../../actions/BeastMasterActions');
var BeastMasterStore = require('../../BeastMasterStore');
var assign = require('lodash.assign');

module.exports = {
    goToUrl: function(id, e) {
        e.preventDefault();
        this.props.context.executeAction(actions.navigate, {service: id});
    }
};