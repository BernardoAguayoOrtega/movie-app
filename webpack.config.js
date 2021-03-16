const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
})

const reactRules = {
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	loader: 'babel-loader',
};

module.exports = {
	entry: './src/index.jsx',
	module: {
		rules: [reactRules],
	},
	plugins: [htmlPlugin],
};
