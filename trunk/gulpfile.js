var gulp = require('gulp')
var gutil = require('gulp-util')
var uglify = require('gulp-uglify')
var watchPath = require('gulp-watch-path')
var combiner = require('stream-combiner2')
var sourcemaps = require('gulp-sourcemaps')
var minifycss = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var less = require('gulp-less')
var sass = require('gulp-ruby-sass')
var imagemin = require('gulp-imagemin')

var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');

var handleError = function (err) {
    var colors = gutil.colors;
    console.log('\n')
    gutil.log(colors.red('Error!'))
    gutil.log('fileName: ' + colors.red(err.fileName))
    gutil.log('lineNumber: ' + colors.red(err.lineNumber))
    gutil.log('message: ' + err.message)
    gutil.log('plugin: ' + colors.yellow(err.plugin))
}

gulp.task('watchjs', function () {
    gulp.watch('application/Html/Public/js/**/*.js', function (event) {
        var paths = watchPath(event, 'application/Html/Public/', 'application/Html/Dist/')
        /*
        paths
            { srcPath: 'src/js/log.js',
              srcDir: 'src/js/',
              distPath: 'dist/js/log.js',
              distDir: 'dist/js/',
              srcFilename: 'log.js',
              distFilename: 'log.js' }
        */
        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)

        var combined = combiner.obj([
            gulp.src(paths.srcPath),
            sourcemaps.init(),
            uglify(),
            sourcemaps.write('./'),
            gulp.dest(paths.distDir)
        ])

        combined.on('error', handleError)
    })
})

gulp.task('uglifyjs', function () {
    var combined = combiner.obj([
        gulp.src('application/Html/Public/js/**/*.js'),
        sourcemaps.init(),
        uglify(),
        sourcemaps.write('./'),
        gulp.dest('application/Html/Dist/js/')
    ])
    combined.on('error', handleError)
})


gulp.task('watchcss', function () {
    gulp.watch('application/Html/Public/css/**/*.css', function (event) {
        var paths = watchPath(event, 'application/Html/Public/', 'application/Html/Dist/')

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)

        gulp.src(paths.srcPath)
            .pipe(sourcemaps.init())
            .pipe(autoprefixer({
              browsers: 'last 2 versions'
            }))
            .pipe(minifycss())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(paths.distDir))
    })
})

gulp.task('minifycss', function () {
    gulp.src('application/Html/Public/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
          browsers: 'last 2 versions'
        }))
        .pipe(minifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('application/Html/Dist/css/'))
})

gulp.task('watchless', function () {
    gulp.watch('application/Html/Public/less/**/*.less', function (event) {
        var paths = watchPath(event, 'application/Html/Public/less/', 'application/Html/Dist/css/')

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)
        var combined = combiner.obj([
            gulp.src(paths.srcPath),
            sourcemaps.init(),
            autoprefixer({
              browsers: 'last 2 versions'
            }),
            less(),
            minifycss(),
            sourcemaps.write('./'),
            gulp.dest(paths.distDir)
        ])
        combined.on('error', handleError)
    })
})

gulp.task('lesscss', function () {
    var combined = combiner.obj([
            gulp.src('application/Html/Public/less/**/*.less'),
            sourcemaps.init(),
            autoprefixer({
              browsers: 'last 2 versions'
            }),
            less(),
            minifycss(),
            sourcemaps.write('./'),
            gulp.dest('application/Html/Dist/css/')
        ])
    combined.on('error', handleError)
})


gulp.task('watchsass',function () {
    gulp.watch('application/Html/Public/sass/**/*', function (event) {
        var paths = watchPath(event, 'application/Html/Public/sass/', 'application/Html/Dist/css/')

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)
        sass(paths.srcPath)
            .on('error', function (err) {
                console.error('Error!', err.message);
            })
            .pipe(sourcemaps.init())
            .pipe(minifycss())
            .pipe(autoprefixer({
              browsers: 'last 2 versions'
            }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(paths.distDir))
    })
})

gulp.task('sasscss', function () {
        sass('application/Html/Public/sass/')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.init())
        .pipe(minifycss())
        .pipe(autoprefixer({
          browsers: 'last 2 versions'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('application/Html/Dist/css'))
})

gulp.task('watchimage', function () {
    gulp.watch('application/Html/Public/images/**/*', function (event) {
        var paths = watchPath(event,'application/Html/Public/','application/Html/Dist/')

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)

        gulp.src(paths.srcPath)
            .pipe(imagemin({
                progressive: true
            }))
            .pipe(gulp.dest(paths.distDir))
    })
})

gulp.task('image', function () {
    gulp.src('application/Html/Public/images/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('application/Html/Dist/images'))
})

gulp.task('watchcopy', function () {
    gulp.watch('application/Html/Public/fonts/**/*', function (event) {
        var paths = watchPath(event,'application/Html/Public/', 'application/Html/Dist/')

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)

        gulp.src(paths.srcPath)
            .pipe(gulp.dest(paths.distDir))
    })
})

gulp.task('copy', function () {
    gulp.src('application/Html/Public/fonts/**/*')
        .pipe(gulp.dest('application/Html/Dist/fonts/'))
})

gulp.task('watchtemplates', function () {
    gulp.watch('application/Html/Public/templates/**/*', function (event) {
        var paths = watchPath(event, 'application/Html/Public/', 'application/Html/Dist/')

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)

        var combined = combiner.obj([
            gulp.src(paths.srcPath),
            handlebars({
              // 3.0.1
              handlebars: require('handlebars')
            }),
            wrap('Handlebars.template(<%= contents %>)'),
            declare({
              namespace: 'S.templates',
              noRedeclare: true
            }),
            gulp.dest(paths.distDir)
        ])
        combined.on('error', handleError)
    })
})

gulp.task('templates', function () {
        gulp.src('application/Html/Public/templates/**/*')
        .pipe(handlebars({
          // 3.0.1
          handlebars: require('handlebars')
        }))
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
          namespace: 'S.templates',
          noRedeclare: true
        }))
        .pipe(gulp.dest('application/Html/Dist/templates'))
})


gulp.task('default', [
    // build
    'uglifyjs', 'minifycss', 'lesscss', 'sasscss', 'image', 'copy', 'templates',
    // watch
    'watchjs', 'watchcss', 'watchless', 'watchsass', 'watchimage', 'watchcopy', 'watchtemplates'
    ]
)
