import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import View from './View'
import StyleSheet from './StyleSheet'

const noop = () => { }

/**
 * WARNING: React v16+ required
 */
class Popup extends Component {

  static defaultProps = {
    overlay: null,
    onClick: noop,
    onToggle: () => { },
    offsetTop: 0,
    offsetLeft: 0,
    className: '',
    component: 'div',
    action: ['click']
  }

  state = {
    open: false
  }

  componentWillMount = () => {
    this.el = document.createElement('div')
  }


  updatePosition = () => {
    const rect = this.wrapper.getBoundingClientRect()
    if (rect.left != this.state.left || rect.top != this.state.top) {
      this.setState({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      })
    }
  }

  getMountWrapper = () => {
    if (this._mountWrapper) return this._mountWrapper
    const id = '__popup'
    this._mountWrapper = document.getElementById(id)
    if (!this._mountWrapper) {
      this._mountWrapper = document.createElement('div')
      this._mountWrapper.id = id
      document.body.appendChild(this._mountWrapper)
      return this._mountWrapper
    }
    return this._mountWrapper
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick, false)
    this.getMountWrapper().appendChild(this.el)
    this.updatePosition()
  }

  componentDidUpdate = () => {
    this.updatePosition()
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick, false)
    this.el.remove()
  }

  getWrapper = ref => this.wrapper = ReactDOM.findDOMNode(ref)
  getPortal = ref => this.portal = ReactDOM.findDOMNode(ref)

  getOverlayMountWrapper = () => {
    return this.portal
  }

  onDocumentClick = (e) => {
    if (!(this.portal.contains(e.target) || this.wrapper.contains(e.target)) && this.state.open) {
      this.onCloseOverlay(e)
    }
  }

  onClick = (e) => {
    if (this.props.action.includes('click')) {
      this.setState({ open: !this.state.open }, () => {
        this.props.onToggle({ open: this.state.open })
      })
      this.props.onClick(e)
    }
  }

  onMouseEnter = e => {
    if (this.props.action.includes('hover')) {
      this.setState({ open: true }, () => {
        this.props.onToggle({ open: this.state.open })
      })
    }
  }

  onMouseLeave = e => {
    if (this.props.action.includes('hover')) {
      if (!this.wrapper.contains(e.target) && (!this.portal || !this.portal.contains(e.target))) {
        this.setState({ open: false }, () => {
          this.props.onToggle({ open: this.state.open })
        })
      }
    }
  }

  closeOverlay = () => {
    this.setState({ open: !this.state.open }, () => {
      this.props.onToggle({ open: this.state.open })
    })
  }

  onCloseOverlay = e => {
    this.closeOverlay()
    e.preventDefault()
    e.stopPropagation()
  }

  render() {
    const { className, style, renderOverlay } = this.props
    const { open } = this.state
    const WrapperComponent = this.props.component || View

    const portalStyle = !open ? { display: 'none' } : {
      position: 'absolute',
      width: this.state.width,
      height: this.state.height,
      top: this.state.top + this.state.height + this.props.offsetTop,
      left: this.state.left + this.props.offsetLeft,
    }

    const overlayProps = {
      getMountWrapper: this.getOverlayMountWrapper,
      portalStyle,
    }
    return [
      <WrapperComponent
        key="trigger"
        onClick={this.onClick}
        ref={this.getWrapper}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={className}
      >
        {this.props.children}
      </WrapperComponent>,
      ReactDOM.createPortal(
        <View
          ref={this.getPortal}
          onMouseLeave={this.onMouseLeave}
          // style={portalStyle}
        >
          {!open ? null : renderOverlay(overlayProps)}
        </View>,
        this.el
      )
    ]
  }
}

export default Popup
