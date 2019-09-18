const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    module: {
        rules: [
	    {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	    },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 15000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(mp3|ogg|wav)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }

                ]
            }
        ]
    },
    resolve: {
	extensions: [ '.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '!!ejs-compiled-loader!templates/views/index.ejs',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: '!!ejs-compiled-loader!templates/views/login.ejs',
            filename: 'login.html'
        }),
        new HtmlWebpackPlugin({
            template: '!!ejs-compiled-loader!templates/views/game.ejs',
            filename: 'game.html'
        }),
        new HtmlBeautifyPlugin()
    ]
};
