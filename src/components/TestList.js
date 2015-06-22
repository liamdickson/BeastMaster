/**
 * User: Liam Dickson
 * Date: 6/19/15
 * Time: 10:06 AM
 */

'use strict';

var React = require('react');
var {Nav, NavItem} = require('react-bootstrap');
var linkConstructor = require('./mixins/linkConstructor');
var idConverter = require('./mixins/idConverter');
var partial = require('lodash.partial');

module.exports = React.createClass({
    mixins: [linkConstructor, idConverter],
    render: function () {
        return (
            <Nav bsStyle='pills' stacked>
                {this.renderTests('testDataSet')}
            </Nav>
        );
    },
    renderTests(propName) {
        if(this.props.model.app === 'mothra') {
            return Object.keys(this.props.model[propName]).map((key)=> {
                var prop = this.props.model[propName][key];
                if (prop.env.toUpperCase() === this.props.model.env.toUpperCase() && prop.service.toUpperCase() === this.props.model.service.toUpperCase()) {
                    return <NavItem href={"./" + prop.state} onClick={partial(this.goToTest, this.hrToEpoch(prop.timestamp))} key={prop.timestamp}>{prop.timestamp + " - " + prop.env + " - " + prop.state}</NavItem>;
                }
            });
        }else{
            return <span>Sorry, we don't have this app implemented yet.</span>;
        }
    }
});