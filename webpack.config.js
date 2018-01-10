const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./src/main.js`,
  plugins: [
    new HtmlPlugin({ template: `./src/index.html` }),
    new HtmlPlugin({ template: `./src/tyler.html`, filename: `second-file.html` }),
    new HtmlPlugin({ template: `./src/gymnast.html`, filename: `third-file.html` }),
    new CopyWebpackPlugin([
      {from: 'src/images', to: 'images'}
     ])
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
            attrs: false
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1, }
          },
          { loader: 'postcss-loader' }
        ]
      }     
    ]
  }
};