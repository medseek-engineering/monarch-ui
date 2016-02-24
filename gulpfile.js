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
  var fs = require('fs');
  var path = require('path');
  var packageJson = JSON.parse(fs.readFileSync('./package.json'));

  // Defining Files

  var environment = 'production';

  var additionalLintFiles = [
    './gulpfile.js',
    './'+packageJson.main
  ];

  var allLintFiles = packageJson.gulpSettings.appFiles.jsFiles.concat(additionalLintFiles);


  var compassStyleModulesWatch = [];

  var compassImportPaths = packageJson.gulpSettings.styleModules.map(function(styleModule) {
    var styleModulePath = path.join(path.dirname(require.resolve(styleModule)),'src');
    compassStyleModulesWatch.push(styleModulePath+'/*.scss');
    compassStyleModulesWatch.push(styleModulePath+'/**/*.scss');
    return styleModulePath;
  });


  gulp.task('lint', function () {
    return gulp.src(allLintFiles, {base: packageJson.gulpSettings.base})
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

  gulp.task('compileStyle', function(){
    gulp.src(packageJson.gulpSettings.appFiles.styles)
      .pipe(compass({
        require: ['sass-globbing', 'bootstrap-sass'].concat(packageJson.gulpSettings.compass.require),
        project: __dirname,
        sass: packageJson.gulpSettings.compass.sass,
        css: packageJson.gulpSettings.compass.css,
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
      .pipe(gulp.dest(packageJson.gulpSettings.destination.css))
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
    gulp.watch(packageJson.gulpSettings.appFiles.styles.concat(compassStyleModulesWatch), ['compileStyle']);
    gulp.watch(packageJson.gulpSettings.appFiles.htmlFiles).on('change', browserSync.reload);
  });

  gulp.task('build', ['lint', 'test', 'compileStyle']);

  gulp.task('default', ['serve']);

})();