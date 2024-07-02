const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        })
    ],
    module: {
        rules: [
            // Существующее правило для babel-loader
            // ...
            {
                test: /.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
};