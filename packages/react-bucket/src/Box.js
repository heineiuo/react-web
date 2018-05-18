import React, { Component } from 'react'
import StyleSheet from './StyleSheet'
import PropTypes from 'prop-types'
import View from './View'

class Box extends Component {

  static defaultProps = {
    renderOption: () => null
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
    renderOption: PropTypes.func
  }

  scrollToEnd = () => {
    let lastEl = this.module.lastElementChild
    if (lastEl) {
      this.module.scrollTop = lastEl.offsetTop
    }
  }

  render() {
    const Option = this.props.renderOption
    return (
      <View style={styles.box}>
        <View style={[styles.card, styles.card_compact, styles.box__header]}>
          <View style={[styles.box__label]}>{this.props.label}</View>
          <View>
            <Option></Option>
          </View>
        </View>
        <div 
          ref={r => this.module = r}
          style={StyleSheet.assign([styles.card, styles.box__module])}
        >{this.props.children}</div>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    boxShadow: '0 0 0 1px rgba(200,215,225,0.5), 0 1px 2px #e9eff3'
  },

  card_compact: {
    padding: '16px 24px',
    position: 'relative',
  },

  box__header: {
    lineHeight: '28px',
    paddingtop: 11,
    paddingBottom: 11,
    display: 'flex',
    justifyContent: 'space-between',
  },

  box__label: {
    color: '#2e4453',
    fontSize: 14
  }
})

export default Box
