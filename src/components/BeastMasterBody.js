'use strict';

var React = require('react');
var config = require('../config');
var {Panel} = require('react-bootstrap');
var TestList = require('./TestList');
var TestPage = require('./TestPage');
var linkConstructor = require('./mixins/linkConstructor');
var partial = require('lodash.partial');

module.exports = React.createClass({
    mixins: [linkConstructor],
    render: function () {
        var service = this.props.model.app;
        var bodyContent = "Loading...";
        if(!this.props.model.isLoading){
            bodyContent = this.props.model.test ? <TestPage {...this.props} /> : <TestList {...this.props} />;
        }
        var pageContent = (
            <div className="col-lg-12">
                {bodyContent}
            </div>
        );
        return (
            <Panel header={config.copy.title[service]} className="beast-master-body-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        {pageContent}
                    </div>
                </div>
            </Panel>
        );
    }
});