// Type definitions for @react-web/async-loader
// Project: @react-web
// Definitions by: heineiuo <https://github.com/heineiuo>

import * as React from 'react';

type P = any

export default AsyncLoader

declare class AsyncLoader extends React.Component<{
  loadKey: string
  load: () => React.Component
  renderLoading: () => React.ReactElement<P>,
  renderError: () => React.ReactElement<P>
}, any>{

}