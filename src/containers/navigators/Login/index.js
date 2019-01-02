// @flow

import { StackNavigator } from 'react-navigation'
import Login from '../../../containers/Views/Login'

const LoginNavigator = StackNavigator(
  {
    Login: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'Login',
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
)

export default LoginNavigator
