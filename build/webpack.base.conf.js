const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../docs/static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolveLoader: {
    modules: ['node_modules', '../']
  },
  resolve: {
    extensions: ['.js', '.vue', 'styl'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                modules: false
              }]
            ]
          }
        }
      },
      {
        test: /\.json$/,
        use: {
          loader: 'json'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[ext]?[hash:7]'
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'
      },
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              quality: 85
            },
            pngquant:{
              quality: [0.65, 0.90],
              speed: 4
            },
            // svgo:{
            //   plugins: [
            //     {
            //       removeViewBox: false
            //     },
            //     {
            //       removeEmptyAttrs: false
            //     }
            //   ]
            // }
          }
        }
      }
    ]
  },
  plugins: [
    // new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
  ]
}
