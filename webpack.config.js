const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        inline: true,
        publicPath: "/"
    },
    module: {
        noParse: [/\.min\.js/],
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                },
                include: path.resolve('./src'),
                exclude: path.resolve('node_modules'),
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader/useable',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name].[local]_[hash:7]',
                            sourceMap: false,
                        },
                    }
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', path.resolve('./src')],
    },
    plugins: [new HtmlWebpackPlugin({
        title: "My App Name",
        template: path.resolve("src", "index.ejs"),
        filename: path.resolve("dist", "index.html"),
        inject: false,
        hash: false,
        alwaysWriteToDisk: true
    })]
};