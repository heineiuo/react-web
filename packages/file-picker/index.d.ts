
import * as React from 'react';

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

export default FilePicker