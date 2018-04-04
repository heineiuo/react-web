// Type definitions for react-bucket
// Project: react-bucket
// Definitions by: heineiuo <https://github.com/heineiuo>

import * as React from 'react';

export interface ButtonProps {
  autofocus?: boolean;
  cancelKeyboardEventOnSelection?: boolean;
  className?: string;
  // createFromSearch?(items: OptionValue[], search: string): OptionValue;
  // defaultValue?: OptionValue;
  delimiters?: [any];
  disabled?: boolean;
  color?: string;
  disabled?: boolean = false
  style?: any;
  renderIcon: () => React.ReactElement
  // ...
}

declare class Button extends React.Component<ButtonProps, any> {

}

declare class Image extends React.Component<{
  url: string,
}, any> {

}


export interface ViewProps {
  hoverStyle?: object | object[];
  style?: object | object[];
  enableHover?: boolean;
}

declare class View extends React.Component<ViewProps, any> {

}

export interface PromiseViewProps {
  promise: Promise<any>,
  onStateChange?: (status: string, result: any) => {},
  render?: (status: string, result: any) => {},
}

declare class PromiseView extends React.Component<PromiseViewProps, any> {

}

declare class Popup extends React.Component<{
  offsetTop?: number;
  offsetLeft?: number;
  onToggle?: () => {};
  action?: string[];
  renderOverlay: (overlayProps: {
    closePopup: () => {},
    getMountWrapper: () => {},
    portalStyle: any
  }) => React.ReactElement;
}, any> { }

declare class FilePicker extends React.Component<{
  multiple?: boolean | true;
  accept?: string;
  tag?: string;
  className?: string;
  style?: object | object[];
  disabled?: boolean | false;
  withObjectUrl?: boolean;
  onFileChange?: () => {};
}, any> {

}

declare class TextInput extends React.Component<{
  enableFocus?: boolean;
  focusStyle?: object | object[];
  affix?: string;
  withAffix?: boolean;
  type?: string;
  dispatch?: () => {};
}, any> {

}

/*~ This is the module template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
// export as namespace ReactBucket;

/*~ If this module has methods, declare them as functions like so.
 */
// export function myMethod(a: string): string;
// export function myOtherMethod(a: number): number;

/*~ You can declare types that are available via importing the module */
// export interface someType {
//     name: string;
//     length: number;
//     extras?: string[];
// }

/*~ You can declare properties of the module using const, let, or var */
// export const myField: number;

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
// export class Button {
    /*~ For example, given this definition, someone could write:
     *~   import { subProp } from 'yourModule';
     *~   subProp.foo();
     *~ or
     *~   import * as yourMod from 'yourModule';
     *~   yourMod.subProp.foo();
     */

// }
