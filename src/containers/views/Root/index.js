// @flow

import React from 'react'
import { AppLoading } from 'expo'
import CameraContext from 'containers/CameraContext'
import InitialScreen from 'containers/navigators/InitialScreen'

type State = {|
  showApp: boolean,
|}

class Root extends React.Component<{}, State> {
  state = {
    showApp: false,
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showApp: true }), 25)
  }

  render() {
    if (!this.state.showApp) {
      return <AppLoading />
    }
    return (
      <CameraContext.Provider>
        <InitialScreen />
      </CameraContext.Provider>
    )
  }
}

export default Root
