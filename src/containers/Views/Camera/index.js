// @flow

import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Camera, Permissions, Alert } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import { withCamera } from 'containers/CameraContext'
import ioniconsByPlatform from 'utils/ionicons'
import colors from 'style/colors'
import styles from './styles'

type Props = {
  setPicture: string => void,
  setCameraMode: boolean => void,
}

class CameraView extends React.Component<Props> {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  }

  cameraRef = React.createRef()

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  getNewPicture = async () => {
    if (this.cameraRef) {
      const newPicture = await this.cameraRef.takePictureAsync()
      if (newPicture && newPicture.uri) {
        this.props.setPicture(newPicture.uri)
        this.props.setCameraMode(false)
      }
    }
  }

  render() {
    const { hasCameraPermission } = this.state
    if (hasCameraPermission === null) {
      return null
    }
    if (hasCameraPermission === false) {
      return Alert.alert(
        'Oups !',
        "NeoBooks n'a pas la permission d'utiliser l'appareil photo. Vous pouvez modifier ça dans les réglages de votre téléphone",
        { cancelable: false },
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          type={this.state.type}
          // eslint-disable-next-line no-return-assign
          ref={ref => {
            this.cameraRef = ref
          }}
        >
          <View style={styles.layout}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState(prevState => ({
                  type:
                    prevState.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                }))
              }}
            >
              <Ionicons
                name={ioniconsByPlatform('reverse-camera', false)}
                size={48}
                style={{ color: colors.white }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={this.getNewPicture}
            >
              <Ionicons
                name={ioniconsByPlatform('radio-button-on', false)}
                size={48}
                style={{ color: colors.white }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.setCameraMode(false)}
            >
              <Ionicons
                name={ioniconsByPlatform('close', false)}
                size={48}
                style={{ color: colors.white }}
              />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    )
  }
}

export default withCamera(CameraView)
