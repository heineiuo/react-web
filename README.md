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

### Vendor

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


Package  | Version  | Components | Description 
---------|----------|------------|------------
[`@react-web/components`↗](./packages/components/README.md)<sup>[1]</sup> | [![components]][components] | `{...}` | All the components below
[`@react-web/activity-indicator`↗](./packages/app-registry/README.md) | [![activity-indicator]][activity-indicator] | `ActivityIndicator` | Activity Indicator 
[`@react-web/app-registry`↗](./packages/app-registry/README.md) | [![app-registry]][app-registry] | `AppRegistry` | AppRegistry 
[`@react-web/async-loader`↗](./packages/async-loader/README.md) | [![async-loader]][async-loader] | `AsyncLoader` | Async Loader 
[`@react-web/box`↗](./packages/box/README.md) | [![box]][box] | `Box` | A box view
[`@react-web/button`↗](./packages/button/README.md) | [![button]][button] | `Button`| Button
[`@react-web/file-picker`↗](./packages/file-picker/README.md) | [![file-picker]][file-picker] | `FilePicker` | AppRegistry
[`@react-web/grid`↗](./packages/grid/README.md)<sup>[2]</sup> | [![grid]][grid] | `Grid`|Grid
[`@react-web/image`↗](./packages/app-registry/README.md) | [![image]][image] | `Image` | Image
[`@react-web/menu`↗](./packages/menu/README.md) | [![menu]][menu] | `Menu`| Menu
[`@react-web/platform`↗](./packages/platform/README.md) | [![platform]][platform] | `Platform`| Platform
[`@react-web/popup`↗](./packages/popup/README.md) | [![popup]][popup] | `Popup` | Popup layer
[`@react-web/promise-view`↗](./packages/promise-view/README.md) | [![promise-view]][promise-view] | `PromiseView`| Promise可视化
[`@react-web/scroll-view`↗](./packages/scroll-view/README.md) |  [![scroll-view]][scroll-view] | `ScrollView` | Scroll view
[`@react-web/slider`↗](./packages/slider/README.md) | [![slider]][slider] | `Slider` | Slider
[`@react-web/stylesheet`↗](./packages/stylesheet/README.md) | [![stylesheet]][stylesheet] |  `StyleSheet` |  样式表
[`@react-web/svg`↗](./packages/svg/README.md)<sup>[2]</sup> |  WIP<sup>[3]</sup> | `Svg` | Svg
[`@react-web/text`↗](./packages/text/README.md) | [![text]][text] | `Text`  |  文字
[`@react-web/text-input`↗](./packages/text-input/README.md) | [![text-input]][text-input] | `TextInput` |  AppRegistry
[`@react-web/touchable`↗](./packages/touchable/README.md) | [![touchable]][touchable] | `{ TouchableOpacity }` | Touchable
[`@react-web/triangle-arrow`↗](./packages/triangle-arrow/README.md)<sup>[2]</sup> | [![triangle-arrow]][triangle-arrow] |  `TriangleArrow` |  Triangle arrow
[`@react-web/utils`↗](./packages/utils/README.md) | [![utils]][utils] | `Utils` | Utils
[`@react-web/view`↗](./packages/view/README.md) | [![view]][view] |  `View` |  视图

[components]: https://img.shields.io/npm/v/@react-web/components.svg
[activity-indicator]: https://img.shields.io/npm/v/@react-web/activity-indicator.svg
[app-registry]: https://img.shields.io/npm/v/@react-web/app-registry.svg
[async-loader]: https://img.shields.io/npm/v/@react-web/async-loader.svg
[box]: https://img.shields.io/npm/v/@react-web/box.svg
[button]: https://img.shields.io/npm/v/@react-web/button.svg
[file-picker]: https://img.shields.io/npm/v/@react-web/file-picker.svg
[grid]: https://img.shields.io/npm/v/@react-web/grid.svg
[image]: https://img.shields.io/npm/v/@react-web/image.svg
[menu]: https://img.shields.io/npm/v/@react-web/menu.svg
[platform]: https://img.shields.io/npm/v/@react-web/platform.svg
[popup]: https://img.shields.io/npm/v/@react-web/popup.svg
[promise-view]: https://img.shields.io/npm/v/@react-web/promise-view.svg
[scroll-view]: https://img.shields.io/npm/v/@react-web/scroll-view.svg
[slider]: https://img.shields.io/npm/v/@react-web/slider.svg
[stylesheet]: https://img.shields.io/npm/v/@react-web/stylesheet.svg
[svg]: https://img.shields.io/npm/v/@react-web/svg.svg
[text]: https://img.shields.io/npm/v/@react-web/text.svg
[text-input]: https://img.shields.io/npm/v/@react-web/text-input.svg
[touchable]: https://img.shields.io/npm/v/@react-web/touchable.svg
[triangle-arrow]:https://img.shields.io/npm/v/@react-web/triangle-arrow.svg
[utils]: https://img.shields.io/npm/v/@react-web/utils.svg
[view]: https://img.shields.io/npm/v/@react-web/view.svg

* <small>[1] : `@react-web/components` includes all the components, exclude [2]</small>
* <small>[2] : Not included in `@react-web/components`, should be installed separately.</small>
* <small>[3] : Working in progress, not published.</small>

## License

[MIT](LICENSE)