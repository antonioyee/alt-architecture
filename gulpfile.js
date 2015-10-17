var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', ['js', 'css', 'fonts']);

gulp.task('js', function () {
    gulp.src([
            './bower_components/jquery/dist/jquery.js',
            './bower_components/bootstrap/dist/js/bootstrap.js'])
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/'))
});

gulp.task('css', function () {
    gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./css/'));
});

gulp.task('fonts', function() {
    gulp.src('./bower_components/bootstrap/dist/fonts/**/*')
    .pipe(gulp.dest('./fonts/'));
});
