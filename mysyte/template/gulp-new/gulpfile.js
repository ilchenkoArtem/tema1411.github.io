var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	autoprefixer = require("gulp-autoprefixer"),
	sass = require("gulp-sass"),
	plumber = require("gulp-plumber"),
	minCss = require("gulp-clean-css"),
	rename = require("gulp-rename"),
	sizeReport = require('gulp-sizereport');



gulp.task("serve", ["styles"], function () {
	browserSync.init({
		server: "app/",
		notify: false,
		open: true,
		cors: true,
		ui: false
	});

	gulp.task('watch', ['styles', 'js', 'serve'], function () {
		gulp.watch('app/' + scss + '/**/*.' + scss + '', ['styles']);
		gulp.watch(['libs/**/*.js', 'app/js/main.js'], ['js']);
		gulp.watch('app/*.html', browserSync.reload)
		gulp.watch('img/*', ['img']);
		//watch(["./src/views/**/index.html", "!./src/views/blocks/*.html"], $.gulp.series("html"));
		//watch("./src/styles/**/main.scss", $.gulp.series("styles"));
		//watch(["./src/img/**/*.{jpg,jpeg,png,gif}", "!./src/img/icons/svg/*.svg", "!./src/img/favicons/*.{jpg,jpeg,png,gif}"], $.gulp.series("images"));
		//watch("./src/img/icons/svg/*.svg", $.gulp.series("iconfont"));
		//watch("./src/js/**/*.js", $.gulp.series("scripts"));
		//res();
	});
});

gulp.task('styles', function () {
	return gulp.src("app/scss/style.scss")
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ["last 10 versions"]
		}))
		.pipe(sizeReport())
		//.pipe(gulp.dest("build/css/")) //не минифицированая версия css
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
		.pipe(sizeReport())
		.pipe(plumber.stop())
		.pipe(sourcemaps.write("./maps/"))
		.pipe(gulp.dest("app/css/"))
		.on("end", browserSync.reload);
})