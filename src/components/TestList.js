/**
 * User: Liam Dickson
 * Date: 6/19/15
 * Time: 10:06 AM
 */

'use strict';

var React = require('react');
var MothraTestList = require('./mothra/MothraTestList');
var {Alert} = require('react-bootstrap');

module.exports = React.createClass({
    render: function () {
        if(this.props.model.app === 'mothra') {
            return <MothraTestList {...this.props} />
        }else{
            return <Alert bsStyle='danger'>App "{this.props.model.app}" not supported.</Alert>;
        }
    }
});