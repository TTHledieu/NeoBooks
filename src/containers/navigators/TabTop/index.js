import * as React from 'react'
import { Animated, View, StyleSheet } from 'react-native'
import { TabBar } from 'react-native-tab-view'
import TabBarIcon from 'react-navigation/src/views/TabView/TabBarIcon'
import styles from './styles'

export default class TabBarTop extends React.PureComponent<Props> {
  static defaultProps = {
    activeTintColor: '#ffffff',
    inactiveTintColor: '#ffffff',
    showIcon: false,
    showLabel: true,
    upperCaseLabel: true,
    allowFontScaling: true,
  }

  handleOnPress = scene => {
    const { getOnPress, jumpToIndex, navigation } = this.props
    const previousScene = navigation.state.routes[navigation.state.index]
    const onPress = getOnPress(previousScene, scene)

    if (onPress) {
      onPress({
        previousScene,
        scene,
        jumpToIndex,
        defaultHandler: jumpToIndex,
      })
    } else {
      jumpToIndex(scene.index)
    }
  }

  renderIcon = scene => {
    const {
      position,
      navigation,
      activeTintColor,
      inactiveTintColor,
      renderIcon,
      showIcon,
      iconStyle,
    } = this.props
    if (showIcon === false) {
      return null
    }
    return (
      <TabBarIcon
        position={position}
        navigation={navigation}
        activeTintColor={activeTintColor}
        inactiveTintColor={inactiveTintColor}
        renderIcon={renderIcon}
        scene={scene}
        style={[styles.icon, iconStyle]}
      />
    )
  }

  renderIndicator = scene => {
    const { width, position } = scene
    const translateX = Animated.multiply(position, width)

    const containerStyle = StyleSheet.flatten([
      styles.indicatorContainer,
      {
        width,
        transform: [{ translateX }, { translateY: 2 }],
      },
    ])

    return (
      <Animated.View style={containerStyle}>
        <View style={styles.indicator} />
      </Animated.View>
    )
  }

  render() {
    const { props } = this

    const tabNbr = props.navigationState.routes.length
    const tabWidth = StyleSheet.flatten(styles.tabBarTab)
    const widthTabBar = tabWidth.width * tabNbr

    return (
      <View style={styles.safeAreaViewContainer}>
        <View style={styles.tabBarContainer}>
          <TabBar
            {...props}
            onTabPress={this.handleOnPress}
            jumpToIndex={() => {}}
            renderIcon={this.renderIcon}
            renderIndicator={this.renderIndicator}
            style={[styles.tabBar, { width: widthTabBar }]}
            tabStyle={styles.tabBarTab}
          />
        </View>
      </View>
    )
  }
}
