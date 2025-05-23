const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './handler.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'], },
  output: {
    filename: 'handler.js',
    path: path.join(__dirname, '.webpack'),
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals(),
  ],
  plugins: [
    new CopyPlugin({
      patterns: [
        'src/**',
      ]
    }),
    new ForkTsCheckerWebpackPlugin()
  ],

};


