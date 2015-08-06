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
                    {this.renderApps('apps')}
                    <DropdownButton key='envs' title={this.props.model.env} onSelect={this.goToURL}>
                        <MenuItem key={config.defaultEnv} eventKey={{env: config.defaultEnv, service: this.props.model.service}}>
                            {config.defaultEnv}
                        </MenuItem>
                        {this.renderEnvs('envs')}
                    </DropdownButton>
                    {this.renderServices('services')}
                </Nav>
            </Navbar>
        );
    },
    renderApps(propName) {
        return config[propName].map((prop)=>{
            return <NavItem key={prop} href={'./'+prop}
                            onClick={partial(this.goToURL,{app: prop})}>{config.copy.title[prop]}</NavItem>
        })
    },
    renderEnvs(propName) {
        return config[propName][this.props.model.app].map((prop)=>{
            return <MenuItem key={prop} eventKey={{env: prop, service: this.props.model.service}}>{prop}</MenuItem>
        });
    },
    renderServices(propName) {
        return config[propName][this.props.model.app].map((prop)=>{
            var linkVal = this.props.model.service === prop ? false : prop;
            return <MenuItem className={ linkVal ? '' : 'open'}
                             onSelect={partial(this.goToURL,{env: this.props.model.env, service: linkVal})}
                             key={prop}>{prop}</MenuItem>
        });
    }
});