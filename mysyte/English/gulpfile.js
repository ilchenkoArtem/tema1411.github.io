var gulp = require('gulp'); //сам сборщик
var sourcemaps = require("gulp-sourcemaps"); //исходная карта файлов
var argv = require("yargs").argv; // позволяет запускать gulp со своими аргументами $gulp --prod
var del = require('del'); //стандартный модуль для удаления файлов
var newer = require("gulp-newer"); //отслеживает 2 папки исходящую и входящу, не передаёт в входящуюю папку файл, если такой же уже есть там
var imageminJpegRecompress = require("imagemin-jpeg-recompress"); //дополнение к gulp-imagemin для работы с JPG-изображениями;
var imagemin = require("gulp-imagemin"); //сжатие изображений PNG, JPG, GIF и SVG;
var pngquant = require("imagemin-pngquant"); //дополнение к gulp-imagemin для работы с PNG-изображениями;
var debug = require("gulp-debug"); //отладка в терминале;
var minCss = require("gulp-clean-css"); //минификация, оптимизация css
var sass = require('gulp-sass');//компилирует scss/sacss в css
var csscomb = require('gulp-csscomb');//сортирует css
var autoprefixer = require('gulp-autoprefixer');//автопрефексер
var rename = require('gulp-rename');//переменование файлов
var sizereport = require('gulp-sizereport'); // показывает размер файла
var gcmq = require('gulp-group-css-media-queries'); //групирует css медиазапросы
var browsersync = require('browser-sync').create(); //автоперезагрузка страницы после изменений
var notify = require("gulp-notify"); //вывод ошибок;
var plumber = require('gulp-plumber'); //отслеживает ошибки на всё потоке
var rollup = require('gulp-better-rollup');//соединение js
var gif = require('gulp-if');// позволяет задавать условия для выполнения пакетов
var uglify = require('gulp-uglify'); //сжатие js
var jshint = require('gulp-jshint');//стилизация ошибки в js
var cheerio = require('gulp-cheerio');
var svgmin = require('gulp-svgmin');//минификатор svg
var scssimport = require('gulp-sass-glob'); //атоматически прописывет импорт scss
var svgstore = require('gulp-svgstore'); //cоздаёт svg спрайт
var replace = require('gulp-replace');
var w3cjs = require('gulp-w3cjs'); //валидатор html
var htmlmin = require('gulp-htmlmin'); //минификатор html
var strip = require('gulp-strip-comments'); //удаление коментариев html
var zip = require('gulp-zip'); //архиватор
var watch = require('gulp-watch');



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
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('dev/css'))
        .pipe(sizereport())
        .pipe(autoprefixer({browsers: ["last 10 versions"]}))
        .pipe(minCss({
            compatibility: "*",
            level: {1: {specialComments: 0}}
        }))
        .pipe(rename({suffix: ".min"}))
        .pipe(sizereport())
        .pipe(browsersync.stream())
        .pipe(sourcemaps.write('../map/css'))
        .pipe(gulp.dest('dev/css'));
    done()
});

gulp.task('style-prod', function (done) {
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
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gcmq())
        .pipe(csscomb())
        .pipe(gulp.dest("prod/css/"))
        .pipe(sizereport())
        .pipe(autoprefixer({browsers: ["last 10 versions"]}))
        .pipe(minCss({
            compatibility: "*",
            level: {1: {specialComments: 0}}
        }))
        .pipe(rename({suffix: ".min"}))
        .pipe(sizereport())
        .pipe(gulp.dest('prod/css'));
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
        .pipe(sourcemaps.init())
        .pipe(rollup({}, 'iife'))
        .pipe(rename({suffix: ".min"}))
        .pipe(sizereport())
        .pipe(sourcemaps.write('../map/js'))
        .pipe(gulp.dest('dev/js'))
        .pipe(browsersync.reload({stream: true}));
    done()
});

gulp.task('js-prod', function (done) {
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
        .pipe(rollup({}, 'iife'))
        .pipe(gulp.dest("prod/js/"))
        .pipe(sizereport())
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(sizereport())
        .pipe(gulp.dest('prod/js'))
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
    gulp.src('dev/fonts/*')
        .pipe(gulp.dest('prod/fonts'));
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

gulp.task('html', function () {
    return gulp.src('dev/*.html')
        .pipe(w3cjs())
        .on("end", browsersync.reload);
});

gulp.task('html-prod', function () {
    return gulp.src('dev/*.html')
        .pipe(w3cjs())
        .pipe(strip()) //удаление коментариев
        //.pipe(htmlmin({ collapseWhitespace: true })) //раскоментировать если нужно минифицировать html
        .pipe(gulp.dest('prod/'))
        .on("end", browsersync.reload);
});

gulp.task('zip', function (done) {
    gulp.src('prod/**')
        .pipe(zip('project.zip'))
        .pipe(gulp.dest('./'));
    done()
});

//запускать таcк: gulp build --prod
gulp.task('build', gulp.series('clean', 'sprite', 'img', gulp.parallel('style-prod', 'js-prod', 'copy', 'html-prod'), 'zip'));

gulp.task('watches', function (done) {
    gulp.watch(['dev/scss/**/**.*'], gulp.series('style'));
    /*    gulp.watch("dev/img/!**!/!*.{jpg,jpeg,png,gif,svg}", gulp.series('img'));*/
    gulp.watch(['dev/js/**/*.js', '!dev/js/**/*.min.js'], gulp.series('js'));
    gulp.watch('dev/img/sprite/*.svg', gulp.series('sprite'));
 	gulp.watch(['dev/*.html'], gulp.series('html'));
    done()
});

gulp.task('default', gulp.series('style', 'js', 'sprite', 'html', gulp.parallel('watches', 'serve')
));

gulp.task('gulp-uglify', function(done){
    gulp.src('dev/js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
    done()
});