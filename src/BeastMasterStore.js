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
        var getURL = config.esUrl + 'external/' + this.model.env + '-' + this.model.service + '-' + this.model.test;
        this.loading();
        $.get(getURL, (result)=>{
            this.model.set({testData: result._source});
            this.loading(false);
        }).fail(()=>{
            this.model.set({testData: null});
            this.model.set({error: 'ERROR: \"' + getURL + '\" not found.'});
            this.loading(false);
        });
    }

    loadRecentTests() {
        var loadAll;
        this.loading(true);
        this.model.set({testDataSet: {}});
        var testDataSet = {};

        $.ajax({
            url: "/data/dev-output.json",
            async: true,
            success: (data)=>{
                testDataSet[idConverter.hrToEpoch(data.timestamp)] = data;
                loadAll();
            }
        });
        $.ajax({
            url: "/data/qa-output.json",
            async: true,
            success: (data)=>{
                testDataSet[idConverter.hrToEpoch(data.timestamp)] = data;
                loadAll();
            }
        });

        loadAll = ()=>{
            if(Object.keys(testDataSet).length === 2) {

                this.model.set({testDataSet});
                this.loading(false);
            }
        };
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