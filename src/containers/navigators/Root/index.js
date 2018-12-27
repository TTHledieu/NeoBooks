// @flow

import React from 'react'
import { TabNavigator } from 'react-navigation'
import List from 'containers/views/List'
import Profile from 'containers/views/Profile'
import TabIcon from 'components/navigators/TabIcon'
import colors from 'style/colors'
import TabTop from '../TabTop'

const RootNavigator = TabNavigator(
  {
    List: {
      screen: List,
      navigationOptions: {
        title: 'Liste',
        tabBarIcon: props => <TabIcon {...props} name="list" />,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        tabBarIcon: props => <TabIcon {...props} name="contact" />,
      },
    },
  },
  {
    initialRouteName: 'List',
    tabBarComponent: TabTop,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.black,
      showIcon: true,
    },
  },
)

export default RootNavigator
