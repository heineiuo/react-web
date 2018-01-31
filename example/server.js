const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const compression = require('compression')
const cors = require('cors')
const webpack = require('webpack')

const createWebpackConfig = require('../scripts/createWebpackConfig')
const packageFile = JSON.parse(fs.readFileSync('package.json', 'UTF-8'))

const port = process.env.PORT || 8080

const config = createWebpackConfig({
  platform: 'web',
  outputDir: './umd',
  port,
  name: packageFile.name,
  compress: true,
  production: true,
  devEntry: './src/index.js',
  alias: [],
  externals: [
    {
      "commonjs": "react-bucket",
      "commonjs2": "react-bucket",
      "root": "react-bucket",
      "amd": "react-bucket"
    },
  ],
  version: packageFile.version,
})

const compiler = webpack(config)

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(compression())
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}))

app.use(express.static(path.resolve('./')))
app.use(express.static(path.resolve('../umd')))

app.listen(port, () => {
  console.log('dev server listening on port %s', port)
})

module.exports = app
