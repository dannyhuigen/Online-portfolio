var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var sassGlob = require("gulp-sass-glob");
const autoprefixer = require('gulp-autoprefixer');

//function that fires all functions I need to start developing
gulp.task("watch" , ["sass"] , function () {
    console.log("Welcome back enjoy devloping :)");
    gulp.watch("app/styles/scss/**/*.scss" , ["sass"])
});



//function to compile all SCSS from SCSS map to CSS stylesheet
gulp.task("sass" , function () {
    return gulp
        .src("app/styles/scss/styles.scss")
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("app/styles/css/"));
});