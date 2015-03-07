var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    // minifycss = require('gulp-minify-css'),
    newer = require('gulp-newer');

gulp.task('styles', function(){
  return gulp.src(['assets/scss/*.scss',
                   'assets/scss/**/*.scss'], 
            {base: 'assets/scss/'} )
      .pipe(plumber())
        .pipe(sass({ style: 'expanded' }))
        .pipe(gulp.dest(''))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        // .pipe(minifycss())
        .pipe(gulp.dest(''));
});

gulp.task('watch',function() {
   gulp.watch('assets/scss/**/*.scss',['styles']); // we run the "styles" task every time one of the scss files change
 });

gulp.task('default', ['styles', 'watch']);