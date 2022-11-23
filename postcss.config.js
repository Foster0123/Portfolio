// Common Core NodeJS Modules

// Plugin Modules
import autoprefixer from 'autoprefixer'
import purgeCSSPlugin from '@fullhuman/postcss-purgecss'
import cssnanoPlugin from 'cssnano'
// Source File Paths

const pugSrcCode = ['src/client/views/**/*.pug']

// Configuration Options

const purgeCssOptions = {
  content: pugSrcCode
}

export default {
  plugins: [
    purgeCSSPlugin(purgeCssOptions),
    autoprefixer(),
    cssnanoPlugin()
  ]
}
