const fs = require('fs')
const path = require('path')
const url = require('url')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const mkdirp = require('mkdirp')
const trimEnd = require('lodash/trimEnd')
const defaults = require('lodash/defaults')

const createWebpackConfig = (configFile) => {

  defaults(configFile, {
    __DEV__: process.env.NODE_ENV != 'production',
    context: process.cwd(),
    platform: 'web',
    entry: './src/index.js',
    nodeModulesDir: './node_modules',
    packageFile: './package.json',
    outputDir: './umd',
    publicPathPrefix: 'https://naodong.qingtime.cn/npm',
    devPublicPathPrefix: 'http://localhost:8080'
  })

  const {
    __DEV__,
    context,
    platform,
    nodeModulesDir,
    packageFile,
    outputDir,
    devPublicPathPrefix,
    publicPathPrefix,
  } = configFile

  console.log(`NODE_ENV: ${__DEV__ ? 'development' : 'production'}`)

  const packageJSON = JSON.parse(
    fs.readFileSync(path.resolve(context, packageFile), 'utf8')
  )

  const nodeModulesPath = path.resolve(context, nodeModulesDir) + path.sep
  const outputPath = path.resolve(context, outputDir) + path.sep
  const publicPath = url.resolve(publicPathPrefix, '') + path.posix.resolve(`/${packageJSON.name}@${packageJSON.version}`, outputDir).substr(1) + '/'

  const devPublicPath = '/'
  const entryName = path.basename(packageJSON.name)

  const config = {
    context: path.resolve(__dirname, context),
    devtool: __DEV__ ? 'inline-source-map' : false,
    node: {
      fs: 'empty'
    },
    entry: {
      [entryName]: [
        path.resolve(context, configFile.entry)
      ]
    },
    target: platform,
    output: {
      path: outputPath,
      publicPath: __DEV__ ? devPublicPath : publicPath,
      filename: `[name].${__DEV__ ? 'development' : 'production'}.js`,
      library: packageJSON.name,
      libraryTarget: platform === 'web' ? 'umd' : 'commonjs2',
      umdNamedDefine: platform === 'web' ? true : false
    },
    externals: platform === 'node' ? [nodeExternals()] : {},
    resolve: {
      alias: {},
      extensions: ['.jsx', '.js', '.json'],
      modules: [
        'node_modules',
        path.resolve(context, `node_modules`),
      ]
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|svg|gif)$/,
          loader: 'url-loader?limit=1024&name=images/[hash].[ext]'
        },
        {
          test: /\.(json)$/,
          loader: 'json-loader'
        },
        {
          test: /\.hash\.css$/,
          use: [
            'style-loader',
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
          ]
        },
        {
          test: /^((?!hash).)*\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        },
        {
          test: /(\.js|\.jsx)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [],
    // mode: __DEV__ ? 'development' : 'production'
  }

  if (__DEV__) {
    config.serve = {
      content: __dirname,
      dev: {
        publicPath: '/',
      },
      hot: true,
    }
  }

  if (configFile.externals) {
    configFile.externals.forEach(externalItem => {
      config.externals[externalItem.commonjs] = Object.assign({
        root: externalItem.commonjs
      }, externalItem)
    })
  }

  if (configFile.alias) {
    configFile.alias.forEach(aliasItem => {
      config.resolve.alias[aliasItem.commonjs] = path.resolve(nodeModulesPath, aliasItem.path)
    })
  }

  if (__DEV__) {
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }))
  } else {
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }))
  }

  return config
}

module.exports = createWebpackConfig
