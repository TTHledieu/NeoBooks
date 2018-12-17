// @flow

import { StyleSheet } from 'react-native';
import colors from 'style/colors';

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
  body: {
    flex: 6,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
  },
  subtitle: {
    fontSize: 20,
    color: colors.white,
  },
  author: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.primary,
  },
  commentary: {
    flex: 9,
  },
  commentaryDesc: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.black,
    lineHeight: 22,
    paddingHorizontal: 5,
  },
  commentaryTitle: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.black,
    lineHeight: 22,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  watermark: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  watermarkNB: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.lighterBlue,
    lineHeight: 22,
    paddingTop: 20,
  },
});
