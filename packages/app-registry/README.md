# @react-web/app-registry

## Usage

```js
import { AppRegistry } from '@react-web/components'

const App = () => {
  return (
    <View >hello world!</View>
  )
}

AppRegistry.registerComponent('app', () => App, {
  mountPoint: document.getElementById('app')
})
```

## License
[MIT↗](../../LICENSE)