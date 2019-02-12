const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'my/index.js'),
  output: {
    path: path.resolve(__dirname, 'my'),
    filename: 'script.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'my'),
    port: '9190',
    open: true
  }
}
