/**
 * User: Liam Dickson
 * Date: 6/19/15
 * Time: 10:06 AM
 */

'use strict';

var React = require('react');
var config = require('../config');
var MothraTestPage = require('./mothra/MothraTestPage');
var MechaTestPage = require('./mechagodzilla/MechaTestPage');
var {Alert} = require('react-bootstrap');

module.exports = React.createClass({
    render: function () {
        // As needed add additional logic for other test suites
        if(!this.props.model.testData){
            var error = this.props.model.error;
            return <Alert bsStyle='danger'>{error}</Alert>
        }
        var testPage = <span>Sorry, we can't parse this test type yet.</span>;
        if(this.props.model.app === 'mothra'){
            testPage = <MothraTestPage {...this.props} />;
        }else if(this.props.model.app === 'mechagodzilla'){
            testPage = <MechaTestPage {...this.props} />;
        }
        return testPage;
    }
});