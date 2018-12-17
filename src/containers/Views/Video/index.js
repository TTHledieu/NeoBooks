// @flow

import React from 'react';
import { Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';
import styles from './styles';

type Props = {
  navigation: Object,
};

type State = {
  videoPlayerRef: any,
};

class VideoView extends React.Component<Props, State> {
  state: {
    videoPlayerRef: null,
  };

  componentDidMount() {
    this.didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      () => {
        const { videoPlayerRef } = this.state;
        // eslint-disable-next-line no-underscore-dangle
        videoPlayerRef._playbackInstance.setStatusAsync({ shouldPlay: false });
      },
    );
  }

  componentWillUnmount() {
    this.didBlurSubscription.remove();
  }

  handleVideoRef = (comp) => {
    this.setState({ videoPlayerRef: comp });
  };

  didBlurSubscription: any;

  render() {
    const { book } = this.props.navigation.state.params;
    const getVideo = (() => {
      if (book.title === 'L\'arracheuse de dents' ||
          book.title === 'Un clafoutis aux tomates cerises') {
        return book.video;
      }
      return { uri: 'https://video.fnac-static.com/0/Video/FD/Comete/99936/CCP_MP4_640x360/1281187.mp4' };
    })();
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.subtitle}>{'Qu\'en pensent les lecteurs ?'}</Text>
          <Text style={styles.cta}>Lancez la vidéo pour le découvrir !</Text>
        </View>
        <View style={styles.body}>
          <VideoPlayer
            ref={this.handleVideoRef}
            videoProps={{
              shouldPlay: false,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              source: getVideo,
              style: { width: 300 },
            }}
            showFullscreenButton={false}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(VideoView);
