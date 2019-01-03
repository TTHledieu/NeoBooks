// @flow

import React from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { setUser } from 'reduxConfig/actions/user'
import type { User } from 'reduxConfig/actions/user.type'
import LoginNavigator from 'containers/navigators/Login'
import rootLayout from 'containers/navigators/createLayoutNavigator'

type Props = {|
  dUser: User,
  dSetUser: typeof setUser,
|}

class InitialScreen extends React.Component<Props> {
  constructor(props) {
    super(props)
    AsyncStorage.getItem('user').then(localUser => {
      if (localUser) {
        props.dSetUser(JSON.parse(localUser))
      }
    })
  }

  render() {
    const Layout = rootLayout()

    if (this.props.dUser.id) {
      return <Layout />
    }
    return <LoginNavigator />
  }
}

const mapDispatchToProps = {
  dSetUser: setUser,
}

const mapStateToProps = ({ user }) => ({
  dUser: user,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitialScreen)
