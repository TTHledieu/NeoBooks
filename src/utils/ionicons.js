// @flow

import { Platform } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export default (name: string, focused: boolean = false): string => {
  if (Platform.OS === 'ios') {
    return focused ? `ios-${name}` : `ios-${name}-outline`;
  }
  return `md-${name}`;
};
