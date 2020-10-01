


const gulp = require('gulp');
const sass = require('gulp-sass');



// Converts Sass to CSS with gulp-sass use: gulp sass

gulp.task('sass', function(){
  return gulp.src(
    './scss/grid.scss'
    )
    .pipe(sass()) 
    .pipe(gulp.dest('./scss/'))
});




