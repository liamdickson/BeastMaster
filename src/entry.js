'use strict';

var BeastMasterRouter = require('./BeastMasterRouter');
var BeastMasterApp = require('./BeastMasterApp');
var React = require('react');

var router;

var context = window.context = BeastMasterApp.createContext();

router = new BeastMasterRouter({context: context.getComponentContext()});
router.history.start({pushState: true});

React.render(
    context.createElement(),
    document.getElementById('main')
);