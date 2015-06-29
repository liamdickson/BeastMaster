'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var BeastMasterState = require('./BeastMasterState');
var idConverter = require('./components/mixins/idConverter');
var config = require('./config.js');
var $ = require('jquery');

class BeastMasterStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.model = new BeastMasterState();
        this.model.on('change', this.emitChange, this);
    }

    getModel() {
        return this.model;
    }

    loading(bool) {
        this.model.set('isLoading', bool);
    }

    loadTest() {
        //var getURL = config.esUrl + 'external/' + this.model.env + '-' + this.model.service + '-' + this.model.test;
        this.loading();

        var query = {
            query : {
                ids : {
                    type : "external",
                    values : [this.model.env + '-' + this.model.service + '-' + this.model.test]
                }
            }
        };
        $.ajax({
            type: "POST",
            url: config.esUrl + "_search",
            contentType: 'application/json',
            data: JSON.stringify(query),
            dataType: "json",
            success: (result)=>{
                this.model.set({testData: result.hits.hits[0]._source});
                this.loading(false);
            },
            error: (jqXHR, textStatus, error)=>{
                console.log(error);
                this.model.set({testData: null});
                this.model.set({error: 'ERROR: \"' + getURL + '\" not found.'});
                this.loading(false);
            }
        });
    }

    loadRecentTests() {
        var loadAll;
        this.loading(true);
        this.model.set({testDataSet: {}});
        var testDataSet = {};
        var query = {
            fields : [ "timestamp", "service", "env", "state" ],
            query : {
                bool: {
                    must: [
                        { term: { env : this.model.env } },
                        { term: { service : this.model.service } }
                    ]
                }
            }
        };
        $.ajax({
            type: "POST",
            url: config.esUrl + "_search",
            contentType: 'application/json',
            data: JSON.stringify(query),
            dataType: "json",
            success: (data)=>{
                data.hits.hits.forEach((hit)=>{
                    testDataSet[idConverter.hrToEpoch(hit.fields.timestamp[0])] = {
                        env: hit.fields.env[0],
                        service: hit.fields.service[0],
                        state: hit.fields.state[0],
                        timestamp: hit.fields.timestamp[0]
                    }
                });
                this.model.set({testDataSet});
                this.loading(false);
            }
        });
    }

    set(payload) {
        this.model.set(payload);
    }

    getUrlForProps(props) {
        var model = new BeastMasterState(props);
        return model.toUrlString();
    }
}

BeastMasterStore.storeName = 'BeastMasterStore';
BeastMasterStore.handlers = {
    'navigate' : 'set',
    'set' : 'set',
    'loadRecentTests' : 'loadRecentTests',
    'loadTest' : 'loadTest',
    'loading': 'loading'
};

module.exports = BeastMasterStore;