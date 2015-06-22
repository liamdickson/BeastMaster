/**
 * User: Liam Dickson
 * Date: 6/19/15
 * Time: 10:56 AM
 */

'use strict';

var React = require('react');
var MothraTest = require('./MothraTest');

module.exports = React.createClass({
    search: function(object){
        if(this.props.model.searchString) {
            return JSON.stringify(object).toLowerCase().includes(this.props.model.searchString.toLowerCase());
        }
        return true;
    },
    render: function () {
        var test = this.props.model.testData[this.props.model.test];
        return (
            <div className="summary">
                {test.tests.map((subTest, i)=>{
                    return <MothraTest key={subTest.name} className={this.search(subTest) ? "" : "isHidden"} topSpec={subTest} testNum={i} {...this.props} />
                })}
            </div>
        );
    }
});