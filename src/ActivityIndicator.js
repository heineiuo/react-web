import React, { Component } from 'react'
import StyleSheet from './StyleSheet'

const bars = Array.from({ length: 12 }, v => 0)

class ActivityIndicator extends Component {

  static defaultProps = {
    color: 'black',
    size: 60
  }

  render() {

    const { color, size } = this.props

    const spinnerStyle = {
      width: size,
      height: size,
      marginLeft: - size * 0.15,
      marginTop: - size * 0.15
    }

    return (
      <div style={[styles.spinner, spinnerStyle]}>
        {bars.map((item, index) => {
          return (
            <div
              key={index}
              style={[styles.spinner__bar, {
                backgroundColor: color,
                animationDelay: (index - 12) / 10 + 's',
                transform: 'rotate(' + (index * 30) + 'deg) translate(146%)'
              }]}
            />
          )
        })}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },

  spinner__bar: {
    // TODO rewrite by js
    animationName: [{
      '0%': {
        opacity: 1
      },
      '100%': {
        opacity: 0.15,
      },
    }],
    animationDuration: '1.2s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    borderRadius: '5px',
    backgroundColor: 'black',
    position: 'absolute',
    width: '20%',
    height: '7.8%',
  }
})

export default ActivityIndicator
