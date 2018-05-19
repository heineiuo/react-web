// Type definitions for @react-web/app-registry
// Project: react-web
// Definitions by: heineiuo <https://github.com/heineiuo>

import * as React from 'react';

type P = any

export default AppRegistry

declare namespace AppRegistry {

  function registerComponent (
    appKey:string, 
    componentProvider: () => React.Component, 
    config: {
      systemConfig?: any,
      mountPoint: any
    }
  ) 

}