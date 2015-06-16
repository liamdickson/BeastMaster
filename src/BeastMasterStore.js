var BaseStore = require('fluxible/addons/BaseStore');
var BeastMasterState = require('./BeastMasterState');

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

    set(payload) {
        this.model.set(payload);
    }

    fetched(payload) {
        this.model.set('isLoading', false);
        this.model.set('testData', payload);
        this.model.unset('error');
    }

    error(payload) {
        this.model.set('isLoading', false);
        this.model.set('error', payload);
    }

    getUrlForProps(props) {
        var model = new BeastMasterState(props);
        return model.toUrlString();
    }

    changeEndpoint(payload) {
        console.log(payload);
        this.model.set('endpoint', payload);
    }
}

BeastMasterStore.storeName = 'BeastMasterStore';
BeastMasterStore.handlers = {
    'loading': 'loading',
    'fetched': 'fetched',
    'endpointSelected': 'changeEndpoint',
    'error': 'error',
    'navigated' : 'set'
};

module.exports = BeastMasterStore;