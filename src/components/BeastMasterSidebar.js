'use strict';

var React = require('react');
var linkConstructor = require('./mixins/linkConstructor');
var partial = require('lodash.partial');
var actions = require('../actions/BeastMasterActions');

module.exports = React.createClass({
    mixins: [linkConstructor],
    render: function () {
        return (
            <div className="beast-master-sidebar-wrapper" id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a href={'./'}
                            onClick={partial(this.goToUrl,'')}>
                            BeastMaster
                        </a>
                    </li>
                    <li>
                        <a href={'./mothra'}
                            onClick={partial(this.goToUrl,'mothra')}>
                            Mothra
                        </a>
                    </li>
                    <li>
                        <a href={'./mechagodzilla'}
                            onClick={partial(this.goToUrl,'mechagodzilla')}>
                            MechaGodzilla
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
});