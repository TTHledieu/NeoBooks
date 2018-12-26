// @flow

import React from 'react'

type Props = {
  value: number | string | (() => {}),
  onChange: () => {},
  children: React.Node,
}

class Value extends React.Component<Props> {
  state = { value: this.props.value }

  onChange = value => {
    this.setState({ value })
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  render() {
    return this.props.children({
      value: this.state.value,
      onChange: this.onChange,
    })
  }
}

export default Value
