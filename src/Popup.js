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
    renderOverlay: () => null,
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

  getWrapperRef = ref => this.wrapper = ReactDOM.findDOMNode(ref)
  getPortalRef = ref => this.portal = ReactDOM.findDOMNode(ref)

  getOverlayMountWrapper = () => {
    return this.portal
  }

  onDocumentClick = (e) => {
    if (!(this.portal.contains(e.target) || this.wrapper.contains(e.target)) && this.state.open) {
      this.onCloseOverlay(e)
    }
  }

  onClick = (e) => {
    this.setState({ open: !this.state.open }, () => {
      this.props.onToggle({ open: this.state.open })
    })
    this.props.onClick(e)
  }

  onMouseEnter = e => {
    this.setState({ open: true }, () => {
      this.props.onToggle({ open: this.state.open })
    })
  }

  onMouseLeaveWrapper = e => {
    if (!!this.portal && this.portal.contains(e.target)) {
      return false
    }
    this.onCloseOverlay(e)
  }

  onMouseLeavePortal = e => {
    if (this.wrapper.contains(e.target)) {
      return false
    }
    this.onCloseOverlay(e)
  }

  closeOverlay = () => {
    this.setState({ open: !this.state.open }, () => {
      this.props.onToggle({ open: this.state.open })
    })
  }

  onCloseOverlay = e => {
    this.closeOverlay()
  }

  render() {
    const { className, style, renderOverlay, action } = this.props
    const { open } = this.state
    const WrapperComponent = this.props.component || View

    const portalStyle = !open ? { display: 'none' } : {
      position: 'absolute',
      width: this.state.width,
      height: this.state.height,
      top: this.state.top + this.state.height + this.props.offsetTop,
      left: this.state.left + this.props.offsetLeft,
    }
    const wrapperEventProps = {}
    const portalEventProps = {}
    if (action.includes('click')) {
      wrapperEventProps.onClick = this.onClick
    }
    if (action.includes('hover')) {
      wrapperEventProps.onMouseEnter = this.onMouseEnter
      wrapperEventProps.onMouseLeave = this.onMouseLeaveWrapper
      portalEventProps.onMouseLeave = this.onMouseLeavePortal
    }

    const overlayProps = {
      closePopup: this.closeOverlay,
      getMountWrapper: this.getOverlayMountWrapper,
      portalStyle,
    }
    return [
      <WrapperComponent
        key="trigger"
        ref={this.getWrapperRef}
        className={className}
        {...wrapperEventProps}
      >
        {this.props.children}
      </WrapperComponent>,
      ReactDOM.createPortal(
        <View
          ref={this.getPortalRef}
          {...portalEventProps}
        >
          {!open ? null : renderOverlay(overlayProps)}
        </View>,
        this.el
      )
    ]
  }
}

export default Popup
