var less = require('gulp-less');
var livereload = require('gulp-livereload');
var gulp = require('gulp');
var connect = require('gulp-connect');
var browserSync = require('browser-sync').create();
 
gulp.task('less', function() {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        // 1.pipe(connect.reload());
        // 2.pipe(livereload());
});
 

gulp.task('watch', function () {
    // 2livereload.listen();
    gulp.watch(['./src/**/*.less'], ['less']).on('error', );
    // gulp.watch("src/css/*.css").on('change', browserSync.reload);
});

//使用connect启动一个Web服务器
gulp.task('connect', function () {
  connect.server({
    root: './'
    // 1 livereload: true
  });
});


// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

     gulp.watch("src/css/*.css").on('change', browserSync.reload);
});



//运行Gulp时，默认的Task
gulp.task('default', ['connect', 'watch']);

// 总结：刷新的方法
// 1, connect 作为gulp任务，会启动一个server
// 2，livereload 作为gulp任务，不额外启动server
// 3, browser-sync 可以通过终端命令监听，不启动额外的server
// 4， browser-sync 作为gulp任务，启动一个服务