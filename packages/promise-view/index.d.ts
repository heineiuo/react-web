// Type definitions for react-web
// Project: react-web
// Definitions by: heineiuo <https://github.com/heineiuo>


import * as React from 'react';



export interface PromiseViewProps {
  promise: Promise<any>,
  onStateChange?: (status: string, result: any) => {},
  render?: (status: string, result: any) => {},
}

declare class PromiseView extends React.Component<PromiseViewProps, any> {

}

export default PromiseView