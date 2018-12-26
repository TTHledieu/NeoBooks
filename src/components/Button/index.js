// @flow

import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import type { StyleSheet } from 'react-native'
import colors from 'style/colors'
import styles from './styles'

type Props = {
  onPress: () => true,
  children: React.Node,
  variant?: 'primary' | 'success' | 'warning' | 'alert',
  style: StyleSheet,
}

const Button = ({ onPress, variant, children, style }: Props): Node => (
  <TouchableOpacity
    onPress={onPress}
    style={[style, styles.button, styles[variant]]}
  >
    <Text style={{ color: colors.white }}>{children}</Text>
  </TouchableOpacity>
)

Button.defaultProps = {
  variant: 'primary',
}

export default Button
