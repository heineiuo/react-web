const fs = require('fs')
const path = require('path')
const createWebpackConfig = require('./createWebpackConfig')

const __DEV__ = process.env.NODE_ENV === 'development'

module.exports = createWebpackConfig({
  context: path.resolve(__dirname, '..'),
  entry: './src/index.js',
  packageFile: './package.json',
  outputDir: './umd',
  nodeModulesDir: './node_modules',
  platform: 'web',
  compress: !__DEV__,
  __DEV__,
  alias: [
    {"commonjs": "systemjs", "path": "./systemjs/dist/system.js"},
  ],
})
