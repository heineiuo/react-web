import { React, AppRegistry, ReactRouter, StyleSheet, css } from 'react-bucket'
const { Switch, Route, Link, withRouter } = ReactRouter


const styles = StyleSheet.create({
  btn: {
    color: '#FFF',
    padding: '6px 10px',
    backgroundColor: '#3344ee'
  }
})

class App extends React.Component {
  static historyType = 'hash'

  render() {
    console.log(this.props)
    
    return (
      <div>
        <Switch>
          <Route path="/a">
            <div >
              <Link className={css(styles.btn)} to="/">首页</Link>
            </div>
          </Route>

          <Route path="/" exact>
            <div >
              <Link className={css(styles.btn)} to="/a">a</Link>
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