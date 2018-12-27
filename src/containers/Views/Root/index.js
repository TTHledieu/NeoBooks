// @flow

import React from 'react'
import { AppLoading } from 'expo'
import rootLayout from 'containers/navigators/createLayoutNavigator'
import CameraContext from 'containers/CameraContext'

type Props = {
  navigation: Object,
}

// eslint-disable-next-line react/prefer-stateless-function
class Root extends React.Component<Props> {
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
    const Layout = rootLayout()
    return (
      <CameraContext.Provider navigation={this.props.navigation}>
        <Layout />
      </CameraContext.Provider>
    )
  }
}

export default Root
