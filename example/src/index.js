import { React, AppRegistry, ReactRouter, StyleSheet, View } from 'react-bucket'
import Menu from './Menu'
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

          <Route path="/" exact>
            <View style={[{ boxShadow: '0 0 10px 0 #DDD', backgroundColor: '#00F'}, {backgroundColor: '#FFF'}]}>
              <View >
                <Link className={StyleSheet.assign(styles.btn)} to="/a">a</Link>
              </View>
              <View>
                <Link className={StyleSheet.assign(styles.btn)} to="/menu">Menu</Link>
              </View>
            </View>
          </Route>

          <Route path="/a">
            <div >
              <Link style={StyleSheet.assign(styles.btn)} to="/">首页</Link>
            </div>
          </Route>



          <Route path="/menu" component={Menu}></Route>
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