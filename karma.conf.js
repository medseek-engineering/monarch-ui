module.exports = function (config) {
  'use strict';
  config.set({
    basePath: '',

    port: 9267,

    runnerPort: 9100,

    colors: true,

    autoWatch: true,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    captureTimeout: 60000,

    browserDisconnectTolerance: 0,

    browserNoActivityTimeout: 60000,

    singleRun: true,

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
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
      'app/**/*.js',
      'app/*.js',

      //directive templates
      'app/**/*.html',
      'app/**/*.svg',
      // test scripts
      'test/**/*.test.js'
    ],

    reporters: ['coverage', 'progress', 'html'],

    preprocessors: {
      'app/**/*.html': ['ng-html2js'],
      'app/**/*.svg': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      // immitates ui-core
      prependPrefix: '',
      stripPrefix: 'app/',
      moduleName: 'templates'
    },

    frameworks: ['jasmine']
  });
};