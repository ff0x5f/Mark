var gulp = require('gulp'), 
	babel = require('gulp-babel'),
	watch = require('gulp-watch'),
  sass = require('gulp-sass'),  
	minifycss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer');

var livereload = require('gulp-livereload'), // 网页自动刷新
	webserver = require('gulp-webserver');   // 本地服务器

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

// sass 浏览器前缀 压缩css
gulp.task('css', function() {
    return gulp.src('src/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 4 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true
            remove:true    //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
	gulp.watch('*.html'); // 监听根目录下所有.html文件
	gulp.watch('dist/*.js');
	gulp.watch('src/*.css', ['css']);
	gulp.watch('src/*.js', ['es6']);
});

gulp.task('default',['webserver', 'es6', 'css', 'watch']);
