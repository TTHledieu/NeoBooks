import { StyleSheet } from 'react-native'
import colors from 'style/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingTop: 5,
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
  },
  apreciateBooks: {
    fontSize: 17,
    textAlign: 'left',
    margin: 20,
  },
  list: {
    flex: 5,
    backgroundColor: colors.white,
  },
})
