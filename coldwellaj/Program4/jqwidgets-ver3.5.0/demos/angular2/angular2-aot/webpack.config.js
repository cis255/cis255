'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: {
      'main': './app/main.ts',
  },

  output: {
    path: './aot',
    filename: '[name].min.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader?tsconfig=tsconfig.json',
          'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'raw'
      }
    ]
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.join(process.cwd(), 'app')
    )
  ],

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.ts', '.js']
  },
};
