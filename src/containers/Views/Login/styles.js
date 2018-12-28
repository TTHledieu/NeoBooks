// @flow

import { StyleSheet } from 'react-native'
import colors from 'style/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 4,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: '700',
    color: colors.darkerBlue,
    letterSpacing: 2,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.white,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  body: {
    flex: 6,
    backgroundColor: colors.white,
  },
  formElem: {
    flex: 3,
    margin: 20,
  },
  headline: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.darkerBlue,
    letterSpacing: 1,
  },
  formElemButton: {
    flex: 2,
    margin: 20,
  },
  registerLink: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  link: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.primary,
  },
})
