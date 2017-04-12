var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 10 versions']});

gulp.task('default', function () {
    gulp.src('./*.less')
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest('./'));
});