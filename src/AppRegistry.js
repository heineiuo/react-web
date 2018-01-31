import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

const AppRegistry = {
  registerComponent_: (appKey, componentProvider, config) => {
    const App = componentProvider()
    const { historyType } = App

    const store = {}
    ReactDOM.render(
      <Provider store={store}>
        <App store={store} />
      </Provider>,
      config.mountPoint
    )
  },

  registerComponent: (appKey, componentProvider, config) => {
    const App = componentProvider()
    ReactDOM.render(
      <App />,
      config.mountPoint
    )
  }
}

export default AppRegistry