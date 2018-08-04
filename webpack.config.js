const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        main: path.resolve(__dirname, './main'),
        vendor: ['react', 'react-dom', 'omnibar', 'mathjs', 'highlight.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(
                                __dirname,
                                'tsconfig.json'
                            ),
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
};

module.exports = config;
