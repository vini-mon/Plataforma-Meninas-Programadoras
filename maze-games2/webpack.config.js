const path = require('path');
const webpack = require('webpack');

    module.exports = {
        mode: 'development',
        entry: './src/script.ts',
        module: {
            rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        devServer: {
            static: './public',
            port: 3000,
        },
        plugins: [
            new webpack.ProvidePlugin({
                Blockly: 'blockly',
            }),
        ],
    };