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
var svgstore = require("gulp-svgstore");
var path = require('path');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {
	return gulp.src(['source/script/jquery-3.3.1.min.js', 'source/script/script.js'])
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('source/script'));
});

gulp.task('jsmin', function () {
	gulp.src('source/script/scripts.js')
		.pipe(uglify())
		.pipe(gulp.dest('sorce/script'))
});

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
	gulp.src('css/*.css')
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


/*------------Изображения--------------*/
gulp.task('tinypng', function () {
	gulp.src('source/img/*.{png,jpg,jpeg}')
		.pipe(sizereport())
		.pipe(imagemin('u4HyNez6ZyoLjUt5o7dF_fAV0p4ptczJ'))
		.pipe(sizereport())
		.pipe(gulp.dest('source/img'))

});

gulp.task('svgmin', function () {
	return gulp.src('source/img/*.svg')
		.pipe(sizereport())
		.pipe(svgo())
		.pipe(sizereport())
		.pipe(gulp.dest('source/img'));
});
gulp.task("sprite", function () {
	return gulp
		.src('source/img/*.svg')
		.pipe(svgmin(function (file) {
			var prefix = path.basename(file.relative, path.extname(file.relative));
			return {
				plugins: [{
					cleanupIDs: {
						prefix: prefix + '-',
						minify: true
					}
                }]
			}
		}))
		.pipe(svgstore())
		.pipe(rename("sprite.svg"))
		.pipe(gulp.dest('source/img'));
});


gulp.task('webp', function () {
	gulp.src('source/img/*.{jpeg,jpg,png}')
		.pipe(sizereport())
		.pipe(webp())
		.pipe(sizereport())
		.pipe(gulp.dest('source/img'))
});

gulp.task('imgsize', function () {
	return gulp.src('source/img/*.{svg,jpeg,webp,png,jpg}')
		.pipe(sizereport())
})



/*----------------------------------------------*/
/*-------------build-------------------------*/
gulp.task("style-build", function () {
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
		.pipe(gulp.dest('build/css'))
	gulp.src('css/*.css')
		.pipe(sizereport());

});

gulp.task('svgmin-build', function () {
	return gulp.src('build/img/*.svg')
		.pipe(sizereport())
		.pipe(svgo())
		.pipe(sizereport())
		.pipe(gulp.dest('build/img'));
});

gulp.task('scripts-build', function () {
	return gulp.src(['source/script/jquery-3.3.1.min.js', 'source/script/script.js'])
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('build/script'));
});

gulp.task('jsmin', function () {
	gulp.src('build/script/scripts.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/script'))
});

gulp.task("clean", function () {
	return del("build");
});

gulp.task("copy", function () {
	return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
	"source/less/**",
    "source/*.html"
 ], {
			base: "source"
		})
		.pipe(gulp.dest("build"));
});
gulp.task('build', function (callback) {
	run("clean", "style-build", "copy", "svgmin-build", "scripts", "scripts-build",
		callback)
});
