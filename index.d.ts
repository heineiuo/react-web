// Type definitions for react-bucket
// Project: react-bucket
// Definitions by: heineiuo <https://github.com/heineiuo>

import * as React from 'react';

export interface ButtonProps {
  noBackground?: boolean;
  autofocus?: boolean;
  cancelKeyboardEventOnSelection?: boolean;
  className?: string;
  // createFromSearch?(items: OptionValue[], search: string): OptionValue;
  // defaultValue?: OptionValue;
  delimiters?: [any];
  disabled?: boolean;
  // ...
}

declare class Button extends React.Component<ButtonProps, any> {

}

export interface ImageProps {

}

declare class Image extends React.Component<ImageProps, any> {

}


export interface ViewProps {
  hoverStyle?: object | array;
  style?: object | array;
  enableHover?: boolean;
}

declare class View extends React.Component<ViewProps, any> {

}

export interface PromiseViewProps {
  promise: Promise<any>
}

declare class PromiseView extends React.Component<PromiseViewProps, any> {

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
