const gulp = require('gulp');
const sass = require('sass');
const sourcemaps = require('gulp-sourcemaps');
const gulpUglify = require('gulp-uglify');
const gulpObfusccate = require('gulp-obfuscate');
const gulpImagemin = require('gulp-imagemin');

function comprimeSass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function comprimeJava(){
    return gulp.src('./source/scipts/*.js')
    .pipe(gulpUglify())
    .pipe(gulpObfusccate())
    .pipe(gulp.dest('./build/scipts'))
}

function comprimeImagem(){
    return gulp.src('./source/img/*')
    .pipe(gulpImagemin())
    .pipe(gulp.dest('./build/img'))
}

exports.sass = comprimeSass
exports.java = comprimeJava
exports.img = comprimeImagem
