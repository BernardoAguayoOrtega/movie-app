
const reactRules = {
  test: /\.js|jsx$/,
  exclude: /node_modules/,
  use: {
      loader:'"babel-loader',
  },
}

module.exports = {
  module: {
    rules: [reactRules]
  }
}