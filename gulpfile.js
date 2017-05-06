var gulp = require('gulp');
var copy = require('gulp-contrib-copy');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default',function(){
	gulp.src('src/**')
		.pipe(copy())
		.pipe(gulp.dest('dev'));

});

gulp.task('createprod',function(){
	return gulp.src("src/**/*.js")
			.pipe(concat('all.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('prod'))
})