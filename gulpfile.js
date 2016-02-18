var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var compass = require('gulp-compass');
var karma = require('karma').server;
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

// Defining Files
var base = './app/';
var jsFilesCombined = [
  './app/**/*.js'
];

var additionalLintFiles = [
  './gulpfile.js',
  './app.js'
];

var lintFiles = jsFilesCombined.concat(additionalLintFiles);

var watchFiles = {
  styles: ['app/themes/default_sass/**/*.scss', 'app/themes/default_sass/*.scss'],
  srcFiles: ['app/**/*.html', 'app/**/*.js'],
  jsFiles: lintFiles
};

gulp.task('lint', function () {
  'use strict';
  
  return gulp.src(lintFiles, {base: base})
    .pipe(jshint('./config/.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});


gulp.task('test', ['lint'], function (done) {
  'use strict';
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('compileStyle', function(){
  'use strict';
  gulp.src(base+'themes/default_sass/*.scss')
    .pipe(compass({
      /* jshint ignore:start */
      config_file: './config.rb',
      /* jshint ignore:end */ 
      sass: 'app/themes/default_sass',
      css: 'app/themes/default'
    }))
    .on('error', function(error) {
      console.log(error);
      this.emit('end');
    })
    .pipe(minifyCSS())
    .pipe(gulp.dest(base+'themes/default'))
    .pipe(browserSync.stream());
});

gulp.task('nodemon', function (cb) {
  'use strict';
  var called = false;
  return nodemon({script: 'app.js'}).on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  });
});

gulp.task('serve', ['lint', 'test', 'compileStyle', 'nodemon'], function() {
  'use strict';
  browserSync.init({
      proxy: 'http://localhost:4000',
      port: 4001
  });
  gulp.watch(watchFiles.jsFiles, ['lint']);
  gulp.watch(watchFiles.styles, ['compileStyle']);
  gulp.watch(watchFiles.srcFiles).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);