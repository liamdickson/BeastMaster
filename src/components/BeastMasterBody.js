'use strict';

var React = require('react');
var config = require('../config');
var {Button, Panel, ProgressBar} = require('react-bootstrap');
var Router = require('../BeastMasterRouter');
var TestList = require('./TestList');
var TestPage = require('./TestPage');
var linkConstructor = require('./mixins/linkConstructor');
var partial = require('lodash.partial');

module.exports = React.createClass({
    mixins: [linkConstructor],
    render: function () {
        var service = this.props.model.app;
        var loadingPer = this.props.model.testLoadingPercent;
        var bodyContent = loadingPer ?
            <div><h3>Loading...</h3><ProgressBar bsStyle='success' active now={loadingPer} /></div> :
            <h3>Loading...</h3>;
        if(!this.props.model.isLoading){
            bodyContent = this.props.model.test ?
            <div><Button onClick={this.goBack}>Go Back</Button><TestPage {...this.props} /></div> : <TestList {...this.props} />;
        }
        return (
            <Panel header={config.copy.title[service]} className="beast-master-body-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            {bodyContent}
                        </div>
                    </div>
                </div>
            </Panel>
        );
    }
});