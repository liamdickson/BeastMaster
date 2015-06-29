/**
 * User: Liam Dickson
 * Date: 6/19/15
 * Time: 12:43 PM
 */

'use strict';

var React = require('react');
var _ = require('underscore');
var MothraTestStep = require('./MothraTestStep');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            hideSteps: true
        };
    },
    toggleSteps: function () {
        this.setState({hideSteps: !this.state.hideSteps});
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            hideSteps: (nextProps.model.hideAll ? true : this.state.hideSteps)
        });
    },
    render: function () {
        var hideSteps = this.state.hideSteps;
        var topSpec = this.props.topSpec;
        var displayNum = this.props.testNum + 1;
        var topClass = (hideSteps ? "inner-suites " : "") + "inner-suites-"+topSpec.state;
        var failures = "";
        if(topSpec.failures) {
            failures = " ("+(topSpec.failures === 1 ? topSpec.failures+" failure" : topSpec.failures+" failures")+")";
        }
        return (
            <div className={this.props.className}>
                <div>
                    <h3 onClick={this.toggleSteps} className={"top-suite top-suite-"+topSpec.state}>
                            {displayNum+") "+topSpec.name+failures}
                    </h3>
                    <span className>
                        {topSpec.transactionIds.map((transactionObj, i)=>{
                            return this.renderOmtLink(transactionObj, i);
                        })}
                    </span>
                </div>
                <div className={topClass}>
                    {_.map(topSpec.tests, (midSpec, midSpecName)=>{
                        return <MothraTestStep key={midSpecName} midSpec={midSpec}  midSpecName={midSpecName} />;
                    })}
                </div>
            </div>
        );
    },
    renderOmtLink: function(transactionObj, i) {
        // Note: The i is necessary because Mothra sometimes creates multiple with the same order number
        return (
            <span className="omt-link" key={transactionObj.id + i}>(<a href={transactionObj.omtUrl} target="_blank">{transactionObj.id}</a>)</span>
        );
    }
});