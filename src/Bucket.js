import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as ReactRouter from 'react-router-dom'
import Modal from 'react-modal'
import System from 'systemjs/dist/system.js'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as aphrodite from 'aphrodite/no-important'
import PropTypes from 'prop-types'
import ReactMotion from 'react-motion'

import Button from './Button'
import View from './View'
import ListView from './ListView'
import Text from './Text'
import TextInput from './TextInput'
import AppRegistry from './AppRegistry'

global.React = React
global.ReactDOM = ReactDOM

const { css, StyleSheet } = aphrodite
const { Motion, spring } = ReactMotion

Motion.spring = spring

const systemRegisties = [
  { name: 'react', default: React },
  { name: 'react-dom', default: ReactDOM },
  { name: 'react-router-dom', default: ReactRouter },
  { name: 'react-redux', default: ReactRedux },
  { name: 'react-router-redux', default: ReactRouterRedux },
  { name: 'redux', default: Redux },
  { name: 'react-modal', default: ReactModal },
  { name: 'aphrodite', default: aphrodite },
]

systemRegisties.forEach(item => {
  System.registry.set(
    System.resolveSync(item.name),
    System.newModule(item.default)
  )
})

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
  Motion,
  Component,
  Modal,
  Route,
  Switch,
  Redux,
  StyleSheet,
  css,
  PropTypes,
}