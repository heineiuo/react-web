const fs = require('fs')
const path = require('path')
const createWebpackConfig = require('./scripts/createWebpackConfig')

const packageFile = JSON.parse(fs.readFileSync('package.json', 'UTF-8'))

module.exports = createWebpackConfig({
  platform: 'web',
  outputDir: './umd',
  name: packageFile.name,
  compress: true,
  production: true,
  devEntry: './src/index.js',
  alias: [
    {"commonjs": "systemjs", "path": "./systemjs/dist/system.js"},
  ],
  version: packageFile.version,
})

