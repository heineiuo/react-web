# react-web
React全家桶

A rich collection of react vendors and components for silky web dev experience. 


## Install

#### Browser/Production

```html
<!-- no react.js, no react-dom.js, no babel-polyfill -->
<script src="https://cdn.jsdelivr.net/npm/@react-web/vendor@0.1.2/dist/vendor.production.js" />

<script src="/your/app.js" />
```

#### NPM/Development

vendor:

```bash
→ npm i @react-web/vendor -D
```

components:

```
→ npm i @react-web/components -D
```

## Document

### Vendors

Vendor | Version  |  Description
------------------|-------------|------------
 [react↗](https://github.com/facebook/react)             |  16.3.2 | A UI Framework
 [react-dom↗](https://github.com/facebook/react) | 16.3.2 | DOM adaptor for react
 [prop-types↗](https://github.com/facebook/prop-types) |  15.6.0   | Runtime type checking for React props and similar objects
 [react-adopt↗](https://github.com/pedronauck/react-adopt) |  0.4.1    | Compose render props components
 [react-grid-system↗](https://github.com/JSxMachina/react-grid-system) |3.1.2     |  Bootstrap-like responsive grid system
  [react-keyframes↗](https://github.com/zeit/react-keyframes) | 0.2.3     |Create frame-based animations
 [react-modal↗](https://github.com/reactjs/react-modal) | 3.1.11     |   Accessible modal dialog component
 [react-motion↗](https://github.com/chenglou/react-motion) | 0.5.2     | A spring that solves your animation problems 
 [react-redux↗](https://github.com/reactjs/react-redux) |5.0.6      |  Official React bindings for Redux
 [react-router-dom↗](https://github.com/ReactTraining/react-router) |4.2.2     | Declarative routing for React
[react-router-redux↗](https://github.com/ReactTraining/react-router) | 5.0.0-alpha.9 |Keep your state in sync with your router 
  [redux↗](https://github.com/reactjs/redux) |3.7.2    |  Predictable state container for JavaScript apps
redux-thunk       | 2.2.0    | thunk
 [systemjs↗](https://github.com/systemjs/systemjs) | 0.20.19    |  Dynamic ES module loader
warning           | 3.0.0      |  warning



### Components


Component | 描述 |package
---------|----------|---------
[`View`↗](./packages/view/README.md) | 视图 |  `@react-web/view`, `@react-web/components`
[`Text`↗](./packages/text/README.md) | 文字 |  `@react-web/text`
[`PromiseView`↗](./packages/promise-view/README.md) | Promise可视化 | `@react-web/promise-view`
[`StyleSheet`↗](./packages/stylesheet/README.md) | 样式表 | `@react-web/stylesheet`
[`AppRegistry`↗](./packages/app-registry/README.md) | AppRegistry | `@react-web/app-registry`
<sup>*</sup> [`Grid`↗](./packages/grid/README.md) | Grid | `@react-web/grid`

<small>* : Not included in `@react-web/components`, should be installed separately.</small>


## License

[MIT](LICENSE)