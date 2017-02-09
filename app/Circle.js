var ReactART = require('ReactNativeART')
import { StyleSheet } from 'react-native'
import React from 'react'
const {
  Surface,
  Shape,
  Path,
  Text,
  Group,
  RadialGradient,
} = ReactART


var circlePath = new Path()
  .moveTo(100, 200)
  .arc(200, 0, 50, 50)
  .arc(-200, 0, 50, 50)
  .close()

export default ({x, y, r}) => {
  var gradient = new RadialGradient(
    {
      '.1': 'black',
      '1': 'rgba(255,255,255,0)'
    },
    "100","100","0","0","0","200"
  )

  var path = new Path(x, y, r)
    .moveTo(x, y)
    .arc(2 * r, 0, 1, 1)
    .arc(-2 * r, 0, 1, 1)
    .close()

  return (
    <Group>
    <Shape
      d={path}
      fill={gradient}
      stroke="orange"
      style={styles.shape}
    />
    <Text
      font="32px Helvetica"
      fill="gray"
     >Boingo</Text>
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
});
