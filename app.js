'use strict';

// require dependencies
var ui = require('ui-core')();

// brings in d3 and lodash
ui.use(require('./additional-modules.js'));

ui.use(require('iui-general'));
ui.use(require('iui-table'));
ui.use(require('iui-lists'));
ui.use(require('iui-alerts'));
ui.use(require('iui-charts'));
ui.use(require('iui-calendar'));

// start the UI server
ui.start();
