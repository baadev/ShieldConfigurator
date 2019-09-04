module.exports = {
  lintOnSave: true,
  outputDir: './dist/',
  assetsDir: './',
  runtimeCompiler: true,

  css: {
    sourceMap: true,
    extract: false
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/shield/configurator/'
    : '/'
}