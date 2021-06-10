"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();
const del = require("del");
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const includer = require("gulp-html-ssi");

// A simple task to reload the page
async function reload(done) {
  browserSync.reload();
  done();
}

// Clean assets
async function clean() {
  return del(["./dist/"]);
}

// Optimize Images
async function images() {
  return gulp
    .src("./markup/assets/img/**/*")
    .pipe(gulp.dest("./dist/assets/img/"))
}

// CSS task
async function css() {
  return gulp
    .src(["./markup/assets/css/**/*.+(scss|sass|css)", "!./markup/assets/css/import/**/*"])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compact", indentType: "tab", indentWidth: 1, precision: 2, sourceComments: false }).on("error", sass.logError))
    .pipe(postcss([autoprefixer(["last 2 versions", "ie <= 9"])]))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./dist/assets/css/"))
    .pipe(browserSync.stream());
}

// HTML SSI(Server Side Include)
async function htmlssi() {
    return gulp
        .src(["./markup/html/**/*", "./markup/coding_list.html", "!./markup/html/include"])
        .pipe(includer())
        .pipe(gulp.dest("./dist/"))
}

// Copying fonts
async function fonts() {
  return gulp
      .src("./markup/assets/fonts/**/*")
      .pipe(gulp.dest("./dist/assets/fonts/"))
}

// Copying fonts
async function downfile() {
  return gulp
      .src("./markup/assets/downfile/**/*")
      .pipe(gulp.dest("./dist/assets/downfile/"))
}

// Transpile, concatenate and minify scripts
async function scripts() {
  return (
    gulp
      .src(["./markup/assets/js/**/*"])
      .pipe(plumber())
      .pipe(gulp.dest("./dist/assets/js/"))
      .pipe(browserSync.stream())
  );
}

// Watch files
async function watchFiles() {
  browserSync.init({
        server: {
          baseDir: "./dist/"
        },
        port: 3005
      });
  gulp.watch("./markup/assets/css/**/*", css);
  gulp.watch("./markup/assets/js/**/*", gulp.series(scripts));
  gulp.watch("./markup/**/*.html").on('change', gulp.series(htmlssi, reload));
  gulp.watch("./markup/assets/img/**/*", gulp.series(images, reload));
  gulp.watch("./markup/html/_CODING_LIST_/**/*", gulp.series(htmlssi, reload));
}

// define complex tasks
const js = gulp.series(scripts);
const build = gulp.series(clean, htmlssi, gulp.parallel(css, images, js, fonts, downfile));
const watch = gulp.parallel(build, watchFiles);

// export tasks
exports.images = images;
exports.fonts = fonts;
exports.downfile = downfile;
exports.css = css;
exports.js = js;
exports.htmlssi = htmlssi;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
exports.reload = reload;
