'use strict';
const gulp = require('gulp'); //сам сборщик
const sourcemaps = require("gulp-sourcemaps"); //исходная карта файлов
const argv = require("yargs").argv // позволяет запускать gulp со своими аргументами $gulp --prod
const del = require('del'); //стандартный модуль для удаления файлов
const newer = require("gulp-newer"); //отслеживает 2 папки исходящую и входящу, не передаёт в входящуюю папку файл, если такой же уже есть там
const imageminJpegRecompress = require("imagemin-jpeg-recompress"); //дополнение к gulp-imagemin для работы с JPG-изображениями;
const imagemin = require("gulp-imagemin"); //сжатие изображений PNG, JPG, GIF и SVG;
const pngquant = require("imagemin-pngquant"); //дополнение к gulp-imagemin для работы с PNG-изображениями;
const debug = require("gulp-debug"); //отладка в терминале;
const minCss = require("gulp-clean-css"); //минификация, оптимизация css
const sass = require('gulp-sass');//компилирует scss/sacss в css
const csscomb = require('gulp-csscomb');//сортирует css
const autoprefixer = require('gulp-autoprefixer');//автопрефексер
const rename = require('gulp-rename');//переменование файлов
const sizereport = require('gulp-sizereport'); // показывает размер файла
const gcmq = require('gulp-group-css-media-queries'); //групирует css медиазапросы
const browsersync = require('browser-sync').create(); //автоперезагрузка страницы после изменений
const notify = require("gulp-notify"); //вывод ошибок;
const plumber = require('gulp-plumber'); //отслеживает ошибки на всё потоке
const rollup = require('gulp-better-rollup');//соединение js
const gif = require('gulp-if');// позволяет задавать условия для выполнения пакетов
const uglify = require('gulp-uglify'); //сжатие js
const jshint = require('gulp-jshint');//стилизация ошибки в js
const cheerio = require('gulp-cheerio');
const svgmin = require('gulp-svgmin');//минификатор svg
const scssimport = require('gulp-sass-glob'); //атоматически прописывет импорт scss
const svgstore = require('gulp-svgstore'); //cоздаёт svg спрайт
const replace = require('gulp-replace');
const w3cjs = require('gulp-w3cjs'); //валидатор html
const htmlmin = require('gulp-htmlmin'); //минификатор html
const strip = require('gulp-strip-comments'); //удаление коментариев html
const zip = require('gulp-zip'); //архиватор


gulp.task('style', function (done) {
    gulp.src('dev/scss/style.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'Ошибка в стилях',
                    message: '\nФайл: ' + err.relativePath + ';' + '\nРяд: ' + err.line + ';' + '  Колонка: ' + err.column + ';' + '\nОшибка: ' + err.messageOriginal + ';'
                }
            })
        }))
        .pipe(scssimport())
        .pipe(gif(!argv.prod, sourcemaps.init()))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gif(argv.prod, gcmq()))
        .pipe(gif(argv.prod, csscomb()))
        .pipe(gif(argv.prod, gulp.dest("prod/css/"), gulp.dest('dev/css')))
        .pipe(sizereport())
        .pipe(autoprefixer({browsers: ["last 10 versions"]}))
        .pipe(minCss({
            compatibility: "*",
            level: {1: {specialComments: 0}}
        }))
        .pipe(rename({suffix: ".min"}))
        .pipe(sizereport())
        .pipe(browsersync.reload({
            stream: true
        }))
        .pipe(gif(!argv.prod, sourcemaps.write('../map/css')))
        .pipe(gif(argv.prod, gulp.dest('prod/css'), gulp.dest('dev/css')));
    done()
});


gulp.task("img", function () {
    return gulp.src(["./dev/img/**/*.{jpg,jpeg,png,gif,svg}"])
        .pipe(newer("./prod/img/"))
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imagemin.jpegtran({
                progressive: true
            }),
            imageminJpegRecompress({
                loops: 1,
                quality: "low"
            }),
            imagemin.svgo(),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            pngquant({
                quality: "65-70",
                speed: 5
            })
        ]))
        .pipe(gulp.dest("./prod/img/"))
        .pipe(debug({
            "title": "images"
        }))
});

gulp.task('js', function (done) {
    gulp.src('dev/js/script.js')
        .pipe(plumber({
            errorHandler: notify.onError(function () {
                return {
                    title: 'Ошибка в синтаксисе js',
                    message: 'Смотри в терминале'
                };
            })
        }))
        .pipe(jshint({
            esversion: ['6']
        }))
        .pipe(jshint.reporter('jshint-stylish', {beep: true}))
        .pipe(gif(!argv.prod, sourcemaps.init()))
        .pipe(rollup({}, 'iife'))
        .pipe(gif(argv.prod, gulp.dest("prod/js/")))
        .pipe(gif(argv.prod, sizereport()))
        .pipe(gif(argv.prod, uglify()))
        .pipe(rename({suffix: ".min"}))
        .pipe(sizereport())
        .pipe(gif(!argv.prod, sourcemaps.write('../map/js')))
        .pipe(gif(argv.prod, gulp.dest('prod/js'), gulp.dest('dev/js')))
        .pipe(browsersync.reload({stream: true}));
    done()
});

gulp.task('serve', function () {
    browsersync.init({
        server: "dev/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });
});

gulp.task('clean', function () {
    return del(['prod/{css,js,fonts, *.html}', 'project.zip'])
});

gulp.task('copy', function (done) {
    gulp.src('dev/fonts')
        .pipe(gulp.dest('prod/'));
    done()
});

gulp.task('sprite', function (done) {
    gulp.src('dev/img/sprite_icon/**.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                if (!$('svg').attr('viewBox')) {
                    var w = $('svg').attr('width');
                    var h = $('svg').attr('height');
                    $('svg').attr('viewBox', '0 0 ' + w + ' ' + h);
                }
                $('[width]').removeAttr('width');
                $('[height]').removeAttr('height');
                if (($('svg').attr('fill')) !== 'none') {
                    $('[fill]').removeAttr('fill');
                }

                $('[style]').removeAttr('style');
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest('dev/img/'));
    done()
});

gulp.task('html', function (done) {
    gulp.src('dev/*.html')
        .pipe(w3cjs())
        .pipe(gif(argv.prod, strip())) //удаление коментариев
        //.pipe(gif(argv.prod, htmlmin({ collapseWhitespace: true }))) //раскоментировать если нужно минифицировать html
        .pipe(gif(argv.prod, gulp.dest('prod/')))
    done()
});

gulp.task('zip', function (done) {
    gulp.src('prod/*')
        .pipe(zip('project.zip'))
        .pipe(gulp.dest('./'));
    done()
});

//запускать таcк: gulp build --prod
gulp.task('build', gulp.series('clean', 'sprite', 'img', gulp.parallel('style', 'js', 'copy', 'html'), 'zip'));

gulp.task('watch', function (done) {
    gulp.watch('dev/scss/**/**.*', gulp.series('style'));
    /*    gulp.watch("dev/img/!**!/!*.{jpg,jpeg,png,gif,svg}", gulp.series('img'));*/
    gulp.watch(['dev/js/**/*.js', '!dev/js/**/*.min.js'], gulp.series('js'));
    gulp.watch('dev/img/sprite/*.svg)', gulp.series('sprite'));
    gulp.watch('dev/*.html', gulp.series('html', browsersync.reload))
    done()
});

gulp.task('default', gulp.series('style', 'js', 'sprite', 'html', gulp.parallel('watch', 'serve')
));
