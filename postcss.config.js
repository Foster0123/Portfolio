// Common Core NodeJS Modules

// Plugin Modules

const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssSorting = require('postcss-sorting')

// Source File Paths

const htmlSrcCode = ['app/templates/**/*.html']
const cssSrcFiles = "app/static/css/*.css"

// Configuration Options

const purgeCssOptions = {
  content: htmlSrcCode
}

const postcssSortingOptions = {
  order: [
    'custom-properties',
    'dollar-variables',
    'declarations',
    'at-rules',
    'rules'
  ],
  'properties-order': 'alphabetical',
  'unspecified-properties-position': 'bottom'
}

const postcssReporterOptions = {
  clearReportedMessages: true
}

// const opts = {
//   browsers: ['ie >= 8', '> 1%'], // an autoprefixer-like array of browsers.
//   ignore: ['rem'], // an optional array of features to ignore
//   ignoreFiles: ['**/normalize.css'], // an optional array of file globs to match against original source file path, to ignore
//   onFeatureUsage: function (usageInfo) {}
// }

// usageInfo = {
//   message:
//     '<input source>: line <l>, col <c> - CSS3 Gradients not supported by: IE (8)',
//   feature: 'css-gradients', // slug identifying a caniuse-db feature
//   featureData: {
//     title: 'CSS Gradients',
//     missing: 'IE (8)', // string of browsers missing support for this feature.
//     missingData: {
//       // map of browser -> version -> (lack of)support code
//       ie: { 8: 'n' }
//     },
//     caniuseData: {
//       // data from caniuse-db/features-json/[feature].json }
//     },
//     usage: {} //the postcss node where that feature is being used.
//   }
// }


module.exports = {
  plugins: [
    autoprefixer({
      cascade: true
    }),
    purgecss(purgeCssOptions),
    postcssSorting(postcssSortingOptions)
  ]
}
