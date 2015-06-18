'use strict';

var React = require('react');
var BeastMasterNavbar = require('./BeastMasterNavbar');
var BeastMasterBody = require('./BeastMasterBody');
var BeastMasterStore = require('../BeastMasterStore');
var connectToStores = require('fluxible/addons/connectToStores');
var BeastMasterWrapper;

BeastMasterWrapper = React.createClass({
    getInitialState: function() {
        return {
            sidebar: true
        };
    },
    render: function () {
        return (
            <div id={"wrapper"}>
                <BeastMasterNavbar {...this.props} />
                <BeastMasterBody {...this.props} />
            </div>
        );
    }
});

BeastMasterWrapper = connectToStores(BeastMasterWrapper, [BeastMasterStore], function (stores) {
    return {
        model: stores.BeastMasterStore.getModel()
    };
});

module.exports = BeastMasterWrapper;