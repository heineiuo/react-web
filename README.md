# react-bucket
React全家桶

这个项目短期的计划是给中文用户用的，方便身边的朋友。长期未考虑。


## Install

#### Browser/Production

```html
<!-- no react.js, no react-dom.js, no babel-polyfill -->
<script src="https://cdn.jsdelivr.net/npm/react-bucket@0.0.9/umd/react-bucket.production.js" />

<script src="/your/app.js" />
```

## Document

### Component


Component | 描述 | props
---------|----------|---------
 `View` | 视图 | `[]`
 `Text` | 文字 | `[]`
 `ReactRouter.Link` | 链接 | `[to]`
 `ReactRouter.Switch` | 组件切换 | `[]`
 
 ### API

API | 描述 | 注意
---------|----------|---------
 `React` |  | 
 `ReactRouter` |  | 
 `StyleSheet` |  | 
 `css` |  | 
 `AppRegistry` |  | 


#### <Menu>

```js
import { Menu } from 'react-bucket'
```

#### <StyleSheet>

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


#### <View>

```js
import { View } from 'react-bucket'
// import { View } from 'react-bucket/Components'
```

#### <TextInput>

```js
import { TextInput } from 'react-bucket'
```

#### <Button>

```js
import { Button } from 'react-bucket'
```


#### <Text>

```js
import { Text } from 'react-bucket'
```


#### <Popup>

```js
import { Popup } from 'react-bucket'
```




#### <Image>

```js
import { Image } from 'react-bucket'
```

#### <PromiseView>

```js
import { PromiseView } from 'react-bucket'

class Example extends Component {

  render() {
    return (
      <PromiseView
      promise={a_promise}
      render={(status, result) => {
        return (
          <View>status: {status}</View>
        )
      }}
    />
    )
  }
}

```


#### <Slider>

```js
import { Slider } from 'react-bucket'

```

#### <ActivityIndicator>

```js
import { ActivityIndicator } from 'react-bucket'

```

#### <AsyncLoader>

```js
import { AsyncLoader } from 'react-bucket'

```


#### <ScrollView>

```js
import { ScrollView } from 'react-bucket'

```

#### <FilePicker>

```js
import { FilePicker } from 'react-bucket'

```

### API

#### AppRegistry

```js
import { React, AppRegistry } from 'react-bucket'

const App = () => {
  return (
    <View >hello world!</View>
  )
}

AppRegistry.registerComponent('app', () => App, {
  mountPoint: document.getElementById('app')
})
```

#### Utils

* `Utils.flatten`

#### Webpack





## License

[MIT](LICENSE)