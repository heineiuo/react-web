import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as ReactRouter from 'react-router-dom'
import * as ReactRouterRedux from 'react-router-redux'
import Modal from 'react-modal'
import System from 'systemjs'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import PropTypes from 'prop-types'
import * as Utils from './Utils'
import StyleSheet from './StyleSheet'

/**
 * Motion
 */
import * as ReactMotion from 'react-motion'
const { Motion, spring } = ReactMotion
export { Motion, spring }

/**
 * redux
 */
const { connect } = ReactRedux
const { bindActionCreators } = Redux

global.React = React
global.ReactDOM = ReactDOM

const { Route, Link, Switch: RouteSwitch } = ReactRouter




/**
 * Integration Components
 */
export * from './Components'

/**
 * AppRegistry
 */
import AppRegistry from './AppRegistry'

export {
  AppRegistry,
  React,
  ReactDOM,
  ReactRouter,
  ReactRedux,
  ReactRouterRedux,
  Component,
  Modal,
  Redux,
  StyleSheet,
  PropTypes,
  connect,
  Utils,
  bindActionCreators,
}


/**
 * System registry
 */
const systemRegisties = [
  { name: 'react', default: React },
  { name: 'react-dom', default: ReactDOM },
  { name: 'react-router-dom', default: ReactRouter },
  { name: 'react-redux', default: ReactRedux },
  { name: 'react-router-redux', default: ReactRouterRedux },
  { name: 'redux', default: Redux },
  { name: 'react-modal', default: Modal },
]

systemRegisties.forEach(item => {
  System.registry.set(
    System.resolveSync(item.name),
    System.newModule(item.default)
  )
})