import React, { Component } from 'react'
import EventEmitter from 'events'

export const __unstable_P2E = (promise) => {
  const emitter = new EventEmitter()

  promise.then(res => {
    emitter.emit('change', 'resolved', res)
  }).catch(err => {
    emitter.emit('change', 'rejected', err)
  })

  return emitter
}

class PromiseView extends Component {
  static defaultProps = {
    onStateChange: new Function()
  }

  state = {}

  componentDidMount = () => {
    this.initListener(this.props)
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.promise != prevProps.promise) {
      this.initListener(this.props)
    }
  }

  initListener = (props) => {
    if (this.listener) this.listener.removeAllListeners()
    if (!(props.promise instanceof Promise)) {
      this.setState({ status: 'none' })
      props.onStateChange('none')
      this.listener = null
    } else {
      this.setState({ status: 'pending' })
      props.onStateChange('pending')
      this.listener = __unstable_P2E(props.promise)
      this.listener.on('change', (status, result) => {
        this.setState({ status, result })
        props.onStateChange(status, result)
      })
    }
  }

  componentWillUnmount = () => {
    if (this.listener) this.listener.removeAllListeners()
  }

  render() {
    const { render, children = null } = this.props
    if (typeof render === 'function') return render(this.state.status, this.state.result)
    if (typeof children === 'function') return children(this.state.status, this.state.result)
    return children
  }
}

export default PromiseView
