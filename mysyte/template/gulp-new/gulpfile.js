var syntax = 'scss'; // Syntax: sass or scss;

var gulp = require('gulp'),
	browsersync = require('browser-sync').create(),
	autoprefixer = require("gulp-autoprefixer"),
	sass = require("gulp-sass"),
	minCss = require("gulp-clean-css"),
	rename = require("gulp-rename"),
	sizereport = require('gulp-sizereport'),
	sourcemaps = require("gulp-sourcemaps"),
	newer = require("gulp-newer"),
	imageminJpegRecompress = require("imagemin-jpeg-recompress"),
	imagemin = require("gulp-imagemin"),
	pngquant = require("imagemin-pngquant"),
	debug = require("gulp-debug"),
	watch = require("gulp-watch"),
	packageJson = require('./package.json'),
	webpack = require('webpack-stream');



gulp.task('default', function () {
	return gulp.src('app/js/main.js')
		.pipe(webpack({
			config: require('./webpack.config.js')
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task("serve", ["styles"], function () {
	browsersync.init({
		server: "app/",
		notify: false,
		open: true,
		cors: true,
		ui: false
	});
});


gulp.task('watch', ['styles', /* 'js', */ 'images', 'serve'], function () {
	gulp.watch('app/' + syntax + '/**/*.' + syntax + '', ['styles']);
	//gulp.watch(['libs/**/*.js', 'app/js/main.js'], ['js']);
	//gulp.watch('app/*.html', browsersync.reload)
	//gulp.watch('img/*', ['img']);
	//watch(["./src/views/**/index.html", "!./src/views/blocks/*.html"], $.gulp.series("html"));
	//watch("./src/styles/**/main.scss", $.gulp.series("styles"));
	gulp.watch(["./app/img/**/*.{jpg,jpeg,png,gif}", "!./app/img/icons/svg/*.svg", "!./app/img/favicons/*.{jpg,jpeg,png,gif}"], ["images"]);
	//watch("./src/img/icons/svg/*.svg", $.gulp.series("iconfont"));
	//watch("./src/js/**/*.js", $.gulp.series("scripts"));
	//res();
});



gulp.task('styles', function () {
	gulp.src("app/scss/style.scss")
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded'
		}).on("error", sass.logError))
		.pipe(autoprefixer({
			browsers: ["last 10 versions"]
		}))
		.pipe(gulp.dest("app/css/")) //не минифицированая версия css
		.pipe(minCss({
			compatibility: "*",
			level: {
				1: {
					specialComments: 0
				}
			}
		}))
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(sourcemaps.write("./maps/"))
		.pipe(gulp.dest("app/css/"))
		.pipe(browsersync.reload({
			stream: true
		}));
	gulp.src("app/css/*.css")
		.pipe(sizereport())

})

gulp.task("images", function () {
	return gulp.src(["./app/img/**/*.{jpg,jpeg,png,gif,svg}", "!./app/img/svg/icons/*", "!./app/img/favicons/*.{jpg,jpeg,png,gif}"])
		.pipe(newer("./build/img/"))
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
		.pipe(gulp.dest("./build/img/"))
		.pipe(debug({
			"title": "images"
		}))
		.on("end", browsersync.reload);
});

gulp.task("libs", function () {
	var modules = Object.keys(packageJson.dependencies);
	var moduleFiles = modules.map(function (module) {
		return "./node_modules/" + module + "/**/*.{js,css}";
	});
	return gulp.src(moduleFiles, {
			base: "./node_modules/"
		})
		.pipe(gulp.dest("./app/libs/"))
		.pipe(gulp.src(["./app/libs/**/*.css", "./app/libs/**/*.js"]))
		.pipe(gulp.dest("./dest/libs/"));
});