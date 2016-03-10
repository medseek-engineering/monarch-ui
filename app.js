'use strict';

// require dependencies
var ui = require('ui-core')();

ui.use(require('iui-general'));
ui.use(require('iui-table'));
ui.use(require('iui-lists'));
ui.use(require('iui-alerts'));
ui.use(require('./additional-modules.js'));
ui.use(require('iui-charts'));

// start the UI server
ui.start();
