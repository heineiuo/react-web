import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StyleSheet from '@react-web/stylesheet'
import omit from 'lodash/omit'
import View from '@react-web/view'
import { TouchableOpacity } from '@react-web/touchable'

class Button extends Component {

  static defaultProps = {
    color: '#1194f6',
    disabled: false,
    style: {},
    renderIcon: () => null,
  }

  renderBackArrow = (props) => {
    const { width, height } = this.props
    return (
      <svg height={width} width={height} viewBox="0 0 24 24">
        <g>
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
        </g>
      </svg>
    )
  }

  render() {
    const { children, type, noBackground, level, style, color, } = this.props
    const BackArrow = this.renderBackArrow
    if (type === 'back-arrow') return <BackArrow />
    const props = omit(this.props, [
      'state', 'dispatch', 'renderIcon', 'color', 'disabled', 'style'
    ])

    const Icon = this.props.renderIcon
    return (
      <TouchableOpacity
        {...props}
        style={StyleSheet.assign([styles.btn, {
          color: '#FFF',
          borderColor: color,
          backgroundColor: color
        }, style])}
      >
        <Icon />
        {children}
      </TouchableOpacity>
    )
  }
}

const baseStyle = {
  cursor: "pointer",
  outline: 'none'
}

export const colors = {
  primary: "#537994",
  secondary: "#537994",
  warning: "#537994",
  danger: "#537994",
}

const styles = StyleSheet.create({
  btn: {
    cursor: 'pointer',
    fontSize: 14,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 30,
    borderRadius: 3,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderStyle: 'solid',
  },

  btn_text: {
    // alignSelf: '',
  }
})

export default Button
