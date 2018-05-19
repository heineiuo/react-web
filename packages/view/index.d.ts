// Type definitions for @react-web/view
// Project: react-web
// Definitions by: heineiuo <https://github.com/heineiuo>


import * as React from 'react';

export interface ViewProps {
  hoverStyle?: object | object[];
  style?: object | object[];
  enableHover?: boolean;
}

declare class View extends React.Component<ViewProps, any> {

}

export default View