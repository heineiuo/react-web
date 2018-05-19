// Type definitions for react-web
// Project: react-web
// Definitions by: heineiuo <https://github.com/heineiuo>


import * as React from 'react';

type P = any

declare class Popup extends React.Component<{
  offsetTop?: number;
  offsetLeft?: number;
  onToggle?: () => {};
  action?: string[];
  renderOverlay: (overlayProps: {
    closePopup: () => {},
    getMountWrapper: () => {},
    portalStyle: any
  }) => React.ReactElement<P>;
}, any> { }

export default Popup