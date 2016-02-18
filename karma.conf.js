module.exports = function (config) {
  'use strict';
  config.set({
    basePath: '',

    port: 9267,

    runnerPort: 9100,

    colors: true,

    autoWatch: true,

    logLevel: config.LOG_INFO,

    browsers: ['Firefox'],

    captureTimeout: 60000,

    browserDisconnectTolerance: 0,

    browserNoActivityTimeout: 60000,

    singleRun: true,

    plugins: [
      'karma-jasmine',
      //'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-coverage',
      'karma-ng-html2js-preprocessor',
      'karma-spec-reporter'
    ],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    htmlReporter: {
      outputDir: 'karma_html',
      templatePath: __dirname + '/node_modules/karma-html-reporter/jasmine_template.html'
    },

    files: [
      // app core dependencies
      'node_modules/jquery/dist/jquery.js',
      'test/test-helper.js',
      'node_modules/ui-core/lib/content/js/angular.js',
      'node_modules/ui-core/lib/content/js/main.js',
      'node_modules/lodash/dist/lodash.min.js',
      'node_modules/d3/d3.min.js',
      'test/angular-mocks.js',

      // app module dependencies
      'lib/src/**/*.js',
      'lib/src/*.js',

      //directive templates
      'lib/src/**/*.html',
      'lib/src/**/*.svg',
      // test scripts
      'test/**/*.test.js'
    ],

    reporters: ['coverage', 'progress', 'html'],

    preprocessors: {
      'lib/src/**/*.html': ['ng-html2js'],
      'lib/src/**/*.svg': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      // immitates ui-core
      prependPrefix: '/$iui-alerts',
      stripPrefix: 'lib/src',
      moduleName: 'templates'
    },

    frameworks: ['jasmine']
  });
};