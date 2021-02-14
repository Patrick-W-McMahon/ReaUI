var path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = ['source-map'].map((devtool) => ({
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'reax-ui.js',
    library: 'reax-ui'
  },
  resolve: {
    extensions: ['.es6', '.js', '.jsx'],
    modules: ['node_modules']
  },
  externals: {},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /(node_modules|bower_components|build)/,
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000",
        exclude: /(node_modules|bower_components|build)/,
      }
    ]
  },
  externals: {
    'react': 'commonjs react'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  devtool,
  optimization: {
    runtimeChunk: true,
  },
}));