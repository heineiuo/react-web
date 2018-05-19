import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyleSheet from '@react-web/stylesheet'
import PromiseView from '@react-web/promise-view'
import View from '@react-web/view'
import ActivityIndicator from '@react-web/activity-indicator'
import isBase64 from 'is-base64'

const cache = {}

class Image extends Component {

  static propTypes = {
    style: PropTypes.object,
    alt: PropTypes.string,
    source: PropTypes.array.isRequired
  }

  state = {
    // fetchCache: 'only-if-cached'
    fetchCache: 'force-cache'
  }

  componentDidMount = () => {
    this.loadImage()
  }

  getTrueUrl = () => {
    const { source } = this.props
    return source[0].uri
  }

  loadImage = () => {
    this.setState({
      promise: new Promise((resolve, reject) => {
        const url = this.getTrueUrl()
        if (!url) return reject(new Error('No Address'))

        if (cache[url]) {
          return resolve(cache[url])
        }

        if (isBase64(url)) {
          return resolve(url)
        }

        // console.log(`<Image>: cache: ${this.state.fetchCache}`)
        fetch(url, {
          cache: this.state.fetchCache
        }).then((res) => {
          return res.blob()
        }).then((imgBlob) => {
          const objectURL = URL.createObjectURL(imgBlob)
          cache[url] = objectURL
          resolve(objectURL)
        }).catch((e) => {
          reject(e)
        })
      })
    })
  }

  _renderLoading = (props) => {
    return (
      <View style={[styles.img, this.props.style]}>
        <ActivityIndicator size={30} />
      </View>
    )
  }

  _renderFail = (props) => {
    return (
      <View
        style={[styles.img, this.props.style]}
      >图片加载失败</View>
    )
  }

  render() {
    const Loading = this.props.renderLoading || this._renderLoading
    const Fail = this.props.renderFail || this._renderFail

    return (
      <PromiseView
        promise={this.state.promise}
        render={(status, result) => {
          if (status === 'resolved') {
            return (
              <img
                style={StyleSheet.assign([styles.img, this.props.style])}
                src={result}
                alt={this.props.alt}
              />
            )
          }
          if (status === 'rejected') return <Fail error={result} />
          if (status === 'pending') return <Loading />
          return null
        }}
      />
    )
  }
}


const styles = StyleSheet.create({
  img: {

  }
})

export default Image