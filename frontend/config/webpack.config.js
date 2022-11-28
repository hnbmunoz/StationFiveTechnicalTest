const path = require('path') 
const TerserPlugin = require('terser-webpack-plugin')  

const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


console.log("building webpack")

module.exports = {
  entry: {
    bundle: path.resolve( "./src/index.jsx"),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  mode: 'none',
  output: {
    filename: '[name].[contenthash].js', 
    path: path.resolve(__dirname,'../dist'),
    clean: {
      dry: true,      
    },
    assetModuleFilename: 'assets/[name][ext]',
    
  },
  devServer: {
    port: 5000,
    proxy: {
      "/": {
          target: "http://localhost:3000",
          secure: false,
          changeOrigin: true
      }
  },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true
    }, 
    open: true,
    hot: true,

  },
  module: {
    rules: [
     
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,  
        type: 'asset',
        parser: {
          dataUrlCondition: { 
            maxSize: 10 * 1024 
          }
        }
      },
      {
        test: /\.txt/,
        type: 'asset/source' 
      },
      {
        test: /\.(css|scss)$/,
        use: [
          // 'style-loader', // creates style nodes from JS strings
          MiniCssExtractPlugin.loader,
          'css-loader',  
          'sass-loader',       
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",

        },
      },      
    ]
  },
 
  plugins: [
    new TerserPlugin(), 
    new MiniCssExtractPlugin({
      filename: "bundles.[contenthash].css", 
  })
  ,
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*', 
        path.join(process.cwd(), 'build/**/*') 
      ]
    }),

    new HtmlWebpackPlugin({
      title: "Webpack Applications Custom Title",
      description: "custom Description",
      template: "src/template.hbs", 
    }),
  ],
   
} ;

