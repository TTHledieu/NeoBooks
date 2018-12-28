// @flow

import React from 'react'
import LoginNavigator from 'containers/navigators/Login'
import rootLayout from 'containers/navigators/createLayoutNavigator'

const InitialScreen = (): Node => {
  const user = false
  const Layout = rootLayout()
  if (user) {
    return <Layout />
  }
  return <LoginNavigator />
}

export default InitialScreen
