const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './src',
        port: 8080,
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:3000', // Certifique-se de que o servidor Node.js está na porta 3000
                secure: false,
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            Blockly: 'blockly',
        }),
    ],
};
