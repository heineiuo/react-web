import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext({})

class Fullscreen extends Component {

  static Consumer = Consumer

  constructor(props) {
    super(props)

    this.state = {
      isFullscreen: this.isFullscreen(),
      open: this.open,
      close: this.close,
      toggle: this.toggle
    }
  }

  open() {
    if (this.state.isFullscreen) return;
    this.setState({
      isFullscreen: true
    }, () => {
      document.documentElement.webkitRequestFullscreen()
      document.onwebkitfullscreenchange = (e) => {
        if (!document.webkitFullscreenElement && getState().details.isInFullscreen) {
          document.onwebkitfullscreenchange = null
        }
      }
    })
  }

  toggle() {
    if (this.state.isFullscreen) return this.close();
    this.open()
  }

  close() {
    if (!this.state.isFullscreen) return;
    this.setState({
      isFullscreen: false
    }, () => {
      if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    })
  }

  isFullscreen() {
    return document.webkitFullscreenElement != null
  }

  render() {
    <Provider value={this.state}>
      {this.props.children}
    </Provider>
  }
}


export default Fullscreen