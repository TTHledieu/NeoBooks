// @flow

import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import styles from './styles'

type Props = {
  source: string,
  onPress: () => void,
}

const CircleAvatar = ({ source, onPress }: Props): Node => (
  <TouchableOpacity onPress={onPress}>
    <Image
      style={styles.avatar}
      source={{
        uri:
          source ||
          'https://www.thesprucepets.com/thmb/yLAAAtxUYcgjaJHFjFEXCohq0yE=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-626916125-5b3a4a8046e0fb00379f682d.jpg',
      }}
    />
  </TouchableOpacity>
)

export default CircleAvatar
