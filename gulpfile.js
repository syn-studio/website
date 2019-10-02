let gulp = require('gulp')
let sass = require('gulp-sass')
let plumber = require('gulp-plumber')
let autoprefixer = require('gulp-autoprefixer')

// TASK FOR SASS
gulp.task('sass', () => { // create a gulp task called sass
    return gulp.src('src/**/**/*.scss')  // tells gulp what files are needed
        .pipe(plumber())
        .pipe(sass()) // sends the files through gulp sass
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./src')) // destination of files

})

// TASK TO START EVERYTHING
gulp.task('watch', ['sass'], () => {
    gulp.watch('src/**/*.scss', ['sass'])
})