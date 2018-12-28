import { StyleSheet } from 'react-native'
import colors from 'style/colors'

export default StyleSheet.create({
  button: {
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  disabled: {
    backgroundColor: colors.lightGray,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  success: {
    backgroundColor: colors.green,
  },
  warning: {
    backgroundColor: colors.orange,
  },
  alert: {
    backgroundColor: colors.red,
  },
})
