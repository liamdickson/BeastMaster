/**
 * User: Liam Dickson
 * Date: 6/19/15
 * Time: 10:51 AM
 */

'use strict';

var React = require('react');
var MothraTestList = require('./MothraTestList');
var actions = require('../../actions/BeastMasterActions.js');

module.exports = React.createClass({
    collapseAll: function (e) {
        e.preventDefault();
        this.props.context.executeAction(actions.setState, {hideAll: true});
        this.props.context.executeAction(actions.setState, {hideAll: false});
    },
    search: function (e) {
        this.props.context.executeAction(actions.setState, {searchString: e.target.value});
    },
    render: function () {
        var test = this.props.model.testData[this.props.model.test];
        var testAlertData = <span>{test.failures} failed | {test.passes} passed | took {test.duration}</span>;
        var testAlert = test.failures ? <span className="failingAlert bar">Mothra Wins! {testAlertData}</span>:
            <span className="passingAlert bar">{test.service} Wins!{testAlertData}</span>;
        var testImage = test.failures ? <img src="/images/mothra-win.jpg" /> : <img src="/images/mothra-die.gif" />;
        return (
            <div id="HTMLReporter">
                <h1 className="title">
                    <span className="mothra">Mothra</span> vs <span className="services">{test.service}</span>
                    <span className="environment"> - {test.env}</span> <span className="timestamp"> - {test.timestamp}</span>
                </h1>
                <div className="alert">
                    {testAlert}
                </div>
                <div className="search-box-wrapper">
                    Search: <input onChange={this.search} className="search-box" type="text" />
                </div>
                <div className="results">
                    <div className="controls">
                        <a onClick={this.collapseAll} href="#" className="collapse-all">Collapse All</a>
                    </div>
                    <MothraTestList {...this.props} />
                </div>
                <div className="pic">
                    {testImage}
                </div>
            </div>
        );
    }
});