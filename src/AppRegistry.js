import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createHashHistory, createBrowserHistory, createMemoryHistory } from 'history'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux'
import warning from 'warning'
import ReduxThunk from 'redux-thunk'


const AppRegistry = {
  registerComponent: (appKey, componentProvider, config) => {
    const App = componentProvider()
    const { historyType } = App
    const AppWithRouter = withRouter(App)
    const history = historyType === 'hash' ?
      createHashHistory() : historyType === 'browser' ? 
        createBrowserHistory() : 
          createMemoryHistory()

    const loggerMiddleware = store => next => action => {
      if (process.env.NODE_ENV !== 'production') console.warn(action)
      return next(action)
    }

    const create = global.devToolsExtension ? global.devToolsExtension()(createStore) : createStore

    const createReducer = (asyncReducers) => combineReducers({
      router: routerReducer,
      routing: routerReducer,
      ...asyncReducers
    })

    const createStoreWithMiddleware = applyMiddleware(
      ReduxThunk,
      loggerMiddleware,
      routerMiddleware(history)
    )(create)

    const store = createStoreWithMiddleware(createReducer({}), {})
    store.asyncReducers = {}

    const injectReducer = (name, asyncReducer, force = false) => {
      warning(!store.hasOwnProperty(name) || force, `${name} has been injected, if you want to replace it, use force=true argument`)
      store.asyncReducers[name] = asyncReducer
      store.replaceReducer(createReducer(store.asyncReducers))
    }

    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppWithRouter store={store} injectReducer={injectReducer} />
        </ConnectedRouter>
      </Provider>,
      config.mountPoint
    )
  }
}

export default AppRegistry