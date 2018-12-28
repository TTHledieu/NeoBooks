// @flow

import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

type Props = {
  onChange: string => void,
  value: string,
  style?: {},
  placeholder: string,
  mode: string,
}

const Input = ({ onChange, value, style, placeholder, mode }: Props): Node => (
  <TextInput
    style={[styles.input, style]}
    onChangeText={onChange}
    value={value}
    placeholder={mode === 'text' ? placeholder : '******'}
    secureTextEntry={mode === 'password'}
  />
)

Input.defaultProps = {
  style: {},
}

export default Input
