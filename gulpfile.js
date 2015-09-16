// Include gulp
var gulp = require('gulp');
var wiredep = require('wiredep');
// Define base folders
var src = 'app/';
var dest = 'build/';
// Include plugins
var plugins = require("gulp-load-plugins")({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});
// Concatenate & Minify JS
gulp.task('scripts', function () {
  return gulp.src(src + 'js/**/*.js')
    .pipe(plugins.concat('app.js'))
    .pipe(plugins.rename({ suffix: '.min' }))
    //.pipe(plugins.uglify())
    .pipe(gulp.dest(dest + 'js'));
});
gulp.task('images', function () {
  return gulp.src(src + 'images/**/*')
    .pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(dest + 'img'));
});
// Watch for changes in files
gulp.task('watch', function () {
  // Watch .js files
  gulp.watch(src + 'js/*.js', ['scripts']);
  // Watch image files
  gulp.watch(src + 'images/**/*', ['images']);
  // Watch whole dir
  gulp.watch(src + '/**/*.*', ['build']);
}); 
//webserver
gulp.task('webserver', function () {
  gulp.src(src)
    .pipe(plugins.serverLivereload({
      livereload: true,
      open: true
    }));
});

//webserver
gulp.task('webserver-build', function () {
  gulp.src(dest)
    .pipe(plugins.serverLivereload({
      livereload: true,
      open: true
    }));
});

gulp.task('vendor-scripts', function () {
  gulp.src(wiredep().js)
    .pipe(gulp.dest(dest + 'vendor'));
});

gulp.task('vendor-css', function () {
  gulp.src(wiredep().css)
    .pipe(gulp.dest(dest + 'vendor'));
});

gulp.task('my-files', function () {
  gulp.src(['app/modules/**/*.js', 'app/modules/**/*.html'])
    .pipe(gulp.dest('./build/modules'));
  gulp.src(['app/content/**/*.*'])
    .pipe(gulp.dest('./build/content'));
  //gulp.src(['app/js/**/*.js'])
  //  .pipe(gulp.dest('./build/js'));

});

gulp.task('index', function () {
  gulp.src('app/index.html')
    .pipe(wiredep.stream({
      fileTypes: {
        html: {
          replace: {
            js: function (filePath) {
              return '<script src="' + 'vendor/' + filePath.split('/').pop() + '"></script>';
            },
            css: function (filePath) {
              return '<link rel="stylesheet" href="' + 'vendor/' + filePath.split('/').pop() + '"/>';
            }
          }
        }
      }
    }))
    .pipe(plugins.inject(
      gulp.src([dest + 'content/**/*.css'], { read: false }), {
        addRootSlash: false,
        transform: function (filePath, file, i, length) {
          return '<link rel="stylesheet" href="' + filePath.replace('build/', '') + '"/>';
        }
      }))
    .pipe(plugins.inject(
      gulp.src([dest + 'modules/**/*.js'], { read: true }).pipe(plugins.angularFilesort()), {
        name:'modules',
        addRootSlash: false,
        transform: function (filePath, file, i, length) {
          return '<script src="' + filePath.replace('build/', '') + '"></script>';
        }
      }))
    .pipe(plugins.inject(
      gulp.src([dest + 'js/**/*.js'], { read: false }), {
        name:'main',
        addRootSlash: false,
        transform: function (filePath, file, i, length) {
          return '<script src="' + filePath.replace('build/', '') + '"></script>';
        }
      }))
    .pipe(gulp.dest(dest));
});

// Default Task
gulp.task('build', ['index', 'scripts', 'vendor-scripts', 'vendor-css', 'my-files'])
gulp.task('default', ['scripts', 'images', 'watch', 'webserver']);
gulp.task('browse', ['build', 'watch', 'webserver-build']);
