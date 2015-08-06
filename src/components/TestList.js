/**
 * User: Liam Dickson
 * Date: 6/19/15
 * Time: 10:06 AM
 */

'use strict';

var React = require('react');
var MothraTestList = require('./mothra/MothraTestList');
var {Alert, Pager, PageItem, Well, Button, Label} = require('react-bootstrap');
var partial = require('lodash.partial');
var linkConstructor = require('./mixins/linkConstructor');
var config = require('../../src/config');

module.exports = React.createClass({
    mixins: [linkConstructor],
    render: function () {
        var page = Number(this.props.model.page);
        var hits = Number(this.props.model.totalHits);
        var displayPage = page + 1;
        if(this.props.model.app === 'mothra') {
            return (
                <div>
                    <Well bsSize='small'>
                        Filter:
                        <Label className='inline-margin' bsStyle='danger'>{this.props.model.env}</Label>
                        <Label className='inline-margin' bsStyle='info'>{this.props.model.service}</Label>
                        <Label className='inline-margin' bsStyle='warning'>Page {displayPage}</Label>
                        <Button className='pull-right' bsSize='xsmall'
                                onClick={partial(this.goToURL, {app: this.props.model.app})}>Clear</Button>
                    </Well>
                    <MothraTestList {...this.props} />
                    <Pager>
                        <PageItem onSelect={partial(this.goToURL, {env: this.props.model.env,
                            service: this.props.model.service, page: page-1})} disabled={page-1 < 0}>
                            Previous
                        </PageItem>
                        <PageItem disabled>{displayPage}</PageItem>
                        <PageItem onSelect={partial(this.goToURL, {env: this.props.model.env,
                            service: this.props.model.service, page: page+1})} disabled={displayPage * config.pageSize >= hits}>
                            Next
                        </PageItem>
                    </Pager>
                </div>
            );
        }else{
            return <Alert bsStyle='danger'>App "{this.props.model.app}" not supported.</Alert>;
        }
    }
});