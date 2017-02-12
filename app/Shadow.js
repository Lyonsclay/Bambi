import ART from 'ReactNativeART'
import React from 'react'
const {
  Path,
  Shape,
  RadialGradient,
} = ART

export default({x, y, ,r}) => {
  const path = new Path(x, y, r)
    .moveTo(x - r, y)
    .arc(2 * r, 0, 1, 1)
    .arc(-2 * r, 0, 1, 1)
    .close()
  )

  const radial = new RadialGradient(
  )
}
