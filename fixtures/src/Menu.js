import React, { Component } from 'react'
import { View } from 'react-bucket'
import Popup from '../../src/Popup'
import Menu from '../../src/Menu'

class MenuExample extends Component {

  onClickItem = (e, item) => {
    console.log(item)
  }

  render() {
    return (
      <Popup
        renderOverlay={(props) => {
          const { portalStyle } = props
          return (
            <Menu
              parentRight={portalStyle.left}
              parentWidth={0}
              parentTop={portalStyle.top}
              getMountWrapper={props.getMountWrapper}
              data={[
                {
                  key: '1', name: '菜单1', children: [
                    { key: '1.1', name: '菜单1.1' }
                  ]
                },
                {
                  key: '2', name: '菜单2', children: [
                    {
                      key: '2.1', name: '菜单2.1', children: [
                        { key: '2.1.1', name: '菜单2.1.1' }
                      ]
                    }
                  ]
                },
                {
                  key: '3', name: '菜单3'
                },
              ]}
              onClickItem={this.onClickItem}
              renderItem={({ item }) => {
                return (
                  <div>{item.name}</div>
                )
              }}
            />
          )
        }}
      >
        <View>触发</View>
      </Popup>
    )
  }
}

export default MenuExample