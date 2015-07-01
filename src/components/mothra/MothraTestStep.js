/**
 * User: Liam Dickson
 * Date: 6/19/15
 * Time: 2:37 PM
 */

'use strict';

var React = require('react');
var _ = require('underscore');
var MothraTestStepSpec = require('./MothraTestStepSpec');

module.exports = React.createClass({
    render: function () {
        var midSpecName = this.props.midSpecName;
        var midSpec = this.props.midSpec;
        return (
            <div key={midSpecName} className={"suite "+midSpec.state}>
                <span className="description">{midSpecName}</span>
            {_.map(midSpec.tests, (spec, specName)=>{
                return <MothraTestStepSpec key={specName} spec={spec} specName={specName} />;
            })}
            </div>
        );
    }
});