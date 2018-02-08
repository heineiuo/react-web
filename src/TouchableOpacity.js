import React, { Component } from 'react'
import View from './View'
import StyleSheet from './StyleSheet'

class TouchableOpacity extends Component {

  render(){
    return (
      <View>{children}</View>
    )
  }
}

const styles = StyleSheet.create({

})

export default TouchableOpacity
