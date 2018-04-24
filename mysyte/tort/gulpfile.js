"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var cssmin = require('gulp-csso');
var rename = require("gulp-rename");
var sizereport = require('gulp-sizereport');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var crass = require('gulp-crass');
var run = require('run-sequence');
var imagemin = require('gulp-tinypng');
var del = require('del');
var csscomb = require('gulp-csscombx');
var svgo = require('gulp-svgo');
var webp = require('gulp-webp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');


gulp.task("style", function () {
	gulp.src("source/less/style.less")
		.pipe(plumber())
		.pipe(less())
		.pipe(csscomb())
		.pipe(gulp.dest("source/css"))
		.pipe(server.stream())
		.pipe(postcss([
      autoprefixer()
    ]))
		.pipe(cssmin())
		.pipe(rename("style-min.css"))
		.pipe(gulp.dest('source/css'))
	gulp.src('source/css/*.css')
		.pipe(sizereport());

});

gulp.task("serve", ["style"], function () {
	server.init({
		server: "source/",
		notify: false,
		open: true,
		cors: true,
		ui: false
	});

	gulp.watch("source/less/**/*.less", ["style"]);
	gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("sprite", function () {
	return gulp.src("source/img/changingSvg/*.svg")
		.pipe(svgmin({
			plugins: [{
				moveElemsAttrsToGroup: true
        }]
		}))
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename("sprite.svg"))
		.pipe(gulp.dest("source/img"));
});

gulp.task("cssmin", function () {
	gulp.src("source/css/style.css")
		.pipe(cssmin())
		.pipe(rename("style-min.css"))
		.pipe(gulp.dest('source/css'))
})

gulp.task('cssmin2', function () {
	return gulp.src('source/css/style.css')
		.pipe(crass())
		.pipe(rename("style-min.css"))
		.pipe(gulp.dest('build/'));;
});
/*------------Изображения--------------*/
gulp.task('tinypng', function () {
	gulp.src('source/img/*.{png,jpg,jpeg}')
		.pipe(sizereport())
		.pipe(imagemin('u4HyNez6ZyoLjUt5o7dF_fAV0p4ptczJ'))
		.pipe(sizereport())
		.pipe(gulp.dest('source/img'))

});

gulp.task('svgoptim', function () {
	return gulp.src('source/img/*.svg')
		.pipe(sizereport())
		.pipe(svgo())
		.pipe(sizereport())
		.pipe(gulp.dest('source/img'));
});

gulp.task('imgsize', function () {
	return gulp.src('source/img/*.{svg,jpeg,webp,png,jpg}')
		.pipe(sizereport())
})

gulp.task('webp', function () {
	gulp.src('source/img/*.{jpeg,jpg,png}')
		.pipe(sizereport())
		.pipe(webp({
			quality: 90
		}))
		.pipe(sizereport())
		.pipe(gulp.dest('source/img'))
});

/*----------------------------------------------*/

gulp.task("clean", function () {
	return del("build");
});

gulp.task("copy", function () {
	return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
	"source/css/**",
	"source/mywork/**",
	"source/script/**",
    "source/*.html"
 ], {
			base: "source"
		})
		.pipe(gulp.dest("../"));
});

gulp.task('scripts', function () {
	return gulp.src(['source/script/jquery-3.3.1.min.js', 'source/script/script.js'])
		.pipe(sizereport())
		.pipe(concat('script-min.js'))
		.pipe(sizereport())
		.pipe(minify())
		.pipe(sizereport())
		.pipe(gulp.dest('source/script'));

});

gulp.task('build', function (callback) {
	run("clean", "style", "copy", "tinypng", callback)
});
