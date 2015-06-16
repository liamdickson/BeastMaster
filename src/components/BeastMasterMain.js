'use strict';

var React = require('react');
var BeastMasterSidebar = require('./BeastMasterSidebar');
var BeastMasterBody = require('./BeastMasterBody');
var BeastMasterStore = require('../BeastMasterStore');
var connectToStores = require('fluxible/addons/connectToStores');
var BeastMasterMain;

BeastMasterMain = React.createClass({
    getInitialState: function() {
        return {
            sidebar: true
        };
    },
    render: function () {
        console.log('BeastMasterMain: ', this.props);
        var className = "beast-master-main-wrapper";
        return (
            <div className={className} id="wrapper">
                <BeastMasterSidebar {...this.props} />
                <BeastMasterBody {...this.props} />
            </div>
        );
    }
});

BeastMasterMain = connectToStores(BeastMasterMain, [BeastMasterStore], function (stores) {
    return {
        model: stores.BeastMasterStore.getModel()
    };
});

module.exports = BeastMasterMain;