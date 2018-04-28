import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as ReactRouter from 'react-router-dom'
import * as ReactRouterRedux from 'react-router-redux'
import Modal from 'react-modal'
import System from 'systemjs'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import PropTypes from 'prop-types'
import * as history from 'history'
import ReduxThunk from 'redux-thunk'
import { Adopt, adopt } from 'react-adopt'
import * as ReactMotion from 'react-motion'
import * as Keyframes from 'react-keyframes'

/**
 * Motion
 */
const { Motion, spring } = ReactMotion

/**
 * redux
 */
const { connect } = ReactRedux
const { bindActionCreators } = Redux

/**
 * Router
 */
const { Route, Link, Switch: RouteSwitch } = ReactRouter

/**
 * System registry
 */
const systemRegisties = [
  { name: 'systemjs', default: System, aliasName: [] },
  { name: 'react', default: React, aliasName: ['React'] },
  { name: 'react-dom', default: ReactDOM, aliasName: ['ReactDOM'] },
  { name: 'react-router-dom', default: ReactRouter, aliasName: ['ReactRouterDOM'] },
  { name: 'react-redux', default: ReactRedux, aliasName: ['ReactRedux'] },
  { name: 'react-router-redux', default: ReactRouterRedux, aliasName: ['ReactRouterRedux'] },
  { name: 'redux', default: Redux, aliasName: ['Redux'] },
  { name: 'react-modal', default: Modal, aliasName: ['ReactModal'] },
  { name: 'react-motion', default: ReactMotion, aliasName: ['ReactMotion'] },
  { name: 'redux-thunk', default: ReduxThunk, aliasName: ['ReduxThunk'] },
  { name: 'prop-types', default: PropTypes, aliasName: ['PropTypes'] }
]


systemRegisties.forEach(item => {
  global[item.name] = item.default
  item.aliasName.forEach(name => {
    global[name] = item.default
  })
  System.registry.set(
    System.resolveSync(item.name),
    System.newModule(item.default)
  )
})


/**
 * Export Integration Components
 */
export * from './Components'

/**
 * Export Third-party Components
 */
export {
  Adopt,
  React,
  ReactDOM,
  ReactRouter,
  ReactRedux,
  ReactRouterRedux,
  PropTypes,
  Component,
  Modal,
  Motion,
  Redux,
  connect,
  adopt,
  Keyframes,
  bindActionCreators,
  spring,
}

