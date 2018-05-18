import React, { Component } from 'react'
import StyleSheet from '@react-web/stylesheet'
import { Keyframes, Frame } from 'react-keyframes'
import View from '@react-web/view'

const bars = Array.from({ length: 12 }, v => 0)

class ActivityIndicator extends Component {

  static defaultProps = {
    color: 'black',
    size: 60,
    delay: 0,
    animating: true,
    style: {}
  }


  renderStatic = ({ increment }) => {
    const { color } = this.props

    return bars.map((item, index) => {
      let remainder = (index + increment) % 11
      let opacity = remainder < 6 ? 0.12 : remainder / 11
      return (
        <View
          key={index}
          style={[styles.spinner__bar, {
            backgroundColor: color,
            transform: 'rotate(' + (index * 30) + 'deg)',
            opacity: opacity
          }]}
        />
      )
    })
  }

  render() {
    const Static = this.renderStatic
    const { size, animating, style, delay } = this.props

    if (!animating) return null

    return (
      <View style={[styles.spinner, style, {
        transform: `scale(${size / 120})`
      }]}>
        <Keyframes
          delay={delay}
          component="div"
          loop={true}
        >
          <Frame duration={100}><Static rotate={0} increment={10} /></Frame>
          <Frame duration={100}><Static rotate={180} increment={8} /></Frame>
          <Frame duration={100}><Static rotate={180} increment={6} /></Frame>
          <Frame duration={100}><Static rotate={180} increment={4} /></Frame>
          <Frame duration={100}><Static rotate={180} increment={2} /></Frame>
          <Frame duration={100}><Static rotate={180} increment={0} /></Frame>
        </Keyframes>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  spinner: {
    position: 'relative',
    // transformOrigin: `60px 60px`,
    // transform: `rotate(${rotate}deg)`,    
    // transition: 'all 0.8s linear',
    width: 120,
    height: 120,
  },

  spinner__bar: {
    transformOrigin: '5px 60px',
    transition: 'all 0.12s linear',
    borderRadius: '5px',
    // backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 60,
    marginLeft: -5,
    width: 10,
    height: 30,
  }
})

export default ActivityIndicator
