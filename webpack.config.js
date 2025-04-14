
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  //fichier d'entrée principal
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), //dossier de sortie
    clean: true,
  },
  //serv de dev
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3001,
    open: {
      app: {
        name: 'google-chrome'
      }
    }
  },
  module: {
    rules: [
      {
        //css extraction des fichiers
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader'
        ]
      },
      {
        //scss transformation en css
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'sass-loader',
        ],
      },
      {
        //Babel 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        //gestion des polices
        test: /\.(woff(2)?|ttf|otf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      },
      {
        //gestion des images
        test: /\.(png|jpg|jpeg|gif|svg)$/,  
        use: [
          {
            loader: 'file-loader',  
            options: {
              name: '[name].[hash].[ext]',  
              outputPath: 'assets/images/',  
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ 
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/contact.html',
      filename: 'contact.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/experiences.html',
      filename: 'experiences.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/competences.html',
      filename: 'competences.html',
    }),
  ],
  mode: 'development',
};