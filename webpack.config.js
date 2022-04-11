const path = require('path');

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
    ],
  },
  mode: 'development',

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