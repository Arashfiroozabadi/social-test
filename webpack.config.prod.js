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
        // minify:{
        //   collapseWhitespace:true
        // },
        template:'index.html'
      }),
      new ETP({
        filename:'styles/style.css',
        disable:false,
        allChunks:true
      })
    ]
};


























// const path = require('path');
// const webpack = require('webpack');

// const sourcePath = path.join(__dirname, './dist');
// const destinationPath = path.join(__dirname, './build');

// module.exports = {
//     devtool: 'eval',
//     context: sourcePath,
//     entry:[
//       'webpack-dev-server/client?http://localhost:3030',
//       'webpack/hot/only-dev-server',
//       'react-hot-loader/patch',
//       './index.jsx'
//     ],
//     output: {
//       filename: 'bundle.js',
//       path: destinationPath,
//       publicPath: './'
//     },
//     module: {
//       rules: [
//         {
//           test: /\.css$/,
//           exclude: /node_modules/,
//           use: [
//             'style-loader',
//             'css-loader'
//           ]
//         },
//         {
//           test: /\.(js|jsx)$/,
//           exclude: /node_modules/,
//           use: [
//             'babel-loader'
//           ],
//         },
//         {
//             test: /\.scss$/,
//             use: [{
//                 loader: "style-loader" // creates style nodes from JS strings
//             }, {
//                 loader: "css-loader" // translates CSS into CommonJS
//             }, {
//                 loader: "sass-loader" // compiles Sass to CSS
//             }]
//         },
//         {
//             test: /\.(eot|ttf|woff|woff2)$/,
//             loader: 'file-loader'
//         },
//         {
//           test: /\.(jpe?g|png|gif|svg)$/i,
//           use:[
//             'file-loader',
//             'image-webpack-loader'     
//           ]      
//         }
//       ],
//     },
//     resolve: {
//         extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
//         modules: [
//           path.resolve(__dirname, 'node_modules'),
//           sourcePath
//         ],
//     },
  
//     plugins:[
//       new webpack.NamedModulesPlugin(),
//       new webpack.HotModuleReplacementPlugin(),
//     ],

//     devServer: {
//         contentBase: './dist',
//         historyApiFallback: true,
//         port: 3030,
//         hot: true,
//         publicPath: '/',
//     }
// };
