const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const js = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: "babel-loader"
	}
};
const pug = {
	test: /\.pug$/,
	use: ['html-loader', 'pug-html-loader']
};

const scss = {
	test: /\.scss$/,
	use: [
		MiniCssExtractPlugin.loader,
		"css-loader",
		"postcss-loader",
		"sass-loader"
	]
};

const img = {
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
};

// const images = {
// 		test: /\.(png|svg|jpg|gif)$/,
// 		use: [
// 			'img-loader'
// 		]
// };

const html = {
	test: /\.html$/,
	use: [{
		loader: "html-loader",
		options: {
			minimize: true
		}
	}]
};
module.exports = {
	module: {
		rules: [js,
			html,
			img,
			//images,
			scss,
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
			template: 'src/projects.pug',
			filename: 'projects.html'
		}),
		new HtmlWebpackPlugin({
			template: 'src/projects-category.pug',
			filename: 'projects-category.html'
		}),
		new HtmlWebpackPlugin({
			template: 'src/about.pug',
			filename: 'about.html',
			//inject: false
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new CopyWebpackPlugin([
			{from:'src/project-imgs',to:'project-imgs'} 
		])
	]
};