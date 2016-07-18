var path = require('path')
var webpack = require('webpack')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: { path: __dirname, filename: 'bundle.js' },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
