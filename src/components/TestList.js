/**
 * User: Liam Dickson
 * Date: 6/19/15
 * Time: 10:06 AM
 */

'use strict';

var React = require('react');
var MothraTestList = require('./mothra/MothraTestList');

module.exports = React.createClass({
    render: function () {
        if(this.props.model.app === 'mothra') {
            return <MothraTestList {...this.props} />
        }else{
            return <span>Sorry, we don't have this app implemented yet.</span>;
        }
    }
});