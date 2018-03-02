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

const webpackLoaderExclude = (inNodeModuleButNeedCompile) => {
  return new RegExp('(node_modules\/)(?!' + inNodeModuleButNeedCompile.join('|') + ')')
}

/**
 * webpack client config
 * @param configFile
 * @param target
 */
const createWebpackConfig = (configFile) => {

  defaults(configFile, {
    __DEV__: process.env.NODE_ENV =! 'production',
    context: process.cwd(),
    platform: 'web',
    nodeModulesDir: './node_modules',
    packageFile: './package.json',
    outputDir: './umd',
    devUnpkgOrigin: 'http://localhost:8080',
    unpkgOrigin: 'https://unpkg.com'
  })

  const {
    __DEV__,
    context,
    platform,
    nodeModulesDir,
    packageFile,
    outputDir,
    devUnpkgOrigin,
    unpkgOrigin,
  } = configFile

  const packageJSON = JSON.parse(
    fs.readFileSync(path.resolve(context, packageFile), 'utf8')
  )

  const nodeModulesPath = path.resolve(context, nodeModulesDir)
  const outputPath = path.resolve(context, outputDir)
  const publicPath = `${__DEV__ ? devUnpkgOrigin : unpkgOrigin}` + path.resolve(`/${packageJSON.name}@${packageJSON.version}/`, outputDir)
  const entryName = path.basename(packageJSON.name)

  const config = {
    context,
    devtool: false,
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
      publicPath: publicPath, // css中的图片地址的前缀, 可以加上域名
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
      config.resolve.alias[aliasItem.commonjs] = path.resolve(nodeModulesPath, aliasItem.path)
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
  if (__DEV__) {
    // console.log(`[webpack configure] use define plugin, NODE_ENV: development`)
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }))
  } else {
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
  }

  return config

}

module.exports = createWebpackConfig

