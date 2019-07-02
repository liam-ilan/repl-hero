const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    contentBase: __dirname,
    watchContentBase: true,
    writeToDisk: true
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'js')
  }
};