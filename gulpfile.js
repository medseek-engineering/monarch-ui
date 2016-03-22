(function() {
  'use strict';

  var gulp = require('gulp');
  var gulpConcat = require('gulp-concat');
  var minifyCSS = require('gulp-minify-css');
  var compass = require('gulp-compass');
  var karma = require('karma').server;
  var jshint = require('gulp-jshint');
  var browserSync = require('browser-sync').create();
  var nodemon = require('gulp-nodemon');
  var ngHtml2Js = require('gulp-ng-html2js');
  var fs = require('fs');
  var path = require('path');
  var packageJson = JSON.parse(fs.readFileSync('./package.json'));

  // Defining Files

  var environment = 'production';

  var additionalLintFiles = [
    './gulpfile.js',
    './'+packageJson.main
  ];

  var allLintFiles = packageJson.buildSettings.appFiles.jsFiles.concat(additionalLintFiles);


  var compassStyleModulesWatch = [];
  var iuiModuleJSWatch = [];

  var compassImportPaths = packageJson.buildSettings.styleModules.map(function(styleModule) {
    var styleModulePath = path.join(path.dirname(require.resolve(styleModule)),'src');
    var jsModulePath = path.join(path.dirname(require.resolve(styleModule)),'dist');
    compassStyleModulesWatch.push(styleModulePath+'/*.scss');
    compassStyleModulesWatch.push(styleModulePath+'/**/*.scss');
    iuiModuleJSWatch.push(jsModulePath+'/*.min.js');
    return styleModulePath;
  });


  gulp.task('lint', function () {
    return gulp.src(allLintFiles, {base: packageJson.buildSettings.base})
      .pipe(jshint('./config/.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
  });

  gulp.task('test', ['lint'], function (done) {
    karma.start({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, done);
  });

  gulp.task('createTemplates', function(cb){
    gulp.src(packageJson.buildSettings.appFiles.templateFiles)
      .pipe(ngHtml2Js({
        base: packageJson.buildSettings.base,
        moduleName: packageJson.buildSettings.createTemplates.moduleName,
        prefix: packageJson.buildSettings.createTemplates.prefix
      }))
      .pipe(gulpConcat(packageJson.buildSettings.createTemplates.templateFile))
      .pipe(gulp.dest(packageJson.buildSettings.destination.js))
      .on('end', cb);
  });

  gulp.task('compileStyle', function(){
    gulp.src(packageJson.buildSettings.appFiles.styles)
      .pipe(compass({
        require: ['sass-globbing', 'bootstrap-sass'].concat(packageJson.buildSettings.compass.require),
        project: __dirname,
        sass: packageJson.buildSettings.compass.sass,
        css: packageJson.buildSettings.compass.css,
        time: true,
        sourcemap: environment === 'development',
        /* jshint ignore:start */
        import_path: compassImportPaths
        /* jshint ignore:end */
      }))
      .on('error', function(error) {
        console.log(error);
        this.emit('end');
      })
      .pipe(minifyCSS())
      .pipe(gulp.dest(packageJson.buildSettings.destination.css))
      .pipe(browserSync.stream());
  });

  gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({script: packageJson.main}).on('start', function () {
      if (!called) {
        called = true;
        cb();
      }
    });
  });

  gulp.task('serve', ['lint', 'test', 'compileStyle', 'nodemon'], function() {
    environment = 'development';
    browserSync.init({
        proxy: 'http://localhost:4000',
        port: 4001
    });
    gulp.watch(allLintFiles, ['lint']);
    gulp.watch(packageJson.buildSettings.appFiles.styles.concat(compassStyleModulesWatch), ['compileStyle']);
    gulp.watch(packageJson.buildSettings.appFiles.jsFiles.concat(iuiModuleJSWatch)).on('change', browserSync.reload);
    gulp.watch(packageJson.buildSettings.appFiles.htmlFiles).on('change', browserSync.reload);
  });

  gulp.task('build', ['lint', 'test', 'createTemplates', 'compileStyle']);

  gulp.task('default', ['serve']);

})();