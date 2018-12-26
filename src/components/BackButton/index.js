// @flow

import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import { withNavigation } from 'react-navigation'
import ioniconsByPlatform from 'utils/ionicons'
import colors from 'style/colors'
import styles from './styles'

type Props = {
  navigation: Object,
}

const BackButton = ({ navigation }: Props): Node => (
  <View style={styles.backButton}>
    <TouchableHighlight
      style={styles.roundButton}
      underlayColor="transparent"
      onPress={() => navigation.goBack(null)}
    >
      <Ionicons
        name={ioniconsByPlatform(
          navigation.state.routeName === 'Focus' ? 'arrow-down' : 'arrow-back',
          false,
        )}
        size={35}
        color={colors.primary}
      />
    </TouchableHighlight>
  </View>
)

export default withNavigation(BackButton)
