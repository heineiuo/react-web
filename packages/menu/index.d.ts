// Type definitions for @react-web/menu
// Project: @react-web/menu
// Definitions by: heineiuo <https://github.com/heineiuo>

import * as React from 'react';

type P = any

export default Menu

declare class Menu extends React.Component<{
  isRoot?: boolean,
  getKey?: (item: any) => string,
  style?: any,
  itemStyle?: any,
  arrowStyle?: any,
  top?: number,
  left?: number,
  width?: number,
  parentRight?: number,
  parentWidth?: number,
  parentTop?: number,
  onClickItem?: React.EventHandler<P>,
  renderItem: (P) => React.ReactElement<P>
}, any > {}