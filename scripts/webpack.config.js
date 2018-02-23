const fs = require('fs')
const path = require('path')
const createWebpackConfig = require('./createWebpackConfig')

const packageFile = JSON.parse(fs.readFileSync('../package.json', 'UTF-8'))
const __DEV__ = process.env.NODE_ENV === 'development'

module.exports = createWebpackConfig({
  platform: 'web',
  workDir: path.resolve(__dirname, '..'),
  outputDir: './umd',
  name: packageFile.name,
  compress: !__DEV__,
  production: !__DEV__,
  devEntry: './src/index.js',
  alias: [
    {"commonjs": "systemjs", "path": "./systemjs/dist/system.js"},
  ],
  version: packageFile.version,
})

