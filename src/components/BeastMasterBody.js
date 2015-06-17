'use strict';

var React = require('react');
var config = require('../config');

module.exports = React.createClass({
    render: function () {
        var service = this.props.model.service ? this.props.model.service : 'home';

        var pageContent = (
            <div className="row">
                <div className="col-lg-12">
                    <h1>{config.copy.title[service]}</h1>
                    <p>{config.copy.body[service]}</p>
                </div>
            </div>);
        return (
            <div className="beast-master-body-wrapper" id="page-content-wrapper">
                <div className="container-fluid">
                {pageContent}
                </div>
            </div>
        );
    }
});