// @unstable

import React, { Component } from 'react'
import View from './View'
import StyleSheet from './StyleSheet'

class TriangleArrow extends Component {
  static defaultProps = {
    wrapperStyle: {
      position: 'absolute'
    },
    border: '1px solid #e6e6e6',
    width: 14,
    boxShadow: '0 0 5px 1px rgba(0,0,0,.0975)',
  }

  render() {
    const { border, width, boxShadow, wrapperStyle } = this.props
    return (
      <View style={wrapperStyle}>
        <View style={[styles.mask]} />
        <View style={[styles.shadow, { boxShadow, border }]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  shadow: {
    position: 'absolute',
    background: '#fff',
    border: '1px solid #e6e6e6',
    boxShadow: '0 0 5px 1px rgba(0,0,0,.0975)',
    height: '14px',
    left: '4px',
    top: '8px',
    transform: 'rotate(45deg)',
    width: '14px',
    zIndex: -1,
  },
  mask: {
    position: 'absolute',
    borderColor: 'transparent transparent #fff',
    borderStyle: 'solid',
    borderWidth: '0 10px 10px',
    height: 0,
    top: '6px',
    left: '2px',
    width: 0,
    zIndex: 1,
  }
})

export default TriangleArrow