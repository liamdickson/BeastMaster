'use strict';

var {Fluxible} = require('fluxible');
var BeastMasterMain = require('./components/BeastMasterMain');
var BeastMasterStore = require('./BeastMasterStore');

var app = new Fluxible({
    component: BeastMasterMain
});

app.registerStore(BeastMasterStore);

module.exports = app;