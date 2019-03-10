const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const {
  createPugLoader,
  createVueLoader,
  createCssLoader,
  createScssLoader,
  createSassLoader,
  createTsxLoader,
  createImageLoader,
  createMediaLoader,
  createFontLoader,
} = require('./config/utils');

const currentEnv = 'development';
const isProd = currentEnv === 'production';

const testConfig = {
  mode: currentEnv,
  entry: {
    app: ['./src/index.ts'],
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      createPugLoader(currentEnv),
      createVueLoader(currentEnv),
      createCssLoader(currentEnv),
      createScssLoader(currentEnv),
      createSassLoader(currentEnv),
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['@babel/preset-env'] },
      },
      createTsxLoader(currentEnv),
      createImageLoader(currentEnv),
      createMediaLoader(currentEnv),
      createFontLoader(currentEnv),
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.tsx?$/, // may apply this only for some modules
      options: {
        ts: {
          configFileName: 'tsconfig.test.json',
        },
      },
    }),
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: isProd ? true : false,
        collapseWhitespace: isProd ? true : false,
        removeAttributeQuotes: isProd ? true : false,
      },
      chunksSortMode: 'dependency',
    }),
    new VueLoaderPlugin(),
  ],
  // externals: [
  //   {
  //     vue: 'Vue',
  //     vuex: 'Vuex',
  //     'vue-router': 'VueRouter',
  //     'element-ui': 'ELEMENT',
  //   },
  // ],
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};

module.exports = testConfig;
