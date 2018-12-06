let gulp = require("gulp");
let gulpBrowser = require("gulp-browser");

gulp.task("build", function() {
  let stream = gulp
    .src("./src/main.js")
    .pipe(gulpBrowser.browserify())
    .pipe(gulp.dest("./dist/"));
  return stream;
});

gulp.task("watch", function() {
  gulp.watch(["src/**/*.js"], ["build"]);
});

gulp.task('default', ['build', 'watch']);