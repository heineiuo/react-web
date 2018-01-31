
import { AppRegistry } from 'react-bucket'

const App = () => (
  <div>hello world</div>
)

AppRegistry.registerComponent('app', () => App, {
  mountPoint: document.getElementById('app')
})