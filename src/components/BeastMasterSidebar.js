'use strict';

var React = require('react');
var linkEndpoint = require('./mixins/linkEndpoint');
var partial = require('lodash.partial');

module.exports = React.createClass({
    mixins: [linkEndpoint],
    render: function () {
        return (
            <div className="beast-master-sidebar-wrapper" id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a href={this.getEndpointUrl('/')}
                            onClick={partial(this.selectEndpoint,'/')}>
                            BeastMaster Home
                        </a>
                    </li>
                    <li>
                        <a href={this.getEndpointUrl('/mothra')}
                            onClick={partial(this.selectEndpoint,'/mothra')}>
                            Mothra
                        </a>
                    </li>
                    <li>
                        <a href={this.getEndpointUrl('/mechagodzilla')}
                            onClick={partial(this.selectEndpoint,'/mechagodzilla')}>
                            MechaGodzilla
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
});