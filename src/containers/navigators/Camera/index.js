// @flow

import { StackNavigator } from 'react-navigation'
import Camera from '../../../containers/Views/Camera'

const CameraNavigator = StackNavigator(
  {
    Camera: {
      screen: Camera,
    },
  },
  {
    initialRouteName: 'Camera',
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
)

export default CameraNavigator
