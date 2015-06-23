/**
 * User: Liam Dickson
 * Date: 6/23/15
 * Time: 2:39 PM
 */

'use strict';

var React = require('react');
var _ = require('underscore');
var {Nav, NavItem} = require('react-bootstrap');
var partial = require('lodash.partial');
var linkConstructor = require('../mixins/linkConstructor');
var idConverter = require('../mixins/idConverter');

module.exports = React.createClass({
    mixins: [linkConstructor, idConverter],
    render: function () {
        return (
            <Nav bsStyle='pills' stacked>
                {Object.keys(this.props.model['testDataSet']).map((key)=>{
                    var prop = this.props.model['testDataSet'][key];
                    if (prop.env.toUpperCase() === this.props.model.env.toUpperCase() && prop.service.toUpperCase() === this.props.model.service.toUpperCase()) {
                        return <NavItem href={"./" + prop.state} onClick={partial(this.goToTest, this.hrToEpoch(prop.timestamp))} key={prop.timestamp}>{prop.timestamp + " - " + prop.env + " - " + prop.service + " - " + prop.state}</NavItem>;
                    }
                })}
            </Nav>
        );
    }
});