// Import Modules & Plugins

const gulp = require('gulp')
const postcss = require('gulp-postcss')
const less = require('gulp-less')
const sourceMap = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const mergeStream = require('merge-stream')
const streamCombiner = require('stream-combiner2')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const cssnano = require('cssnano')
const gulpESLintNew = require('gulp-eslint-new')
const prettier = require('gulp-prettier')
const compressImages = require('compress-images')
const copy = require('gulp-copy')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

// File Paths

// Source Files
const lessFilesSrc = 'app/assets/less/**/*.less'
const lessEntryFile = 'app/assets/less/main.less'
const jsFilesSrc = 'app/assets/js/modules/*.js'
const jsEntryFile = 'app/assets/js/main.js'
const jsConcatedFile = 'app/assets/js/'
const imgFilesSrc = 'app/assets/img/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}'
const publicFolder = 'app/assets/public/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}'
const staticImages = [
  'app/assets/public/*.ico',
  'app/assets/public/*.txt',
  'app/assets/public/*.webmanifest'
]

// Sourcemap Files
const sourceMapFilesDest_Dev = './../maps/'
const sourceMapFilesDest_Production = './../maps/'

// Destination
const lessFileDest = 'app/static/css/'
const jsFilesDest = 'app/static/js/'
const imgFilesDest = 'app/static/img/'
const publicDirDest = 'app/static/public/'

// HTML Configurations

// CSS & Pre-Processor Configurations

// Pre-Processor & CSS Configurations
const compileLess = async () => {
  return streamCombiner.obj([
    gulp
      .src(lessEntryFile)
      .pipe(sourceMap.init())
      .pipe(less())
      .pipe(postcss())
      .pipe(sourceMap.write('/'))
      .pipe(gulp.dest(lessFileDest))
  ]).on('error', console.error.bind(console));
}
// JavaScript Configurations

const concatJS = async () => {
  var jsPluginsOptions = [
    (uglifyOptions = {
      compress: true,
      mangle: false
    })
  ]
  return gulp
    .src(jsFilesSrc)
    .pipe(sourceMap.init())
    .pipe(concat('main.js'))
    .pipe(uglify(jsPluginsOptions[0]))
    .pipe(sourceMap.write('/'))
    .pipe(gulp.dest(jsFilesDest))
}
// Images & Other Assets Configurations
const optimizeImages = async () => {
  compressImages(
    `${imgFilesSrc}`,
    `${imgFilesDest}`,
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
    { png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] } },
    { svg: { engine: 'svgo', command: '--multipass' } },
    {
      gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] }
    },
    function (error, completed, statistic) {
      console.log('-------------')
      console.log(error)
      console.log(completed)
      console.log(statistic)
      console.log('-------------')
    }
  )
}

const publicDirImage = async () => {
  compressImages(
    `${publicFolder}`,
    `${publicDirDest}`,
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
    { png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] } },
    { svg: { engine: 'svgo', command: '--multipass' } },
    {
      gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] }
    },
    function (error, completed, statistic) {
      console.log('-------------')
      console.log(error)
      console.log(completed)
      console.log(statistic)
      console.log('-------------')
    }
  )
}

// Watch For File Changes
const watchFile = async () => {
  gulp.watch(lessFilesSrc, compileLess)
  gulp.watch(jsFilesSrc, concatJS)
}
// Creates A Fully Optimized Production Build
const buildAssets = async () => {
  var postcssPlugins = [
    purgecss({
      content: ['app/templates/**/*.html']
    }),
    autoprefixer(),
    cssnano({
      preset: 'default'
    })
  ]
  var jsPluginsOptions = [
    (uglifyOptions = {
      compress: true,
      mangle: false
    })
  ]
  return mergeStream(
    // Pre Processor & CSS Build + Optimization

    gulp
      .src(lessEntryFile)
      .pipe(sourceMap.init())
      .pipe(less())
      .pipe(prettier())
      .pipe(postcss(postcssPlugins))
      .pipe(sourceMap.write(sourceMapFilesDest_Production))
      .pipe(gulp.dest(lessFileDest)),

    // JavaScript Build + Optimization

    gulp
      .src(jsEntryFile)
      .pipe(sourceMap.init())
      .pipe(gulpESLintNew({ fix: true }))
      .pipe(gulpESLintNew.fix())
      .pipe(gulpESLintNew.format())
      .pipe(gulpESLintNew.failAfterError())
      .pipe(babel())
      .pipe(uglify(jsPluginsOptions[0]))
      .pipe(sourceMap.write(sourceMapFilesDest_Production))
      .pipe(gulp.dest(jsFilesDest)),

    // Image Build + Optimization
    // Copy Assets
    gulp.src(staticImages).pipe(copy('')).pipe(gulp.dest(publicDirDest))
  )
}

// Task Configurations

exports.watch = watchFile
exports.build = buildAssets
exports.imgbuild = gulp.series(optimizeImages, publicDirImage)
