// Type definitions for @react-web/button
// Project: @react-web/button
// Definitions by: heineiuo <https://github.com/heineiuo>

import * as React from 'react';

type P = any

export interface ButtonProps {
  autofocus?: boolean;
  cancelKeyboardEventOnSelection?: boolean;
  className?: string;
  // createFromSearch?(items: OptionValue[], search: string): OptionValue;
  // defaultValue?: OptionValue;
  delimiters?: [any];
  color?: string;
  disabled?: boolean 
  style?: any;
  renderIcon: () => React.ReactElement<P>
  // ...
}

declare class Button extends React.Component<ButtonProps, any> {

}

export default Button