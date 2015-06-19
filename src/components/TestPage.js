/**
 * User: Liam Dickson
 * Date: 6/19/15
 * Time: 10:06 AM
 */

'use strict';

var React = require('react');
var config = require('../config');
var MothraTestPage = require('./mothra/MothraTestPage');

module.exports = React.createClass({
    render: function () {
        // As needed add additional logic for other test suites
        return (
            this.props.model.service === 'mothra' ? <MothraTestPage {...this.props} /> : <span>Sorry, we can't parse this test type yet.</span>
        );
    }
});