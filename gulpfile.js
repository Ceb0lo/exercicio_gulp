const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const gulpUglify = require('gulp-uglify');
const gulpObfusccate = require('gulp-obfuscate');
const gulpImagemin = require('gulp-imagemin');

function comprimeSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle : 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

function comprimeJava(){
    return gulp.src('./source/scipts/*.js')
    .pipe(gulpUglify())
    .pipe(gulpObfusccate())
    .pipe(gulp.dest('./build/scipts'));
}

function comprimeImagem(){
    return gulp.src('./source/img/*')
    .pipe(gulpImagemin())
    .pipe(gulp.dest('./build/img'));
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false} , gulp.series(comprimeSass));
    gulp.watch('./source/scipts/*.js', {ignoreInitial: false} , gulp.series(comprimeJava));
    gulp.watch('./source/img/*', {ignoreInitial: false} , gulp.series(comprimeSass));
}
exports.sass = comprimeSass
exports.java = comprimeJava
exports.img = comprimeImagem
