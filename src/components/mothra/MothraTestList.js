/**
 * User: Liam Dickson
 * Date: 6/23/15
 * Time: 2:39 PM
 */

'use strict';

var React = require('react');
var _ = require('underscore');
var {ListGroup, ListGroupItem, Button} = require('react-bootstrap');
var partial = require('lodash.partial');
var linkConstructor = require('../mixins/linkConstructor');
var idConverter = require('../mixins/idConverter');

module.exports = React.createClass({
    mixins: [linkConstructor, idConverter],
    render: function () {
        var testList = (
            <div className='text-center'>No tests match your filter.
                <Button className='inline-margin' bsSize='xsmall'
                    onClick={partial(this.goToURL, {app: this.props.model.app, env: this.props.model.env})}>
                    Clear
                </Button>
            </div>);

        if(Object.keys(this.props.model['testDataSet']).length !== 0){
            var keys = Object.keys(this.props.model['testDataSet']);
            keys.sort().reverse();
            testList = keys.map((key)=>{
                var prop = this.props.model['testDataSet'][key];
                var id = this.hrToEpoch(prop.timestamp);
                var payload = {
                    env: prop.env,
                    service: prop.service,
                    test: id
                };
                return (
                    <ListGroupItem bsStyle={prop.state === 'passed' ? 'success' : 'warning'}
                            href={'/mothra/' + prop.env + '/' + prop.service + '/' + id}
                            onClick={partial(this.goToURL, payload)}
                            key={prop.timestamp}>
                        {prop.timestamp + " - " + prop.env + " - " + prop.service + " - " + prop.state}
                    </ListGroupItem>);
            })
        }
        return (
            <ListGroup>
                {testList}
            </ListGroup>
        );
    }
});