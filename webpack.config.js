const path = require("path")

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'app'),
    output: {
        path: path.resolve(__dirname,),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.(ts|js))x?/,
            loader: 'babel-loader'
        }]
    }
}
