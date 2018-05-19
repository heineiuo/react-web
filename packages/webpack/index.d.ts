// Type definitions for @react-web/webpack
// Project: @react-web/webpack
// Definitions by: heineiuo <https://github.com/heineiuo>

type P = any

export = WebpackHelper

declare namespace WebpackHelper {

  function createWebpackConfig<P>(configProps: {
    __DEV__?: boolean,
    context?: string,
    noServe?: boolean,
    platform?: string,
    entry?: string,
    nodeModulesDir?: string,
    packageFile?: string,
    outputDir?: string,
    publicPathPrefix?: string,
    devPublicPathPrefix?: string,
  })

}
