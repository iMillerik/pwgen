module.exports = {
  publicPath: undefined,

  css: {
    sourceMap: true
  },

  pwa: {
    name: 'Password Generator',
    themeColor: '#333333',
    msTileColor: '#333333'
  },

  pages: {
  	index: {
  		template: './src/index.pug',
  		entry: './src/main.js'
  	}
  },

  outputDir: 'docs'
}