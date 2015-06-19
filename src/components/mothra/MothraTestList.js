/**
 * User: Liam Dickson
 * Date: 6/19/15
 * Time: 10:56 AM
 */

'use strict';

var React = require('react');
var MothraTest = require('./MothraTest');

module.exports = React.createClass({
    render: function () {
        var test = this.props.model.testData[this.props.model.test];
        return (
            <div className="summary">
                {test.tests.map((subTest, i)=>{
                    return <MothraTest key={subTest.name} topSpec={subTest} testNum={i+1} {...this.props} />
                })}
            </div>
        );
    }
});