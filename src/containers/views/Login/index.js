// @flow

import React from 'react'
import type { Node } from 'react'
import { Text, View, Animated, Alert, Easing, AsyncStorage } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import * as firebase from 'firebase'
import { setUser } from 'reduxConfig/actions/user'
import State from 'components/utils/State'
import Button from 'components/Button'
import Input from 'components/Input'
import colors from 'style/colors'
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

type Props = {|
  dSetUser: typeof setUser,
|}

const Login = ({ dSetUser }: Props): Node => (
  <Animated.View style={[styles.container, { transform: [{ rotateY }] }]}>
    <State state={{ email: '', password: '', mode: 'login' }}>
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
                <Text style={styles.headline}>Email</Text>
                <Input
                  style={{ marginTop: 15, marginLeft: 15 }}
                  onChange={text => setState({ email: text })}
                  value={state.email}
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
                  disabled={!state.email || !state.password}
                  onPress={async () => {
                    try {
                      if (state.mode === 'login') {
                        const user = await firebase
                          .auth()
                          .signInWithEmailAndPassword(
                            state.email,
                            state.password,
                          )
                        if (user) {
                          const tmpUser = {
                            id: user.user.uid,
                            name: user.user.email,
                          }
                          await AsyncStorage.setItem(
                            'user',
                            JSON.stringify(tmpUser),
                          )
                          dSetUser(tmpUser)
                        }
                      } else {
                        if (state.password.length < 6) {
                          Alert.alert(
                            'Le password doit avoir au moins 6 caractéres',
                          )
                          return
                        }
                        const user = await firebase
                          .auth()
                          .createUserWithEmailAndPassword(
                            state.email,
                            state.password,
                          )
                        if (user) {
                          const tmpUser = {
                            id: user.user.uid,
                            name: user.user.email,
                          }
                          await AsyncStorage.setItem(
                            'user',
                            JSON.stringify(tmpUser),
                          )
                          dSetUser(tmpUser)
                        }
                      }
                    } catch (error) {
                      Alert.alert(
                        "Petit problème lors de la connexion/l'inscription. Veuillez réessayer !",
                      )
                    }
                  }}
                >
                  <Text style={{ fontSize: 17, color: colors.white }}>
                    {state.mode === 'login' ? 'Se connecter' : "Je m'inscris"}
                  </Text>
                </Button>
              </View>
              <View style={styles.registerLink}>
                <Text
                  style={styles.link}
                  onPress={() => {
                    animate()
                    setState(prevState => ({
                      mode: prevState.mode === 'login' ? 'register' : 'login',
                      id: '',
                      password: '',
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
