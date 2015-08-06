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
                    <NavItem className='nav-label' disabled>Env:</NavItem>
                    <DropdownButton key='envs' title={this.props.model.env} onSelect={this.goToURL}>
                        <MenuItem key={config.defaultEnv}
                                  eventKey={{env: config.defaultEnv, service: this.props.model.service}}>
                            {config.defaultEnv}
                        </MenuItem>
                        {this.props.model.envs ? this.renderEnvs('envs') : ''}
                    </DropdownButton>
                    <NavItem className='nav-label' disabled>Service:</NavItem>
                    <DropdownButton key='services' title={this.props.model.service} onSelect={this.goToURL}>
                        <MenuItem key={config.defaultService}
                                  eventKey={{env: this.props.model.env, service: config.defaultService}}>
                            {config.defaultService}
                        </MenuItem>
                        {this.renderServices('services')}
                    </DropdownButton>
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
    renderEnvs() {
        return this.props.model.envs.map((env)=>{
            return <MenuItem key={env} eventKey={{env, service: this.props.model.service}}>{env}</MenuItem>
        });
    },
    renderServices(propName) {
        return config[propName][this.props.model.app].map((prop)=>{
            return <MenuItem key={prop} eventKey={{env: this.props.model.env, service: prop}}>{prop}</MenuItem>
        });
    }
});