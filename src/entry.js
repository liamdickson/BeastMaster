'use strict';

var React = require('react');
var BeastMasterRouter = require('./BeastMasterRouter');
var BeastMasterApp = require('./BeastMasterApp');

var context = window.context = BeastMasterApp.createContext();
var router = new BeastMasterRouter({context: context.getComponentContext()});
router.history.start({pushState: true});

React.render(
    context.createElement(),
    document.getElementById('main')
);