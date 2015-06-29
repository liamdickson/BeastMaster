/**
 * User: Liam Dickson
 * Date: 6/19/15
 * Time: 10:06 AM
 */

'use strict';

var React = require('react');
var config = require('../config');
var MothraTestPage = require('./mothra/MothraTestPage');
var {Alert} = require('react-bootstrap');

module.exports = React.createClass({
    render: function () {
        // As needed add additional logic for other test suites
        if(!this.props.model.testData){
            var error = this.props.model.error;
            return <Alert bsStyle='danger'>{error}</Alert>
        }
        return (
            this.props.model.app === 'mothra' ? <MothraTestPage {...this.props} /> : <span>Sorry, we can't parse this test type yet.</span>
        );
    }
});