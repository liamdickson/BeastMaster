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

    loadTest() {
        if(this.model.app == 'mothra'){
            this.loadMothraTest();
        }else if(this.model.app == 'mechagodzilla'){
            this.loadMechagodzillaTest();
        }else{
            this.setTestError('App \"' + this.model.app + '\" not supported.');
        }
    }

    loadMothraTest() {
        this.loading(true);
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
                if(result.hits.total) {
                    this.model.set({testData: result.hits.hits[0]._source});
                }else{
                    this.setTestError('Test \"' + this.model.test + '\" not found.');
                }
                this.loading(false);
            },
            error: (jqXHR, textStatus, error)=>{
                this.setTestError(error);
            }
        });
    }

    loadMechagodzillaTest() {
        this.setTestError('App \"' + this.model.app + '\" not supported.');
    }

    setTestError(error) {
        this.model.set({testData: null});
        this.model.set({error: error});
        this.loading(false);
    }

    loadRecentTests() {
        if(this.model.app == 'mothra'){
            this.loadRecentMothraTests();
        }else if(this.model.app == 'mechagodzilla'){
            this.loadRecentMechagodzillaTests();
        }else{
            this.setTestError('App \"' + this.model.app + '\" not supported.');
        }
    }

    loadRecentMothraTests() {
        var loadAll;
        this.loading(true);
        this.model.set({testDataSet: {}});
        var testDataSet = {};
        var query = {
            from : 0, size : 30,
            fields : [ "timestamp", "service", "env", "state" ],
            query : {
                bool: {
                    must: [
                        { match: { env : this.model.env } },
                        { match: { service : this.model.service } }
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
            },
            error: (jqXHR, textStatus, error)=>{
                this.setTestError(error);
            }
        });
    }

    loadRecentMechagodzillaTests() {
        this.setTestError('App \"' + this.model.app + '\" not supported.');
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