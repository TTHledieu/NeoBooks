// @flow

import React from 'react'
import type { Node } from 'react'
import { TextInput } from 'react-native'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import styles from './styles'

type Props = {|
  onChange: string => void,
  value: string,
  style?: ViewStyleProp,
  placeholder?: string,
  mode: string,
|}

const Input = ({ onChange, value, style, placeholder, mode }: Props): Node => (
  <TextInput
    style={[styles.input, style]}
    onChangeText={onChange}
    value={value}
    placeholder={mode === 'text' ? placeholder : '******'}
    secureTextEntry={mode === 'password'}
    autoCapitalize="none"
  />
)

Input.defaultProps = {
  style: {},
  placeholder: '',
}

export default Input
