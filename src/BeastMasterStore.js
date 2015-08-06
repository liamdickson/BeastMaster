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
        var loadingVal = this.model.get('loadingVal');
        loadingVal += bool ? 1 : -1;
        if(loadingVal <= 0) {
            this.model.set({isLoading: false, loadingVal: loadingVal});
        }else{
            this.model.set({isLoading: true, loadingVal: loadingVal});
        }
    }

    loadTest(payload) {
        if(payload.app === 'mothra'){
            this.loadMothraTest(payload);
        }else{
            this.setTestError('App \"' + payload.app + '\" not supported.');
        }
    }

    loadMothraTest(payload) {
        var env = payload.env || this.model.env;
        var service = payload.service || this.model.service;
        var test = payload.test || this.model.test;
        this.loading(true);
        var query = {
            query : {
                ids : {
                    type : "external",
                    values : [env + '-' + service + '-' + test]
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
                if(result.hits.total) {
                    this.model.set({testData: result.hits.hits[0]._source});
                }else{
                    this.setTestError('Test \"' + test + '\" not found.');
                }
                this.loading(false);
            },
            error: (jqXHR, textStatus, error)=>{
                this.setTestError(error);
            }
        });
    }

    setTestError(error) {
        this.model.set({testData: null});
        this.model.set({error: error});
        this.loading(false);
    }

    loadRecentTests(payload) {
        if(payload.app == 'mothra'){
            this.loadRecentMothraTests(payload);
        }else{
            this.setTestError('App \"' + payload.app + '\" not supported.');
        }
    }

    loadRecentMothraTests(payload) {
        var testDataSet = {};
        var query;
        var mustArray = [];
        var pageSize = config.pageSize;
        var env = payload.env || this.model.env;
        var service = payload.service || this.model.service;
        var page = payload.page;
        this.loading(true);
        this.model.set({testDataSet: {}});
        if (env !== config.defaultEnv) {
            mustArray.push({ match: {env} });
        }
        if (service !== config.defaultService) {
            mustArray.push({ match: {service} });
        }
        query = {
            size: pageSize, from: page * pageSize,
            sort: [ { "_timestamp": "desc" } ],
            fields : ["_timestamp", "timestamp", "service", "env", "state" ],
            query : {
                bool: {
                    must: mustArray
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
            },
            error: (jqXHR, textStatus, error)=>{
                this.setTestError(error);
            }
        });
    }

    set(payload) {
        this.model.set(payload);
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