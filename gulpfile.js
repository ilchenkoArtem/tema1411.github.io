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

gulp.task("style", function () {
	gulp.src("source/less/style.less")
		.pipe(plumber())
		.pipe(less())
		.pipe(postcss([
      autoprefixer()
    ]))
		.pipe(gulp.dest("source/css"))
		.pipe(server.stream())
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
