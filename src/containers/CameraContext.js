// @flow

import React from 'react'
import type { Node } from 'react'

const CameraContext: React$Context<any> = React.createContext({
  picture: '',
  cameraMode: false,
})

type Props = {|
  children: Node,
|}

type State = {|
  picture: string,
  cameraMode: boolean,
|}
class CameraContextProvider extends React.Component<Props, State> {
  state = { picture: '', cameraMode: false }

  setPicture = (picture: string) => {
    this.setState({ picture, cameraMode: false })
  }

  toggleCamera = (cameraMode: boolean) => {
    this.setState({ cameraMode })
  }

  render() {
    return (
      <CameraContext.Provider
        value={{
          setPicture: this.setPicture,
          toggleCamera: this.toggleCamera,
          picture: this.state.picture,
          cameraMode: this.state.cameraMode,
        }}
      >
        {this.props.children}
      </CameraContext.Provider>
    )
  }
}

// $FlowFixMe
export const withCamera = Component => (props: { [string]: any }) => (
  <CameraContext.Consumer>
    {data => <Component {...props} {...data} />}
  </CameraContext.Consumer>
)

export default {
  Consumer: CameraContext.Consumer,
  Provider: CameraContextProvider,
}
