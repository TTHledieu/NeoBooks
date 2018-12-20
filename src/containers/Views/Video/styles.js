// @flow

import { StyleSheet } from 'react-native'
import colors from 'style/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 6.5,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 3.5,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
  },
  subtitle: {
    fontSize: 20,
    color: colors.white,
  },
  cta: {
    fontSize: 15,
    paddingTop: 55,
    color: colors.white,
  },
  footer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  watermark: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  watermarkNB: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkerBlue,
    lineHeight: 22,
    paddingTop: 20,
  },
})
