const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
			    // Extracts the compiled CSS from the SASS files defined in the entry
				test: /\.(scss|css)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin('dist', {
			root: __dirname
		}),
		new HtmlWebPackPlugin({
			template: "./index.html",
			filename: "./index.html",
			publicPath: "/",
		}),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'assets', to: 'assets',
                    noErrorOnMissing: true
                },
            ]
        })
	],
	devServer: {
		historyApiFallback: true,
		hot: true,
		https: true,
	},
	entry: [
		'./design.js',
	],
};
