// Type definitions for react-web
// Project: react-web
// Definitions by: heineiuo <https://github.com/heineiuo>

import * as React from 'react';

import Button from '@react-web/button';
import Image from '@react-web/image';
import View from '@react-web/view';
import PromiseView from '@react-web/promise-view';
import Popup from '@react-web/popup';
import FilePicker from '@react-web/file-picker';
import Text from '@react-web/text';
import TextInput from '@react-web/text-input';
import Menu from '@react-web/menu';
import ActivityIndicator from '@react-web/activity-indicator'
import AppRegistry from '@react-web/app-registry'
import AsyncLoader from '@react-web/async-loader'
import StyleSheet from '@react-web/stylesheet'
import Platform from '@react-web/platform'
import { TouchableOpacity } from '@react-web/touchable'
import * as Utils from '@react-web/utils'

export {
  ActivityIndicator,
  AppRegistry,
  AsyncLoader,
  Button,
  Image,
  View,
  Platform,
  PromiseView,
  Popup,
  StyleSheet,
  FilePicker,
  Text,
  TextInput,
  TouchableOpacity,
  Menu,
  Utils,
};


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
