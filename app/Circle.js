var ReactART = require('ReactNativeART')
import { StyleSheet } from 'react-native'
import React from 'react'
const {
  Surface,
  Shape,
  Path,
  Text,
  Group,
  LinearGradient,
  RadialGradient,
} = ReactART


var circlePath = new Path()
  .moveTo(100, 200)
  .arc(200, 0, 50, 50)
  .arc(-200, 0, 50, 50)
  .close()

export default ({x, y, r}) => {
  var gradient = new LinearGradient(
    {
      '.1': 'rgba(20, 20, 20, 0.5)',
      '.8': 'rgba(255,255,255,0.7)'
    },
    x, y, r, r, x, y
  )

  var radial = new RadialGradient(
    {
      '0.4': 'rgba(255, 255, 255, .1)',
      '.7': 'rgba(255,255,255, 0.5)',
      '.5': 'rgba(20, 20, 20, 0.5)',
    },
    x, y, 2 * r, 2 * r, x, y
  )

  var path = new Path(x, y, r)
    .moveTo(x - r, y)
    .arc(2 * r, 0, 1, 1)
    .arc(-2 * r, 0, 1, 1)
    .close()

  var  shadow = new Path(x, y, r)
    .moveTo(x - r, y)
    .arc(2 * r, 0, 1, 1)
    .arc(-2 * r, 0, 1, 1)
    .close()


  return (
    <Group
    >
      <Shape
        d={shadow}
        fill={radial}
      />
      <Shape
        d={path}
        fill={gradient}
        stroke="rgba(90, 190, 20, 0.3)"
        strokeWidth="2"
      />
    </Group>
  )


}

const styles = StyleSheet.create({
  shape: {
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  group: {
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    backgroundColor: 'green',
    marginTop: 400,
    opacity: 0.1,

  }
});
