// @flow

import React from 'react';
import { AppLoading } from 'expo';
import rootNavigation from 'containers/navigators/Root';

type Props = {
};

// eslint-disable-next-line react/prefer-stateless-function
class Root extends React.Component<Props> {
  state = {
    showApp: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ showApp: true }), 25);
  }

  render() {
    if (!this.state.showApp) {
      return (
        <AppLoading />
      );
    }

    const RootScreen = rootNavigation();
    return (
      <RootScreen />
    );
  }
}

export default Root;
