// @flow

import React from 'react'
import type { Node } from 'react'

import { TouchableOpacity } from 'react-native'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import styles from './styles'

type Props = {|
  onPress: () => void | any | Promise<any>,
  children: React$Element<any>,
  variant?: 'primary' | 'success' | 'warning' | 'alert',
  style?: ViewStyleProp,
  disabled?: boolean,
|}

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
    {children}
  </TouchableOpacity>
)

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  style: {},
}

export default Button
