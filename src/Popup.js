import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import View from './View'
import StyleSheet from './StyleSheet'
import pick from 'lodash/pick'
import isEqual from 'lodash/isEqual'

const noop = () => { }

const pickRect = (obj) => pick(obj, ['top', 'left', 'width', 'height'])

const id = 'ReactBucketPopup'

/**
 * @class Popup 
 * @summary 弹出层
 * @description
 * IMPORTANT: React v16+ required
 */
class Popup extends Component {

  static defaultProps = {
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
    const rect = pickRect(this.wrapper.getBoundingClientRect())
    const prevState = pickRect(this.state)
    if (!isEqual(prevState, rect)) {
      this.setState(rect)
    }
  }

  getMountWrapper = () => {
    if (this._mountWrapper) return this._mountWrapper
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
    document.addEventListener('click', this.handleDocumentClick, false)
    document.addEventListener('mousemove', this.handleDocumentMouseMove, false)
    this.getMountWrapper().appendChild(this.el)
    this.updatePosition()
  }

  componentDidUpdate = () => {
    this.updatePosition()
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false)
    this.el.remove()
  }

  getWrapperRef = ref => this.wrapper = ReactDOM.findDOMNode(ref)
  getPortalRef = ref => this.portal = ReactDOM.findDOMNode(ref)

  getOverlayMountWrapper = () => {
    return this.portal
  }

  handleDocumentClick = (e) => {
    if (!(this.portal.contains(e.target) || this.wrapper.contains(e.target)) && this.state.open) {
      this.handleCloseOverlay(e)
    }
  }

  handleClick = (e) => {
    this.setState({ open: !this.state.open }, () => {
      this.props.onToggle({ open: this.state.open })
    })
    this.props.onClick(e)
  }

  handleMouseEnter = (e) => {
    this.setState({ open: true }, () => {
      this.props.onToggle({ open: this.state.open })
    })
  }

  handleDocumentMouseMove = (e) => {
    if (!this.props.action.includes('hover')) return false
    const isOutWrapper = (() => {
      if (!this.wrapper) return true
      if (this.wrapper.contains(e.target)) return false
      return true
    })()

    const isOutPortal = (() => {
      if (!this.portal) return true
      if (this.portal.contains(e.target)) return false
      return true
    })()

    if (isOutWrapper && isOutPortal) {
      if (this.state.open) this.handleCloseOverlay(e)
    }
  }

  closeOverlay = () => {
    this.setState({ open: !this.state.open }, () => {
      this.props.onToggle({ open: this.state.open })
    })
  }

  handleCloseOverlay = (e) => {
    this.closeOverlay()
  }

  render() {
    const { className, style, renderOverlay, action } = this.props
    const { open } = this.state
    const WrapperComponent = this.props.component || View

    const wrapperEventProps = {}
    const portalEventProps = {}
    if (action.includes('click')) {
      wrapperEventProps.onClick = this.handleClick
    }
    if (action.includes('hover')) {
      wrapperEventProps.onMouseEnter = this.handleMouseEnter
      // wrapperEventProps.onMouseLeave = this.handleMouseOutWrapper
      // portalEventProps.onMouseLeave = this.handleMouseOutPortal
    }

    const overlayProps = {
      closePopup: this.closeOverlay,
      getMountWrapper: this.getOverlayMountWrapper,
      portalStyle: !open ? { display: 'none' } : {
        position: 'absolute',
        width: this.state.width,
        height: this.state.height,
        top: this.state.top + this.state.height + this.props.offsetTop,
        left: this.state.left + this.props.offsetLeft,
      }
    }

    return (
      <Fragment>
        <WrapperComponent
          ref={this.getWrapperRef}
          className={className}
          {...wrapperEventProps}
        >
          {this.props.children}
        </WrapperComponent>
        {ReactDOM.createPortal(
          <View
            ref={this.getPortalRef}
            {...portalEventProps}
          >
            {!open ? null : renderOverlay(overlayProps)}
          </View>,
          this.el
        )}
      </Fragment>
    )
  }
}

export default Popup
