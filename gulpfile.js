'use strict';

// Объявляем наши плагины
var gulp = require('./node_modules/gulp');
var sass = require('./node_modules/gulp-sass');
var plumber = require('./node_modules/gulp-plumber');
var watch = require('./node_modules/gulp-watch');

// Создаем sass задание
// gulp.src - путь по которому лежит scss-файл который мы будем компилировать
// gulp.dest - путь в который мы будем генерить нашу css-ку
// plumber() - не выбрасывать из компилятора если есть ошибки
// errLogToConsole: true - выводить номер строки в которой допущена ошибка

gulp.task('sass', function () {
    gulp.src('scss/main.scss')
        .pipe(plumber())
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('assets/css'));
});
//Тут все просто, мы полностью просматривает папку в которой лежит scss-файл который мы хотим скомпилировать, и при любом изменении файлов в этой папки запускаем задание sass (gulp.task('sass))

gulp.task('default', function() {
    gulp.run('sass');
    gulp.watch('scss/**', function(event) {
        gulp.run('sass');
    })
});