
import { React, AppRegistry, ReactRouter } from 'react-bucket'

const { Switch, Route, Link, withRouter } = ReactRouter

class App extends React.Component {
  static historyType = 'hash'

  render() {
    return (
      <div>
        <Switch>
          <Route path="/a">
            <div>
              <Link to="/">首页</Link>
            </div>
          </Route>

          <Route path="/" exact>
            <div>
              <Link to="/a">a</Link>
            </div>
          </Route>

          <Route >
            <div> not found </div>
          </Route>
        </Switch>
      </div>
    )
  }
}

AppRegistry.registerComponent('app', () => App, {
  mountPoint: document.getElementById('app'),
})