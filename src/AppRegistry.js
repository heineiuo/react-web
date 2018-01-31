import ReactDOM from 'react-dom'

const AppRegistry = {
  registerComponent: (appKey, componentProvider, config) => {
    const App = componentProvider()
    const { historyType } = App
    
    const store = {}
    ReactDOM.render(
      <Provider store={store}>
        <App store={store} />
      </Provider>,
      config.mountPoint
    )
  }
}

export default AppRegistry