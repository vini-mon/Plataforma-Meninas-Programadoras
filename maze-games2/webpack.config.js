const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/script.js',  // Troque de script.ts para script.js
    module: {
        rules: [
        {
            test: /\.js$/,  // Agora o Webpack vai processar arquivos JS
            exclude: /node_modules/,
        },
        ],
    },
    resolve: {
        extensions: ['.js'],  // Apenas JS
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './public',  // Certifique-se de que seus arquivos HTML e CSS estão aqui
        port: 8080,
    },
    plugins: [
        new webpack.ProvidePlugin({
            Blockly: 'blockly',
        }),
    ],
};
