var syntax = 'scss'; // Syntax: sass or scss;

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require("gulp-notify"),
    sizereport = require('gulp-sizereport'),
    rsync = require('gulp-rsync'),
    webp = require('gulp-webp'),
    imagemin = require('gulp-tinypng'),
    svgmin = require('gulp-svgmin');

gulp.task("serve", ["styles"], function () {
    browserSync.init({
        server: "app/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });
});

gulp.task('styles', function () {
    return gulp.src("app/scss/style.scss")
        .pipe(sass({outputStyle: 'expanded'}).on("error", sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleancss({level: {1: {specialComments: 0}}})) // Opt., comment out when debugging
        .pipe(sizereport())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());

});

gulp.task('js', function () {
    gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/slick-carousel/slick/slick.js',
        'app/libs/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',

        'app/js/main.js' // Always at the end
    ])
        .pipe(concat('scripts.min.js'))
        //.pipe(uglify()) // Mifify js (opt.)
        .pipe(gulp.dest('app/js'))
        .pipe(sizereport())
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('rsync', function () {
    return gulp.src('app/**')
        .pipe(rsync({
            root: 'app/',
            hostname: 'username@yousite.com',
            destination: 'yousite/public_html/',
            // include: ['*.htaccess'], // Includes files to deploy
            exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
            recursive: true,
            archive: true,
            silent: false,
            compress: true
        }))
});

gulp.task('watch', ['styles', 'js', 'serve'], function () {
    gulp.watch('app/' + syntax + '/**/*.' + syntax + '', ['styles']);
    gulp.watch(['libs/**/*.js', 'app/js/main.js'], ['js']);
    gulp.watch('app/*.html', browserSync.reload)
});

gulp.task('default', ['watch']);

gulp.task('webp', function () {
    gulp.src('app/img/*.{jpeg,jpg,png}')
        .pipe(sizereport())
        .pipe(webp({
            quality: 90
        }))
        .pipe(sizereport())
        .pipe(gulp.dest('app/img'))
});

gulp.task('tinypng', function () {
    gulp.src('app/img/*.{png,jpg,jpeg}')
        .pipe(sizereport())
        .pipe(imagemin('u4HyNez6ZyoLjUt5o7dF_fAV0p4ptczJ'))
        .pipe(sizereport())
        .pipe(gulp.dest('app/img'))
});

