import React from 'react'
import View from './View'
import Button from './Button'
import ScrollView from './ScrollView'
import TextInput from './TextInput'
import FilePicker from './FilePicker'
import Box from './Box'
import Menu from './Menu'
import Popup from './Popup'
import TouchableOpacity from './TouchableOpacity'
import PromiseView from './PromiseView'
import Text from './Text'
import Image from './Image'
import Slider from './Slider'

const Overlay = Popup

export {
  View,
  Button,
  Box,
  FilePicker,
  ScrollView,
  TextInput,
  Text,
  Image,
  Menu,
  Popup,
  Overlay,
  Slider,
  TouchableOpacity,
  PromiseView,
}


export const Style = (props) => <style {...props}>{props.children}</style>
