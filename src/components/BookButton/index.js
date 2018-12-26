// @flow

import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { withNavigation } from 'react-navigation'

import ioniconsByPlatform from 'utils/ionicons'
import colors from 'style/colors'
import styles from './styles'

type Props = {
  book: Object,
  index: number,
  navigation: Object,
}

const BookButton = ({ book, index, navigation }: Props): Node => (
  <TouchableHighlight
    onPress={() => navigation.navigate('DetailsScreen', { book })}
  >
    <View
      style={[
        styles.elem,
        { backgroundColor: index % 2 ? colors.white : colors.lightGray },
      ]}
    >
      <View style={styles.textElem}>
        <Text style={styles.titleElem}>{book.title}</Text>
        <Text style={styles.authorElem}>{book.author}</Text>
      </View>
      <View style={styles.iconElem}>
        <Ionicons
          name={ioniconsByPlatform('arrow-forward', false)}
          size={36}
          color={colors.black}
        />
      </View>
    </View>
  </TouchableHighlight>
)

export default withNavigation(BookButton)
