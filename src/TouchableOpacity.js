import React, { Component } from 'react'
import View from './View'
import StyleSheet from './StyleSheet'

class TouchableOpacity extends Component {

  static defaultProps = {
    onMouseDown: () => { },
    onMouseUp: () => { },
    onTouchStart: () => { },
    onTouchLeave: () => { },
    onTouchEnd: () => { },
  }

  onMouseDown = (e) => {
    this.getRef().style.opacity = 0.5
    this.props.onMouseDown(e)
  }

  onMouseUp = (e) => {
    this.getRef().style.opacity = 1
    this.props.onMouseUp(e)
  }

  onMouseUp = (e) => {
    this.getRef().style.opacity = 1
    this.props.onMouseUp(e)
  }
  onMouseLeave = (e) => {
    this.getRef().style.opacity = 1
    this.props.onMouseLeave(e)
  }

  onTouchStart = (e) => {
    this.getRef().style.opacity = 0.5
    this.props.onTouchStart(e)
  }
  onTouchEnd = (e) => {
    this.getRef().style.opacity = 1
    this.props.onTouchEnd(e)
  }

  getRef = (ref) => {
    if (!ref) return this._ref.getRef()
    return this._ref = ref
  }

  render() {
    const { onMouseDown, onMouseUp, onTouchEnd, onMouseLeave, onTouchStart, } = this
    const props = Object.assign({}, this.props, {
      onMouseDown,
      onMouseUp,
      onTouchEnd,
      onTouchStart,
      onMouseLeave
    })

    props.style = StyleSheet.assign([{
      transition: 'opacity .15s ease'
    }, this.props.style])

    return (
      <View
        ref={this.getRef}
        {...props}
      />
    )
  }
}

export default TouchableOpacity
