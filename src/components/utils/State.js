// @flow

import React from 'react'

type Props = {|
  state: { [string]: any },
  onStateChange?: ({}) => void,
  children: ({
    state: { [string]: any },
    setState: ({ [string]: any }) => void,
  }) => React$Element<any>,
|}

type InternState = {|
  [string]: any,
|}

class State extends React.Component<Props, InternState> {
  // $FlowFixMe
  state = this.props.state || {}

  static defaultProps = {
    onStateChange: () => {},
  }

  onChange = (state: { [string]: any }) => {
    this.setState(state, () => {
      if (this.props.onStateChange) {
        this.props.onStateChange(state)
      }
    })
  }

  render() {
    return this.props.children({
      state: this.state,
      setState: this.onChange,
    })
  }
}

export default State
