// @flow

import React from 'react'
import { Text, View, Animated, Easing } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { setUser } from 'redux/actions/user'
import type { SetUser } from 'redux/actions/user.type'
import State from 'components/utils/State'
import Button from 'components/Button'
import Input from 'components/Input'
import styles from './styles'

const animatedValue = new Animated.Value(0)

const rotateY = animatedValue.interpolate({
  inputRange: [0, 0.5, 1],
  outputRange: ['0deg', '90deg', '0deg'],
})

const animate = () => {
  animatedValue.setValue(0)
  Animated.timing(animatedValue, {
    toValue: 1,
    duration: 500,
    easing: Easing.linear,
  }).start()
}

type Props = {
  dSetUser: typeof SetUser,
  // user: User,
}

const Login = ({ dSetUser }: Props): Node => (
  <Animated.View style={[styles.container, { transform: [{ rotateY }] }]}>
    <State state={{ id: '', password: '', mode: 'login' }}>
      {({ state, setState }) => (
        <>
          <View style={styles.header}>
            <Text style={styles.title}>NeoBooks</Text>
            <Text style={styles.descriptionText}>
              {state.mode === 'login'
                ? 'Connectez-vous pour découvrir les livres sensations du moment !'
                : "Le monde du livre s'ouvre à vous ! Inscrivez-vous rapidement !"}
            </Text>
          </View>
          <View style={styles.body}>
            <>
              <View style={styles.formElem}>
                <Text style={styles.headline}>Identifiant</Text>
                <Input
                  style={{ marginTop: 15, marginLeft: 15 }}
                  onChange={text => setState({ id: text })}
                  value={state.id}
                  placeholder="John"
                  mode="text"
                />
              </View>
              <View style={styles.formElem}>
                <Text style={styles.headline}>Mot de passe</Text>
                <Input
                  style={{ marginTop: 15, marginLeft: 15 }}
                  onChange={text => setState({ password: text })}
                  value={state.password}
                  mode="password"
                />
              </View>
              <View style={styles.formElemButton}>
                <Button
                  variant="success"
                  disabled={!state.id || !state.password}
                  onPress={async () => {
                    // Request
                    await setTimeout(() => {}, 1000)
                    dSetUser({ id: 1, name: 'tth' })
                  }}
                >
                  {state.mode === 'login' ? 'Se connecter' : "Je m'inscris"}
                </Button>
              </View>
              <View style={styles.registerLink}>
                <Text
                  style={styles.link}
                  onPress={() => {
                    animate()
                    setState(prevState => ({
                      mode: prevState.mode === 'login' ? 'register' : 'login',
                    }))
                  }}
                >
                  {state.mode === 'login'
                    ? 'Pas de compte ? Inscrivez-vous'
                    : "J'ai déjà un compte NeoBooks !"}
                </Text>
              </View>
            </>
          </View>
        </>
      )}
    </State>
  </Animated.View>
)

const mapStateToProps = ({ user }) => ({
  user,
})

const mapDispatchToProps = {
  dSetUser: setUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Login))
