import React from 'react'
import View from '@react-web/view'
import Button from '@react-web/button'
import ScrollView from '@react-web/scroll-view'
import TextInput from '@react-web/text-input'
import FilePicker from '@react-web/file-picker'
import Box from '@react-web/box'
import Menu from '@react-web/menu'
import Popup from '@react-web/popup'
import { TouchableOpacity } from '@react-web/touchable'
import PromiseView from '@react-web/promise-view'
import Text from '@react-web/text'
import Image from '@react-web/image'
import Slider from '@react-web/slider'
import ActivityIndicator from '@react-web/activity-indicator'
import AppRegistry from '@react-web/app-registry'
import * as Utils from '@react-web/utils'
import StyleSheet from '@react-web/stylesheet'

const Overlay = Popup
const Style = (props) => <style {...props}>{props.children}</style>

export {
  ActivityIndicator,
  AppRegistry,
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
  Utils,
  Style,
  StyleSheet,
}


