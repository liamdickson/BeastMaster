'use strict';

var React = require('react');
var config = require('../config');
var {Nav, NavItem, Panel} = require('react-bootstrap');
var TestList = require('./TestList');
var linkConstructor = require('./mixins/linkConstructor');
var timeConverter = require('./mixins/timeConverter');
var partial = require('lodash.partial');

module.exports = React.createClass({
    mixins: [linkConstructor, timeConverter],
    render: function () {

        var service = this.props.model.service ? this.props.model.service : 'home';
        var testList;
        if(this.props.model.isLoading){
            testList = "Loading...";
        }else{
            if(this.props.model.test){
                testList = (
                    <div>{JSON.stringify(this.props.model.testData[this.props.model.test])}</div>
                );
            }else{
                testList = (
                    <Nav bsStyle='pills' stacked>
                    {this.renderTests('testData')}
                    </Nav>
                );
            }
        }
        var pageContent = (
            <div className="row">
                <div className="col-lg-12">
                    <p>{config.copy.body[service]}</p>
                    {testList}
                </div>
            </div>);
        return (
            <Panel header={config.copy.title[service]} className="beast-master-body-wrapper">
                <div className="container-fluid">
                {pageContent}
                </div>
            </Panel>
        );
    },
    renderTests(propName) {
        return Object.keys(this.props.model[propName]).map((key)=>{
            var prop = this.props.model[propName][key];
            if (prop.env.toUpperCase() === this.props.model.env.toUpperCase()) {
                return <NavItem href={"./" + prop.state} onClick={partial(this.goToTest, this.hrToEpoch(prop.timestamp))} key={prop.timestamp}>{prop.timestamp + " - " + prop.env + " - " + prop.state}</NavItem>;
            }
        });
    }
});