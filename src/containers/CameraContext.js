// @flow

import React from 'react'

const CameraContext = React.createContext({ picture: null })

type Props = {
  children: React.Node,
}

class CameraContextProvider extends React.Component<Props> {
  state = { picture: '', cameraMode: false }

  setPicture = (picture: string) => this.setState({ picture })

  setCameraMode = (cameraMode: boolean) => this.setState({ cameraMode })

  render() {
    return (
      <CameraContext.Provider
        value={{
          setPicture: this.setPicture,
          setCameraMode: this.setCameraMode,
          picture: this.state.picture,
          cameraMode: this.state.cameraMode,
        }}
      >
        {this.props.children}
      </CameraContext.Provider>
    )
  }
}

export const withCamera = Component => props => (
  <CameraContext.Consumer>
    {data => <Component {...props} {...data} />}
  </CameraContext.Consumer>
)

export default {
  Consumer: CameraContext.Consumer,
  Provider: CameraContextProvider,
}
