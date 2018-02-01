import React, { Component } from 'react'

class Image extends Component {
  componentWillMount = () => {

  }

  loadImage = () => {

    fetch('flowers.jpg', myInit).then(function (response) {
      return response.blob()
    }).then(function (myBlob) {
      var objectURL = URL.createObjectURL(myBlob)
      myImage.src = objectURL
    })
  }

  render() {

  }
}
