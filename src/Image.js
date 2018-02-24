import React, { Component } from 'react'
import StyleSheet from './StyleSheet'

class Image extends Component {

  state = {
    status: 0
  }

  componentWillMount = () => {
    this.loadImage()
  }

  getTrueUrl = () => {
    const { url } = this.props
    if (typeof url === 'string') return url
    if (url instanceof Array) {
      return url[0].url
    }
    this.setState({
      status: 1
    })
  }

  loadImage = () => {
    const url = this.getTrueUrl()
    if (!url) return false
    fetch(url).then((res) => {
      return res.blob()
    }).then((imgBlob) => {
      const objectURL = URL.createObjectURL(imgBlob)
      this.setState({
        status: 2,
        src: objectURL
      })
    })
  }

  render() {
    const { status, src } = this.state

    return (
      <img
        styles={StyleSheet.assign([styles.img, this.props.style])}
        src={this.state.src}
        alt={this.props.alt}
      />
    )
  }
}


const styles = StyleSheet.create({
  img: {

  }
})