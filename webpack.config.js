//webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js"
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      // CSS
      {
        test: [/\.scss$/i, /\.css$/i],
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // Babel
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      },
      // TypeScript
      {
        test:/\.tsx?$/,
        exclude: [/node_modules/],
        loader: 'ts-loader'
      }
    ]
  }
};