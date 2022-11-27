// Common Core NodeJS Modules

// Plugin Modules
import autoprefixer from 'autoprefixer'
import purgeCSSPlugin from '@fullhuman/postcss-purgecss'
import cssnanoPlugin from 'cssnano'
// Source File Paths

const pugSrcCode = ['src/client/views/**/*.pug']

// Configuration Options

const purgeCssOptions = {
  content: pugSrcCode,
  safelist:[
    "display", 
    "no-display", 
    "theme", 
    "dark-theme", 
    "light-theme"
  ],
  keyframes:true
}

export default {
  plugins: [
    purgeCSSPlugin(purgeCssOptions),
    autoprefixer(),
    cssnanoPlugin()
  ]
}
