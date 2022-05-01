const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@mui/styled-engine' : '@mui/styled-engine-sc',
			'@mui/base': '@mui/base/legacy',
      '@mui/lab': '@mui/lab/legacy',
      '@mui/material': '@mui/material/legacy',
      '@mui/styled-engine': '@mui/styled-engine/legacy',
      '@mui/system': '@mui/system/legacy',
			'@mui/data-grid' : '@mui/x-data-grid',
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@container': path.resolve(__dirname, 'src/container'),
			'@styles': path.resolve(__dirname, 'src/assets/styles'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
		}
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.html$/,
				use: [
					{ loader: 'html-loader'}
				]
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader",
				],
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				type: 'asset'
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new Dotenv(),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 8000,
		open: true,
		historyApiFallback: true
	}
}
