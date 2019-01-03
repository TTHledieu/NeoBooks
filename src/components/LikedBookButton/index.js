// @flow

import React from 'react'
import type { Node } from 'react'
import { Text, View, Image } from 'react-native'
import colors from 'style/colors'
import clap from 'assets/clap.png'
import styles from './styles'

type Props = {|
  book: {
    title: string,
    clap: number,
  },
  index: number,
|}

const LikedBookButton = ({ book, index }: Props): Node => (
  <View
    style={[
      styles.elem,
      { backgroundColor: index % 2 ? colors.lightGray : colors.white },
    ]}
  >
    <View style={styles.textElem}>
      <Text style={styles.titleElem}>{book.title}</Text>
    </View>
    <View style={styles.iconElem}>
      <Text style={{ fontSize: 18 }}>{`${book.clap} `}</Text>
      <View style={styles.clapButton}>
        <Image source={clap} style={styles.clapImage} />
      </View>
    </View>
  </View>
)

export default LikedBookButton
