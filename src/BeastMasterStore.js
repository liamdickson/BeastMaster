'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var BeastMasterState = require('./BeastMasterState');
var timeConverter = require('./components/mixins/timeConverter');
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

    loading() {
        this.model.set('isLoading', true);
    }

    loadRecentTests(payload) {
        var loadAll;
        this.loading();
        this.model.set({testData: {}});
        var testData = {};

        $.ajax({
            url: "/data/dev-output.json",
            async: true,
            success: (data)=>{
                testData[timeConverter.hrToEpoch(data.timestamp)] = data;
                loadAll();
            }
        });
        $.ajax({
            url: "/data/qa-output.json",
            async: true,
            success: (data)=>{
                testData[timeConverter.hrToEpoch(data.timestamp)] = data;
                loadAll();
            }
        });

        loadAll = ()=>{
            if(Object.keys(testData).length === 2) {
                this.model.set({testData});
                if(payload.test){
                    this.model.set('test', payload.test);
                }
                this.model.set('isLoading', false);
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
    'loadRecentTests' : 'loadRecentTests',
    'loadTest' : 'loadTest',
    'loading': 'loading'
};

module.exports = BeastMasterStore;