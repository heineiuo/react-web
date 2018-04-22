import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { omit } from './Utils'
import StyleSheet from './StyleSheet'
import View from './View'

class TextInput extends Component {

  state = {
    isFocused: false
  }

  static defaultProps = {
    type: 'normal',
    withAffix: false,
    enableFocus: true,
    affix: ''
  }

  static propTypes = {
    enableFocus: PropTypes.bool,
    focusStyle: PropTypes.any,
    affix: PropTypes.string,
    withAffix: PropTypes.bool,
    type: PropTypes.string,
    dispatch: PropTypes.func
  }

  _onfocus = (e) => {
    if (this.props.type === 'password') {
      this._input.removeAttribute('readonly')
    }
    this.setState({ isFocused: true })
    this.props.onFocus && this.props.onFocus(e)
  }

  _onblur = (e) => {
    this.setState({ isFocused: false })
    if (this.props.type === 'password') {
      this._input.setAttribute('readonly', true)
    }
    this.props.onBlur && this.props.onBlur(e)
  }

  focus = () => {
    this._input.focus()
  }

  blur = () => {
    this._input.blur()
  }

  getValue = () => {
    return this._input.value
  }

  renderWithAffix = (props) => {
    return (
      <View style={[styles.inputWrapper, styles.inputWrapper_withAffix]}>
        <View>{this.props.affix}</View>
        <input type="text" ref={ref => this._input = ref} {...props.inputProps} />
      </View>
    )
  }

  render() {
    const { isFocused } = this.state
    const { children, enableFocus, type, withAffix, style, focusStyle, color } = this.props
    const inputProps = omit(this.props, Object.keys(TextInput.propTypes).concat([]))

    inputProps.style = StyleSheet.assign([styles.input, style, isFocused && [styles.input_focus, focusStyle]])
    inputProps.type = this.props.type

    if (withAffix) {
      return this.renderWithAffix({ inputProps })
    }

    if (enableFocus) {
      Object.assign(inputProps, {
        onFocus: this._onfocus,
        onBlur: this._onblur
      })
    }

    if (type === 'password') {
      inputProps.readOnly = true
    }

    return (
      <input
        ref={ref => this._input = ref}
        {...inputProps}
      />
    )
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    display: 'flex',
  },
  inputWrapper_withAffix: {
    position: 'relative',
    background: '#f3f6f8',
    border: '1px solid #c8d7e1',
    color: '#4f748e',
    padding: '8px 14px',
    whiteSpace: 'nowrap',
    flex: 1,
    fontSize: 16,
    lineHeight: 1.5,
  },
  input: {
    minHeight: 32,
    padding: 4,
    boxSizing: 'border-box',
    outline: 'none',
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#a0a0a0',
    display: 'block',
    width: '100%',
    borderStyle: 'solid'
  },
  input_focus: {
    borderColor: '#505050'
  }
})

export default TextInput
