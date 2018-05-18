import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import throttle from 'lodash/throttle'

class ScrollView extends Component {

  static defaultProps = {
    onEndReached: () => { }
  }

  onWheel = e => {
    if (this._tick) return false
    requestAnimationFrame(() => {
      this._tick = true
      this.update(e)
    })
  }
  componentDidMount = () => {
    this.update()
    this.scrollTop = this.wrapper.scrollTop
  }

  update = (e) => {
    this._tick = false
    const scrollTop = this.wrapper.scrollTop
    const wrapperHeight = this.wrapper.offsetHeight
    const childHeight = ReactDOM.findDOMNode(this.child).offsetHeight
    if (this.scrollTop !== scrollTop && scrollTop + wrapperHeight > childHeight - 200) {
      this.props.onEndReached()
    }
    this.scrollTop = scrollTop
  }

  _tick = false

  refWrapper = ref => this.wrapper = ref
  refChild = ref => this.child = ref

  render() {
    const { style = {}, children, width } = this.props
    const clonedChildren = React.cloneElement(children({
      width,
      scrollTop: this.scrollTop
    }), { ref: this.refChild })
    return (
      <div
        ref={this.refWrapper}
        onWheel={this.onWheel}
        onScroll={this.onWheel}
        style={Object.assign({ overflowY: 'auto' }, style)}
      >{clonedChildren}</div>
    )
  }
}

export default ScrollView
