# @react-web/stylesheet

## Install

```sh
→ npm i @react-web/stylesheet 
```


## API

* `StyleSheet.create(styleMap: Object) styles: object`
* `StyleSheet.assign(styleList | styleMap) prefixedStyle: object`
* `StyleSheet.flatten(nestedStyleList: Array): styleList: Array`

Example:

```js
import { StyleSheet, View } from 'react-bucket'

const styles = StyleSheet.create({
  btn: {
    height: 36,
    textAlign: 'center'
  },
  btn_red: {
    backgroundColor: '#F33'
  }
})

ReactDOM.render(
  <View style={[styles.btn, styles.btn_red]}>Click Me!</View>
)

```

## LICENSE
[MIT↗](../../LICENSE)