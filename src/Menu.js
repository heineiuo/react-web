import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import View from './View'
import StyleSheet from './StyleSheet'

class Menu extends Component {

  static defaultProps = {
    isRoot: true,
    style: {},
    arrowStyle: {},
    top: 0,
    left: 0,
    width: 200,
    parentRight: 0,
    parentWidth: 0,
    parentTop: 0,
    onClickItem: () => { },
    renderItem: (props) => {
      return (
        <div>{props.name}</div>
      )
    }
  }

  state = {
    refTop: 0,
    updateTimes: 0,
    visibleStyle: {}
  }

  getMountWrapper = () => {
    if (this.props.getMountWrapper) return this.props.getMountWrapper()
    if (this._mountWrapper) return this._mountWrapper
    const id = '__menu'
    this._mountWrapper = document.getElementById(id)
    if (!this._mountWrapper) {
      this._mountWrapper = document.createElement('div')
      this._mountWrapper.id = id
      document.body.appendChild(this._mountWrapper)
      return this._mountWrapper
    }
    return this._mountWrapper
  }

  componentWillMount = () => {
    this._mountPoint = document.createElement('div')
    this.getMountWrapper().appendChild(this._mountPoint)
  }

  componentWillUnmount = () => {
    this._mountPoint.remove()
  }

  componentDidMount = () => {
    this.checkPosition()
  }

  componentDidUpdate = () => {
    // this.checkPosition()
  }


  checkPosition = () => {
    if (!this.state.visible && !!this.refRoot) {
      const refRootNode = ReactDOM.findDOMNode(this.refRoot)
      const { width, height, left, top } = refRootNode.getBoundingClientRect()
      // console.log(refRootNode, rect)
      const visibleStyle = {
        width,
        height,
        left,
        top,
      }
      const { innerWidth, innerHeight } = window
      if (left + width > innerWidth) {
        visibleStyle.left -= (this.props.parentWidth || 0)
        visibleStyle.left -= width
      }
      if (top + height > innerHeight) {
        visibleStyle.top = innerHeight - height
      }

      this.setState((prevState) => {
        return {
          visible: true,
          visibleStyle,
          updateTimes: prevState.updateTimes++
        }
      })
    }
  }

  onMouseEnter = (e, refName) => {
    const top = e.target.getBoundingClientRect().top
    this.setState((prevState) => {
      // const isSame = prevState.hovered === refName 
      const isSame = false
      return {
        hovered: isSame ? null : refName,
        refTop: isSame ? 0 : top,
        showHoverStyle: !isSame
      }
    })
  }

  onMouseLeave = (e, refName) => {
    this.setState({
      showHoverStyle: false
    })
  }

  renderArrow = (props) => {
    const { arrowStyle } = this.props
    return (
      <svg
        viewBox="0 0 20 20"
        width="8"
        height="8"
        style={StyleSheet.assign({ fill: props.fill, marginLeft: 16 }, arrowStyle)}
      >
        <path d="M0 0 20 10 0 20 Z"></path>
      </svg>
    )
  }

  render() {
    const {
      isRoot,
      isBranch,
      renderItem,
      data,
      parentTop = 0,
      parentRight = 0,
      style,
      onClickItem
    } = this.props
    const Arrow = this.renderArrow

    const {
      refTop,
      visible,
      visibleStyle,
      showHoverStyle,
      hovered,
    } = this.state

    const mergedVisibleStyle = {
      visibility: visible ? 'visible' : 'hidden',
      left: visible ? visibleStyle.left : parentRight,
      top: visible ? visibleStyle.top : parentTop,
    }

    return ReactDOM.createPortal(
      <View
        ref={ref => this.refRoot = ref}
        // data-id={`m${this.props.id}`}
        // data-parentright={this.props.parentRight}
        // data-parenttop={this.props.parentTop}
        // data-parentwidth={this.props.parentWidth}
        style={[styles.menu, style, mergedVisibleStyle]}
      >
        {data.map((item, index) => {
          const refName = `ref${index}`
          const isHovered = hovered === refName
          const hasChildren = item.children && item.children.length > 0
          return (
            <View
              key={item.key}
              style={[styles.menuItem, isHovered && (showHoverStyle || hasChildren) && styles.menuItem[":hover"]]}
              ref={(ref) => this[refName] = ref}
              onMouseEnter={(e) => this.onMouseEnter(e, refName)}
              onMouseLeave={(e) => this.onMouseLeave(e, refName)}
            >
              <View>
                <View onClick={(e) => onClickItem(e, item)} style={styles.menuItemWrapper}>
                  {renderItem({ item })}
                  {hasChildren ? <Arrow fill={isHovered ? '#FFF' : '#666'} /> : null}
                </View>
                {(hasChildren && isHovered) ?
                  <Menu
                    onClickItem={onClickItem}
                    key={item.key}
                    id={item.key}
                    isRoot={false}
                    getMountWrapper={this.props.getMountWrapper}
                    parentWidth={visibleStyle.width}
                    parentTop={refTop - 4}
                    parentRight={visibleStyle.left + visibleStyle.width}
                    renderItem={renderItem}
                    data={item.children}
                  /> :
                  null
                }
              </View>
            </View>
          )
        })}
      </View>,
      this._mountPoint
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    boxShadow: '0 0 14px 0 rgba(33, 33, 33, 0.4)',
    borderRadius: 4,
    padding: 4,
    backgroundColor: '#fafafa',
    position: 'absolute',
  },

  menuItem: {
    whiteSpace: 'nowrap',
    cursor: 'default',
    marginLeft: -4,
    marginRight: -4,
    height: 24,
    lineHeight: '24px',
    fontSize: 14,
    color: '#333',
    backgroundColor: '#fafafa',
    ":hover": {
      backgroundColor: '#3E9AFF',
      color: '#FFF'
    }
  },

  menuItemWrapper: {
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default Menu