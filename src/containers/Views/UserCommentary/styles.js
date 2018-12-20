import { StyleSheet } from 'react-native'
import colors from 'style/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingTop: 5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 15,
    color: colors.white,
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.white,
  },
  list: {
    flex: 8,
    backgroundColor: colors.white,
  },
})
