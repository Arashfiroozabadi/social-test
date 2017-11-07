const path = require('path');
const HWP = require('html-webpack-plugin');
const ETP = require("extract-text-webpack-plugin");

const sourcePath = path.join(__dirname, './dist');

module.exports = {
    entry:'./dist/index.js',
    output:{
      path:path.join(__dirname, './build'),
      filename:'bundle.js'
    },
    module:{
      rules:[
        {
          test:/\.scss$/,
          use:ETP.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test:/\.css$/,
          use: [
            { loader:"style-loader" },
            { loader:"css-loader"}
          ]
        },
        { 
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
          use:[ 
            "babel-loader",
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader?name=[name].[ext]&outputPath=fonts/&publicPath=../'
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use:[
            'file-loader?name=[name].[ext]&&outputPath=images/',
            'image-webpack-loader',
          ],      
        }
      ]
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        sourcePath
      ],
    },
    plugins: [
      new HWP({
        minify:{
          collapseWhitespace:true
        },
        template:'index.html'
      }),
      new ETP({
        filename:'styles/style.css',
        disable:false,
        allChunks:true
      })
    ]
};