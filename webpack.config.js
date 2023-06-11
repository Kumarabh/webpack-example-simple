const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js)$/i,
                use: 'babel-loader'
            }
        ]
    },
    // plugins: [new HtmlWebpackPlugin()],
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
      ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}