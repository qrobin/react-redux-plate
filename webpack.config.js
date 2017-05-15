const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, './dist');

const webpackConfig = {
    entry: {
        app: [
            path.resolve(__dirname, './src/index.js')
        ]
    },
    output: {
        path: outputPath,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            // {
            //     test: /\.scss$/,
            //     exclude: /node_modules/,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //         'sass-loader',
            //     ]
            // },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'stylus-loader'
                    }
                ]
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src/assets/images/'),
                use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/assets/index.html'),
            filename: 'index.html',
            path: outputPath
        }),

        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProgressPlugin(),
        new webpack.SourceMapDevToolPlugin()
    ],

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        compress: true,
        port: 3000,
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0',
        stats: 'minimal',
        clientLogLevel: 'none'
    }
};

module.exports = webpackConfig;