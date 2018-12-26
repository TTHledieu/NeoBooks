// @flow

import React from 'react'

type Props = {
  state: {},
  onStateChange: ?() => {},
  children: React.Node,
}

class State extends React.Component<Props> {
  state = this.props.state || {}

  onChange = state => {
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
