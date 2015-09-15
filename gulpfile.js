// Include gulp
var gulp = require('gulp');
 // Define base folders
var src = 'app/';
var dest = 'build/';
 // Include plugins
var plugins = require("gulp-load-plugins")({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});
 // Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(src + 'js/*.js')
      .pipe(plugins.concat('main.js'))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(dest + 'js'));
});
 gulp.task('images', function() {
  return gulp.src(src + 'images/**/*')
    .pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(dest + 'img'));
});
 // Watch for changes in files
gulp.task('watch', function() {
   // Watch .js files
  gulp.watch(src + 'js/*.js', ['scripts']);
   // Watch image files
  gulp.watch(src + 'images/**/*', ['images']);
 }); 
 //webserver
 gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(plugins.serverLivereload({
      livereload: true,
      open: true
    }));
});
 // Default Task
gulp.task('default', ['scripts', 'images', 'watch','webserver']);