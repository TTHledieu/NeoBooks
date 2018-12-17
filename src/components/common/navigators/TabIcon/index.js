// @flow

import React from 'react';
import type { Node } from 'react';
import { Ionicons } from '@expo/vector-icons';
import ioniconsByPlatform from 'utils/ionicons';

type Props = {
  name: string,
  tintColor: string,
};

const TabIcon = ({ name, tintColor }: Props): Node => (
  <Ionicons
    name={ioniconsByPlatform(name, false)}
    size={26}
    style={{ color: tintColor }}
  />
);

export default TabIcon;
