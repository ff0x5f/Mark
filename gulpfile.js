var gulp = require('gulp'), 
	babel = require('gulp-babel'),
	watch = require('gulp-watch');

var livereload = require('gulp-livereload'), // 网页自动刷新
	webserver = require('gulp-webserver'); // 本地服务器

// 注册任务
gulp.task('webserver', function() {
	gulp.src( './' )
	.pipe(webserver({
		livereload: true,
		open: true
	}));
});

// es6
gulp.task('es6',function(){
    return gulp.src('src/*.js')
    	.pipe(babel(
    		{presets: ['es2015']}
    	))
    	.on('error', function(err) {
			console.log('Babel Error!', err.message);
			this.end();
		})
    	.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch( '*.html'); // 监听根目录下所有.html文件
	gulp.watch('src/*.js', ['es6']);
});

gulp.task('default',['webserver', 'es6', 'watch']);
