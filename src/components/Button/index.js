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
  disabled?: boolean,
}

const Button = ({
  onPress,
  variant,
  children,
  style,
  disabled,
}: Props): Node => (
  <TouchableOpacity
    onPress={onPress}
    style={[style, styles.button, styles[variant], disabled && styles.disabled]}
    disabled={disabled}
  >
    <Text style={{ fontSize: 17, color: colors.white }}>{children}</Text>
  </TouchableOpacity>
)

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
}

export default Button
