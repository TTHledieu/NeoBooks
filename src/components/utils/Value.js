// @flow

import React from 'react'

type Props = {|
  value: number | string | (() => {}),
  onChange: (number | string | (() => {})) => void,
  children: ({}) => React$Element<any>,
|}

type State = {|
  value: number | string | (() => {}),
|}
class Value extends React.Component<Props, State> {
  state = { value: this.props.value }

  onChange = (value: number | string | (() => {})) => {
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
