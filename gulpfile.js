var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify');

gulp.task('lint', function () {
  return gulp.src(['src/*.js', '!node_modules{,/**}']).pipe(jshint()).pipe(jshint.reporter(stylish))
})

var DEST = 'dist/';

gulp.task('compress', function() {
  return gulp.src('src/*.js')
  .pipe(gulp.dest(DEST))
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest(DEST));
});

gulp.task('default', ['lint'])
