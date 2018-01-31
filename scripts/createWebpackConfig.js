const fs = require('fs')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const mkdirp = require('mkdirp')
const WebpackSystemRegister = require('webpack-system-register')
const BabiliPlugin = require('babili-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const trimEnd = require('lodash/trimEnd')
const defaults = require('lodash/defaults')
const StatsPlugin = require('stats-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin')

const webpackLoaderExclude = (inNodeModuleButNeedCompile) => new RegExp('(node_modules\/)(?!' + inNodeModuleButNeedCompile.join('|') + ')')

/**
 * webpack client config
 * @param configFile
 * @param target
 */
const createWebpackConfig = (configFile) => {

  defaults(configFile, {
    platform: 'web'
  })

  const pkgFolder = configFile.outputDir
  const distPath = path.resolve(process.cwd(), pkgFolder)
  const devPublicPath = `http://127.0.0.1:${configFile.port}/${configFile.name}/`
  const publicPath = `https://unpkg.com/${configFile.name}@${configFile.version}/`

  const config = {
    context: __dirname,
    devtool: false,
    node: {
      fs: 'empty'
    },
    entry: {
      [configFile.name]: [
        path.join(process.cwd(), configFile.devEntry)
      ]
    },
    target: configFile.platform,
    output: {
      path: distPath,
      publicPath: publicPath, // css中的图片地址的前缀, 可以加上域名
      filename: '[name].js',
      library: configFile.name,
      libraryTarget: configFile.platform === 'web' ? 'umd' : 'commonjs2',
      umdNamedDefine: configFile.platform === 'web' ? true : false
    },
    externals: configFile.platform === 'node' ? [nodeExternals()] : {},
    resolve: {
      alias: {},
      extensions: ['.jsx', '.js', '.json'],
      modules: [
        'node_modules',
        path.resolve(__dirname, `./node_modules`),
        path.resolve(`${process.cwd()}/node_modules`)
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
          exclude: webpackLoaderExclude(configFile.modulesNeedBabel || []),
          loader: configFile['babel-loader'] || configFile['babel-loader'] || 'babel-loader'
        }
      ]
    },
    plugins: []
  }


  if (configFile.useSystemRegister) {
    // console.log('lolla: use system register')
    config.plugins.push(
      new WebpackSystemRegister({})
    )
  }

  if (configFile.externals) {
    configFile.externals.forEach(externalItem => {
      config.externals[externalItem.commonjs] = Object.assign({
        root: externalItem.commonjs
      }, externalItem)
    })
    // console.log(config.externals)
  }

  if (configFile.alias) {
    configFile.alias.forEach(aliasItem => {
      config.resolve.alias[aliasItem.commonjs] = path.resolve(`${process.cwd()}/node_modules`, aliasItem.path)
      // console.log(config.resolve.alias[aliasItem])
    })
  }

  if (configFile.compress) {
    // todo use uglify before bug (https://github.com/babel/babili/issues/583) fixed
    config.plugins.push(new UglifyJSPlugin())
    // config.plugins.push(new BabiliPlugin({
    //   removeConsole: true,
    //   keepFnName: true,
    //   keepClassName: true,
    // }, {
    //   test: /\.js($|\?)/i
    // }))
  }
  if (configFile.production) {
    // console.log(`[webpack configure] use define plugin, NODE_ENV: production`)
    // config.plugins.push(
    //   new StatsPlugin(`./stats.json`, {
    //     chunkModules: true,
    //     exclude: configFile.externals.map(name => {
    //       return new RegExp(`/node_modules[\\\/]${name}/`)
    //     })
    //   })
    // )
    config.plugins.push(new Visualizer({
      filename: `./stats.html`
    }))
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }))
  } else {
    config.output.publicPath = devPublicPath
    // console.log(`[webpack configure] use define plugin, NODE_ENV: development`)
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }))
  }

  return config

}


module.exports = createWebpackConfig

