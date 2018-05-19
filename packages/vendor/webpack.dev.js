const fs = require('fs')
const path = require('path')
const { createWebpackConfig } = require('@react-web/webpack')

const __DEV__ = process.env.NODE_ENV === 'development'

module.exports = createWebpackConfig({
  __DEV__: true,
  noServe: true,
  "publicPathPrefix": "https://cdn.jsdelivr.net/npm/",
  "context": "./",
  "outputDir": "./dist/",
  "entry": "./src/index.js",
  "nodeModulesDir": "../../node_modules/",
  "alias": [
    { "commonjs": "systemjs", "path": "./systemjs/dist/system.js" },
  ]
})
