// @flow

import { StackNavigator } from 'react-navigation'
import DetailsNavigator from 'containers/navigators/Details'
import CameraNavigator from 'containers/navigators/Camera'
import RootNavigator from 'containers/navigators/Root'

export default () =>
  StackNavigator(
    {
      RootScreen: {
        screen: RootNavigator,
      },
      DetailsScreen: {
        screen: DetailsNavigator,
      },
      Camera: {
        screen: CameraNavigator,
      },
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: 'RootScreen',
      navigationOptions: {
        gesturesEnabled: true,
      },
    },
  )
