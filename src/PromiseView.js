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

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.promise != this.props.promise) {
      this.initListener(nextProps)
    }
  }

  componentWillMount = () => {
    this.initListener(this.props)
  }

  initListener = (props) => {
    if (this.listener) this.listener.removeAllListeners()
    if (!(props.promise instanceof Promise)) {
      this.setState({ status: 'none' })
      if (props.onChange) props.onChange('none')
      this.listener = 'none'
    } else {
      this.setState({ status: 'pending' })
      if (props.onChange) props.onChange('pending')
      this.listener = __unstable_P2E(props.promise)
      this.listener.on('change', (status, result) => {
        this.setState({ status, result })
        if (props.onChange) props.onChange(status, result)
      })
    }
  }

  componentWillUnmount = () => {
    this.listener.removeAllListeners()
  }

  render() {
    const { render, children } = this.props
    if (typeof render === 'function') return render(this.state.status, this.state.result)
    if (typeof children === 'function') return children(this.state.status, this.state.result)
    return this.props.children
  }
}

export default PromiseView
