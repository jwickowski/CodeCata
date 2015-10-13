var gulp = require('gulp');
var inject = require('gulp-inject');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

gulp.task('default', ['testsRunner'], function(){

});

gulp.task('testsRunner', ['compileScripts'], function(){
  var jasmineFiles = gulp.src([
    './node_modules/jasmine-core/lib/jasmine-core/jasmine.css',
    './node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
    './node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
    './node_modules/jasmine-core/lib/jasmine-core/boot.js'
  ]);
  
  var sourceScripts = gulp.src('bin/src/**/*.js', {read:false});
  var testsScripts = gulp.src('bin/tests/**/*.js',{read:false});

 gulp.src('./tests/runner.html')
    .pipe(plumber())
    .pipe(inject(jasmineFiles, {starttag: '<!-- inject:jasmine:{{ext}} -->', relative: true, addPrefix: '..'}))
    .pipe(inject(sourceScripts, {starttag: '<!-- inject:src:{{ext}} -->', relative: true, addPrefix: '..'}))
    .pipe(inject(testsScripts, {starttag: '<!-- inject:tests:{{ext}} -->', relative: true, addPrefix: '..'}))
    .pipe(gulp.dest('bin/tests'));
});

gulp.task('compileScripts', function(){

  gulp.src('tests/**/*.js')
      .pipe(plumber())
      .pipe(gulp.dest('bin/tests'));

 gulp.src('tests/**/*.ts')
      .pipe(plumber())
      .pipe(ts())
      .pipe(gulp.dest('bin/tests'));
  
 gulp.src('src/**/*.js')
    .pipe(plumber())
    .pipe(gulp.dest('bin/src'));

 gulp.src('src/**/*.ts')
    .pipe(plumber())
    .pipe(ts())
    .pipe(gulp.dest('bin/src'));
});

gulp.task('clean', function(){ 
      gulp.src('./bin/', {read: false})
        .pipe(plumber())
        .pipe(rimraf());            
});
