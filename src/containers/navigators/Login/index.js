// @flow

import { StackNavigator } from 'react-navigation'
import Login from 'containers/views/Login'

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
