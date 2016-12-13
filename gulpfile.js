var gulp = require("gulp");
var plugins = require("gulp-load-plugins")();

gulp.task("js", function() {
  return gulp.src("./javatest.js")
    .pipe(plugins.uglify())
    .pipe(gulp.dest("./js/src"));
});

gulp.task("watch", function() {
  gulp.watch("./javatest.js", ["js"]);
});
