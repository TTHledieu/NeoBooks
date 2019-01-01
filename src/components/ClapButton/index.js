// @flow

import React from 'react'
import type { Node } from 'react'
import { Text, View, TouchableOpacity, Image, Animated } from 'react-native'
import clap from 'assets/clap.png'
import styles from './styles'

// Button
type ClapButtonState = {|
  count: number,
  claps: Array<number>,
|}

class ClapButton extends React.Component<{}, ClapButtonState> {
  state = {
    count: 0,
    claps: [],
  }

  clapTimer: any = null

  clap = () => {
    const { count } = this.state
    const { claps } = this.state
    const tmp = count + 1
    claps.push(tmp)
    this.setState({ count: tmp })
  }

  keepClaping = () => {
    this.clapTimer = setInterval(() => this.clap(), 150)
  }

  stopClaping = () => {
    if (this.clapTimer) {
      clearInterval(this.clapTimer)
    }
  }

  animationComplete = (countNum: number) => {
    const { claps } = this.state
    claps.splice(claps.indexOf(countNum), 1)
    this.setState({ claps })
  }

  renderClaps = (): Array<Node> =>
    this.state.claps.map((countNum: number) => (
      <ClapBubble
        key={countNum}
        count={countNum}
        animationComplete={this.animationComplete}
      />
    ))

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
          <Image source={clap} style={styles.clapImage} />
        </TouchableOpacity>
        {this.renderClaps()}
      </View>
    )
  }
}

// Bubble
type ClapBubbleProps = {|
  count: number,
  animationComplete: number => void,
|}

type ClapBubbleState = {|
  yPosition: typeof Animated.Value,
  opacity: typeof Animated.Value,
|}

// eslint-disable-next-line react/no-multi-comp
class ClapBubble extends React.Component<ClapBubbleProps, ClapBubbleState> {
  state = {
    yPosition: new Animated.Value(0),
    opacity: new Animated.Value(0.3),
  }

  componentDidMount() {
    Animated.parallel([
      // $FlowFixMe
      Animated.spring(this.state.yPosition, {
        toValue: -100,
        duration: 600,
        useNativeDriver: true,
      }).start(),
      // $FlowFixMe
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
