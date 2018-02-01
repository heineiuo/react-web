import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as ReactRouter from 'react-router-dom'
import * as ReactRouterRedux from 'react-router-redux'
import Modal from 'react-modal'
import System from 'systemjs'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as aphrodite from 'aphrodite/no-important'
import PropTypes from 'prop-types'

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

const { css, StyleSheet } = aphrodite
const { Route, Link, Switch: RouteSwitch } = ReactRouter




/**
 * Integration Components
 */
import Button from './Button'
import View from './View'
import ListView from './ListView'
import Text from './Text'
import TextInput from './TextInput'
import AppRegistry from './AppRegistry'

export {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  React,
  ReactDOM,
  ReactRouter,
  ReactRedux,
  ReactRouterRedux,
  Component,
  Modal,
  Redux,
  StyleSheet,
  css,
  PropTypes,
  connect,
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
  { name: 'aphrodite', default: aphrodite },
]

systemRegisties.forEach(item => {
  System.registry.set(
    System.resolveSync(item.name),
    System.newModule(item.default)
  )
})