import React from 'react'
import View from './View'
import Button from './Button'
import ScrollView from './ScrollView'
import TextInput from './TextInput'
import FilePicker from './FilePicker'
import Box from './Box'
import StyleSheet from './StyleSheet'

export {
  StyleSheet,
  View,
  Button,
  Box,
  FilePicker,
  ScrollView,
  TextInput,
}

export const Text = (props) => <span {...props}>{props.children}</span>

export const Style = (props) => <style {...props}>{props.children}</style>

export const Image = (props) => {
  const validProps = {}
  Object.keys(props).forEach(key => {
    if (!['url'].includes(key)) {
      validProps[key] = props[key]
    }
  })
  return (
    <img src={props.url} {...validProps} />
  )
}
