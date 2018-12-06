const gulp = require("gulp");

const browserify = require("browserify");
const source = require('vinyl-source-stream');
const tsify = require("tsify");

gulp.task("build", function(){
  return browserify({
    baseDir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache:{}
  })
    .plugin(tsify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest("dist"));
});


gulp.task("watch", function() {
  gulp.watch(["src/**/*.ts"], ["build"]);
});

gulp.task('default', ['build', 'watch']);