// Type definitions for @react-web/stylesheet
// Project: react-web
// Definitions by: heineiuo <https://github.com/heineiuo>

import * as React from 'react';

type RegisteredStyle<T> = number & { __registeredStyleBrand: T };

class StyleMap {
  [styleName: T]: CSSStyleDeclaration
}

declare namespace StyleSheet {

  type NamedStyles<T> = { [P in keyof T]: StyleMap };

  export function create<T extends NamedStyles<T>>(styles: T): { [P in keyof T]: RegisteredStyle<T[P]> }
  
  export function flatten<T>(style?: RegisteredStyle<T>): T;
  
  export function assign<T>(style?: RegisteredStyle<T>): T;

}

export default StyleSheet
