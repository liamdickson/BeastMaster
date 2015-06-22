'use strict';

var React = require('react');
var {Navbar, DropdownButton, Nav, NavItem, MenuItem} = require('react-bootstrap');
var linkConstructor = require('./mixins/linkConstructor');
var partial = require('lodash.partial');
var actions = require('../actions/BeastMasterActions');
var config = require('../config');

module.exports = React.createClass({
    mixins: [linkConstructor],
    render: function () {
        return (
            <Navbar inverse fluid>
                <div className="navbar-header">
                    <span className="navbar-brand">BeastMaster</span>
                </div>
                <Nav navbar right>
                    {this.renderNav('apps')}
                    <DropdownButton title={this.props.model.env} onSelect={this.goToEnv}>
                        {this.renderMenu('envs')}
                    </DropdownButton>
                    <DropdownButton title={this.props.model.service} onSelect={this.goToService}>
                        {this.renderMenu('services')}
                    </DropdownButton>
                </Nav>
            </Navbar>
        );
    },
    renderNav(propName) {
        return config[propName].map((prop)=>{
            return <NavItem key={prop} href={'./'+prop} onClick={partial(this.goToApp,prop)}>{config.copy.title[prop]}</NavItem>
        })
    },
    renderMenu(propName) {
        return config[propName].map(function (prop) {
            return <MenuItem key={prop} eventKey={prop}>{prop}</MenuItem>
        });
    }
});