'use strict';

var path = require('path'),
additionalModules = [
  {
    nodeModuleName: 'd3',
    files: [
      'd3.min.js'
    ]
  },
  {
    nodeModuleName: 'lodash',
    files: [
      'lodash.js'
    ]
  }
];

module.exports = {
  config: function (conf) {
    additionalModules.forEach(function (addlModule) {
      console.log('Using ' + addlModule.nodeModuleName);
      addlModule.files.forEach(function (filePath) {
        conf.client.head.scripts.push(conf.client.app.root + '$' + addlModule.nodeModuleName + '/' + filePath);
      });
    });
  },
  app: function (app) {
    additionalModules.forEach(function (addlModule) {
      addlModule.path = path.dirname(require.resolve(addlModule.nodeModuleName)) + '/';
      app.get('/\\$' + addlModule.nodeModuleName + '/*', function (req, res) {
        res.sendfile(addlModule.path + req.params[0]);
      });
    });
  }
};