// @unstable

import React, { Component } from 'react'
import UAParser from 'ua-parser-js'

const parser = new UAParser()
const result = parser.getResult()

const OS = result.os.name
const OSVersion = result.os.version
const Browser = result.browser.name
const BrowserVersion = result.browser.version
const DeviceType = result.device.type
const DeviceModel = result.device.model
const DeviceVendor = result.device.vendor
const Engine = result.engine.name
const EngineVersion = result.engine.version
const CPU = result.cpu.architecture
const UA = result.ua

const props = {
  OS,
  OSVersion,
  Browser,
  BrowserVersion,
  DeviceType,
  DeviceModel,
  DeviceVendor,
  Engine,
  EngineVersion,
  CPU,
  UA
}

class Platform extends Component {
  static OS = OS
  static OSVersion = OSVersion
  static Browser = Browser
  static BrowserVersion = BrowserVersion
  static DeviceType = DeviceType
  static DeviceModel = DeviceModel
  static DeviceVendor = DeviceVendor
  static Engine = Engine
  static EngineVersion = EngineVersion
  static CPU = CPU
  static UA = UA

  static defaultProps = {
    rules: {},
    className: '',
    style: {}
  }

  static select = (selectMap) => {
    return Object.keys(selectMap).find(key => {
      return key === this.OS
    })
  }

  render() {
    const { children, rules, className, style } = this.props
    if (typeof children === 'function') return children(props)
    const illegal = Object.keys(rules).find(key => props[key] !== rules[key])
    if (illegal) return null;
    if (typeof children === 'string' || children instanceof Array) return React.createElement('div', { className, style }, children);
    return React.cloneElement(children)
  }
}

export default Platform