import React, { Component, createElement } from 'react'
import omit from 'lodash/omit'
import StyleSheet from '@react-web/stylesheet'

class View extends Component {

  static defaultProps = {
    enableHover: false,
    inline: false
  }

  state = {
    isHovered: false
  }

  _mouseenter = (e) => {
    this.setState({ isHovered: true })
    this.props.onStateChange && this.props.onStateChange({ isHovered: true })
    this.props.onMouseEnter && this.props.onMouseEnter(e)
  }

  _mouseleave = (e) => {
    this.setState({ isHovered: false })
    this.props.onStateChange && this.props.onStateChange({ isHovered: false })
    this.props.onMouseLeave && this.props.onMouseLeave(e)
  }

  getRef = () => {
    return this._ref
  }

  render() {
    const { isHovered } = this.state
    const { children, enableHover, style, className, hoverStyle, inline } = this.props
    const el = typeof children === 'function' ? children({
      isHovered
    }) : children

    let type = inline ? 'span' : 'div'

    const props = omit(this.props, ['enableHover', 'style', 'inline', 'hoverStyle'])
    props.style = StyleSheet.assign([style, isHovered && hoverStyle])
    props.ref = ref => this._ref = ref

    if (enableHover) {
      Object.assign(props, {
        onMouseEnter: this._mouseenter,
        onMouseLeave: this._mouseleave
      })
    }

    return createElement(type, props, el)
  }
}

export default View
