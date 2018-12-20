// @flow

import React from 'react'
import { TabNavigator } from 'react-navigation'
import Focus from 'containers/Views/Focus'
import Commentary from 'containers/Views/Commentary'
import Video from 'containers/Views/Video'
import UserCommentary from 'containers/Views/UserCommentary'
import TabIcon from 'components/common/navigators/TabIcon'
import colors from 'style/colors'
import TabTop from './TabTop'

const DetailsNavigator = TabNavigator(
  {
    Focus: {
      screen: Focus,
      navigationOptions: {
        title: 'Infos',
        tabBarIcon: props => <TabIcon {...props} name="book" />,
      },
    },
    Commentary: {
      screen: Commentary,
      navigationOptions: {
        title: "Avis d'un critique",
        tabBarIcon: props => <TabIcon {...props} name="chatbubbles" />,
      },
    },
    Video: {
      screen: Video,
      navigationOptions: {
        title: 'Vidéo',
        tabBarIcon: props => <TabIcon {...props} name="videocam" />,
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
