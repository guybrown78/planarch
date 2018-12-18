const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pug = {
	test: /\.pug$/,
	use: ['html-loader', 'pug-html-loader']
};

module.exports = {
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [{
					loader: "html-loader",
					options: {
						minimize: true
					}
				}]
			},
			{
				test: /\.(png|jpe?g)/i,
				use: [{
						loader: "url-loader",
						options: {
							name: "./img/[name].[ext]",
							limit: 10000
						}
					},
					{
						loader: "img-loader"
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader"
				]
			},
			pug
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
			filename: "./original-index.html"
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.pug',
			filename: 'index.html',
		}),
		new HtmlWebpackPlugin({
			template: 'src/about.pug',
			filename: 'about.html',
			//inject: false
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]
};