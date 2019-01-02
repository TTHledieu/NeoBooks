// @flow

import React from 'react'
import { TabNavigator } from 'react-navigation'
import Focus from 'containers/views/Focus'
import Commentary from 'containers/views/Commentary'
import UserCommentary from 'containers/views/UserCommentary'
import TabIcon from 'components/navigators/TabIcon'
import colors from 'style/colors'
import TabTop from '../TabTop'

const DetailsNavigator = TabNavigator(
  {
    Focus: {
      // $FlowFixMe
      screen: Focus,
      navigationOptions: {
        title: 'Infos',
        tabBarIcon: props => <TabIcon {...props} name="book" />,
      },
    },
    Commentary: {
      // $FlowFixMe
      screen: Commentary,
      navigationOptions: {
        title: "Avis d'un critique",
        tabBarIcon: props => <TabIcon {...props} name="chatbubbles" />,
      },
    },
    UserCommentary: {
      screen: UserCommentary,
      navigationOptions: {
        title: 'Un avis ?',
        tabBarIcon: props => <TabIcon {...props} name="megaphone" />,
      },
    },
  },
  {
    initialRouteName: 'Focus',
    tabBarComponent: TabTop,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.black,
      showIcon: true,
    },
  },
)

export default DetailsNavigator
