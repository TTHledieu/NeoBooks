// @flow

import React from 'react'
import type { Node } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'
import ioniconsByPlatform from 'utils/ionicons'
import type { Book } from 'utils/books'
import colors from 'style/colors'
import styles from './styles'

type Props = {|
  book: Book,
  index: number,
  navigation: Object,
|}

const LikedBookButton = ({ book, index, navigation }: Props): Node => (
  <TouchableHighlight
    onPress={() => navigation.navigate('DetailsScreen', { book })}
  >
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
        <Ionicons
          name={ioniconsByPlatform('arrow-forward', false)}
          size={16}
          color={colors.black}
        />
      </View>
    </View>
  </TouchableHighlight>
)

export default withNavigation(LikedBookButton)
