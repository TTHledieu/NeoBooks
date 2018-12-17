// @flow

import { StyleSheet } from 'react-native';
import colors from 'style/colors';

export default StyleSheet.create({
  icon: {
    height: 36,
    width: 36,
  },
  indicatorContainer: {
    flex: 1,
  },
  indicator: {
    backgroundColor: colors.black,
    marginTop: 'auto',
    height: 2,
  },
  tabBar: {
    shadowColor: 'transparent',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.primary,
    backgroundColor: null,
  },
  tabBarTab: {
    borderWidth: 0,
    width: 70,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  safeAreaViewContainer: {
    backgroundColor: colors.white,
  },
});
