const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
  },//el archivo que quiero transformar
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]_bundles.js",
  },
  resolve: {//para poner extensiones
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin(
      {
        inject: true,// ir a html e injectar value
        template: 'public/index.html',// html principal
        filename: 'index.html',// nombre de dónde se encuentra el html que como base
      },
    ),
    new CopyWebpackPlugin({
      patterns: [{
        from: './src/styles/styles.css',
        to: 'assets',
      }],
    }),
  ]
}
