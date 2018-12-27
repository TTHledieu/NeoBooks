/* eslint-disable */

import React from 'react'
import { Text, View, TouchableOpacity, Image, Animated } from 'react-native'
import styles from './styles'

class ClapButton extends React.Component {
  state = {
    count: 0,
    claps: [],
  }

  animationComplete(countNum) {
    const claps = this.state.claps
    claps.splice(claps.indexOf(countNum), 1)
    this.setState({ claps })
  }

  clap = () => {
    let count = this.state.count
    const claps = this.state.claps
    count++
    claps.push(count)
    this.setState({ count })
  }

  keepClaping = () => {
    this.clapTimer = setInterval(() => this.clap(), 150)
  }

  stopClaping = () => {
    if (this.clapTimer) {
      clearInterval(this.clapTimer)
    }
  }

  renderClaps() {
    return this.state.claps.map(countNum => (
      <ClapBubble
        key={countNum}
        count={countNum}
        animationComplete={this.animationComplete.bind(this)}
      />
    ))
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.clap}
          onPressIn={this.keepClaping}
          onPressOut={this.stopClaping}
          activeOpacity={0.7}
          style={styles.clapButton}
        >
          <Image source={require('assets/clap.png')} style={styles.clapImage} />
        </TouchableOpacity>
        {this.renderClaps()}
      </View>
    )
  }
}

class ClapBubble extends React.Component {
  state = {
    yPosition: new Animated.Value(0),
    opacity: new Animated.Value(0.3),
  }

  componentDidMount() {
    Animated.parallel([
      Animated.spring(this.state.yPosition, {
        toValue: -100,
        duration: 600,
        useNativeDriver: true,
      }).start(),
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(),
    ]).start(() => {
      setTimeout(() => {
        this.props.animationComplete(this.props.count)
      }, 1000)
    })
  }

  render() {
    const animationStyle = {
      transform: [
        {
          translateY: this.state.yPosition,
        },
      ],
      opacity: this.state.opacity,
    }
    return (
      <Animated.View style={[styles.clapBubble, animationStyle]}>
        <Text style={styles.clapText}>+{this.props.count}</Text>
      </Animated.View>
    )
  }
}

export default ClapButton
