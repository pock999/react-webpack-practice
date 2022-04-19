const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 進入點
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
  },
  module: {
    rules: [
      // 編譯JSX, 編譯ES6
      {
        test: /.js$/, exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        }
      },
      // 編譯css
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      // 圖片
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {},
      },
    ],
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      // 加上 onClick 才有效
      name: "index.html",
      inject: false,
      template: 'public/index.html'
    })
  ],
  devServer: {
    // contentBase
    static : {
      directory : path.join(__dirname, "dist/")
    },
    // 檔案修改過後自動進行檔案刷新
    liveReload: true,
    // webpack-dev-server port
    port: 9000,
    // publicPath
    devMiddleware:{
      publicPath: "https://localhost:9000/",
    },
  },
};