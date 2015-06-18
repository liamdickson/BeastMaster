'use strict';

var {Fluxible} = require('fluxible');
var BeastMasterWrapper = require('./components/BeastMasterWrapper');
var BeastMasterStore = require('./BeastMasterStore');

var app = new Fluxible({
    component: BeastMasterWrapper
});

app.registerStore(BeastMasterStore);

module.exports = app;