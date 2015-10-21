
var gulp = require('gulp');
var	connect = require('gulp-connect');
var	livereload = require('gulp-livereload');
var	concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');  //
var rev = require('gulp-rev-append');   //cashing
var browserSync = require('browser-sync');


var source = './src';
var build = './build';

gulp.task('styles', function () {
  return gulp.src(source + '/css/*.css')
		.pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest(build + '/css/'));

});

gulp.task('uncss', function () {
    return gulp.src(source + '/css/style.css')
        .pipe(uncss({
            html: [ 'http://localhost/landing-page/src/index.html'
        			]
        }))
        .pipe(gulp.dest('./'));
});



gulp.task('rev', function() {
  gulp.src(source + '/*.php')
    .pipe(rev())
    .pipe(gulp.dest(build));
});


gulp.task('scripts', function() {
  return gulp.src(source + '/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(build +'/js/'));
});

gulp.task('img-min', function () {
  return gulp.src(source + '/images/**/*.*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [imageminPngquant()]
    }))
  	.pipe(imageminPngquant({quality: '65-80', speed: 4})())
    .pipe(gulp.dest(build + '/images/'));
});



gulp.task('watch', function() {
  gulp.watch(source + '/css/*.css', ['styles']);
  gulp.watch(source + '/js/*.js', ['scripts']);
  gulp.watch(source + '/images/**/*.*', ['img-min']);
});

gulp.task('builder', ['scripts', 'styles', 'img-min', 'rev']);

gulp.task('default',['builder', 'watch']);
