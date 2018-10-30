const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + "/src",
    entry: [
        './js/index.js'
    ],
    output: {
        path: __dirname + "/public",
        filename: 'bundle.js'
    },
    module: {

        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:
                {
                    loader: 'url-loader',
                    options: {
                        name: "/src/images/[name].[ext]",
                      },
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "/src/images/[name].[ext]",
                    outputPath: '/public/images/'
                  },
                },
              },
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/style.css')
    ],
    devServer: {
        contentBase: __dirname + '/public',
        historyApiFallback: true
    }
};
