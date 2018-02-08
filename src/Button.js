import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StyleSheet from './StyleSheet'
import { omit } from './Utils'

class Button extends Component {

  static defaultProps = {
    type: 'normal',
    noBackground: false,
    level: 'primary',
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
    const { children, type, noBackground, level, style } = this.props
    const BackArrow = this.renderBackArrow
    if (type === 'back-arrow') return <BackArrow />
    const props = omit(this.props, [
      'isHovered',
      'type', 'state', 'dispatch', 'noBackground', 'level', 'renderIcon'
    ])

    props.style = StyleSheet.assign([
      baseStyle,
      noBackground && styles.noBackground,
      levels[`level_${level}`],
      style
    ])

    const Icon = this.props.renderIcon
    return (
      <button {...props}>
        <Icon fill={props.style.color} />
        {children}
      </button>
    )
  }
}

const baseStyle = {
  cursor: "pointer",
  outline: 'none'
}

const levels = {
  level_primary: { color: '#537994', ":hover": { color: '#2e4453' } },
  level_secondary: { color: '#537994', ":hover": { color: '#2e4453' } },
  level_warning: { color: '#537994', ":hover": { color: '#2e4453' } },
  level_danger: { color: '#537994', ":hover": { color: '#d94f4f' } },
}

const styles = StyleSheet.create({
  noBackground: {
    fontSize: 14,
    border: 0,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    ":hover": {
      cursor: 'pointer',
    }
  },
})

export default Button
