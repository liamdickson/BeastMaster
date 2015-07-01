/**
 * User: Liam Dickson
 * Date: 7/1/15
 * Time: 4:54 PM
 */

'use strict';

var React = require('react');
var _ = require('underscore');

module.exports = React.createClass({
    getInitialState: function() {
        return {traceOn: false};
    },
    toggleTrace: function () {
        this.setState({traceOn: !this.state.traceOn});
    },
    render: function () {
        var stackTrace = "";
        if(this.state.traceOn && !this.props.spec.passed) {
            stackTrace = (
                <div className="stackTrace">
                    <div className="resultMessage">{this.props.spec.err.message}</div>
                </div>
            );
        }
        var metaData = (this.props.spec.metadata && this.props.spec.metadata.serviceCall) ? <div className="metadata"><div className="resultMessage">{this.props.spec.metadata.serviceCall}</div></div> : "" ;
        return (
            <div className={"specSummary "+this.props.spec.state}>
                <span className="description" onClick={this.toggleTrace}>{this.props.specName}</span>
                {stackTrace}
                {metaData}
            </div>
        );
    }
});