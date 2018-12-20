// @flow

import { StackNavigator } from 'react-navigation'
import List from 'containers/Views/List'
import DetailsNavigator from 'containers/navigators/Details'

export default () =>
  StackNavigator(
    {
      InitialScreen: {
        screen: List,
      },
      DetailsScreen: {
        screen: DetailsNavigator,
      },
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: 'InitialScreen',
      navigationOptions: {
        gesturesEnabled: true,
      },
    },
  )
