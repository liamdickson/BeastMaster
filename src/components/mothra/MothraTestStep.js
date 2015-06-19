/**
 * User: Liam Dickson
 * Date: 6/19/15
 * Time: 2:37 PM
 */

'use strict';

var React = require('react');
var _ = require('underscore');

module.exports = React.createClass({
    render: function () {
        var midSpecName = this.props.midSpecName;
        var midSpec = this.props.midSpec;
        return (
            <div key={midSpecName} className={"suite "+midSpec.state}>
                <span className="description">{midSpecName}</span>
            {_.map(midSpec.tests, (spec, specName)=>{
                return this.renderSpec(spec, specName);
            })}
            </div>
        );
    },
    renderSpec: function(spec, specName){
        var stackTrace = !spec.passed ? <div className="stackTrace"><div className="resultMessage">{spec.err.message}</div></div> : "";
        var metaData = (spec.metadata && spec.metadata.serviceCall) ? <div className="metadata"><div className="resultMessage">{spec.metadata.serviceCall}</div></div> : "" ;
        return (
            <div key={specName} className={"specSummary hideStackTrace "+spec.state}>
                <span className="description">{specName}</span>
                {stackTrace}
                {metaData}
            </div>
        );
    }
});