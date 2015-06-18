'use strict';

var BaseStore = require('fluxible/addons/BaseStore');
var BeastMasterState = require('./BeastMasterState');
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

    loadTest() {
        this.model.set('isLoading', true);
        this.model.set('isLoading', false);
    }

    loadRecentTests() {
        var self = this;
        var loadAll;
        this.loading();
        this.model.set({testData: []});
        var testData = [];

        $.ajax({
            url: "/data/dev-output.json",
            async: true,
            success: (data)=>{
                testData.push(data);
                loadAll();
            }
        });
        $.ajax({
            url: "/data/qa-output.json",
            async: true,
            success: (data)=>{
                testData.push(data);
                loadAll();
            }
        });

        loadAll = function() {
            if(testData.length === 2) {
                self.model.set({testData});
                self.model.set('isLoading', false);
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