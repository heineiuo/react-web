import React, { Component } from 'react'

class Slider extends Component {

  render() {
    const props = Object.assign({
      min: 1,
      max: 10,
      step: '0.0.1',
    }, this.props)

    return (
      <input {...props} type='range' />
    )
  }
}

export default Slider