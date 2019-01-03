// @flow

import React from 'react'
import { Text, View, ScrollView, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { unsetUser } from 'reduxConfig/actions/user'
import type { User } from 'reduxConfig/actions/user.type'
import LikedBookButton from 'components/LikedBookButton'
import Button from 'components/Button'
import CircleAvatar from 'components/CircleAvatar'
import { withCamera } from 'containers/CameraContext'
import colors from 'style/colors'
import styles from './styles'

const mock = [
  {
    title: "L'arracheuse de dents",
    clap: 2,
  },
  {
    title: 'Un clafoutis aux tomates cerises',
    clap: 30,
  },
  {
    title: 'Peur',
    clap: 35,
  },
  {
    title: 'Le cas singulier de Benjamin T.',
    clap: 23,
  },
]

type Props = {
  picture: string,
  toggleCamera: boolean => void,
  navigation: Object,
  dUser: User,
  dUnsetUser: typeof unsetUser,
}

// eslint-disable-next-line react/prefer-stateless-function
const Profile = ({
  picture,
  toggleCamera,
  navigation,
  dUnsetUser,
  dUser: { name },
}: Props) => {
  const sortedLikedBooks = mock.slice().sort((a, b) => b.clap - a.clap)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CircleAvatar
          onPress={() => {
            toggleCamera(true)
            navigation.navigate('Camera')
          }}
          source={picture}
        />
        <Text style={styles.title}>{name}</Text>
        <Button
          style={{ marginTop: 20 }}
          variant="alert"
          onPress={async () => {
            await AsyncStorage.removeItem('user')
            dUnsetUser()
          }}
        >
          <Text style={{ fontSize: 17, color: colors.white }}>
            Se déconnecter
          </Text>
        </Button>
      </View>
      <View style={styles.list}>
        <Text style={styles.apreciateBooks}>
          Les livres que vous appréciez le plus
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {sortedLikedBooks.map(
            (book, index) =>
              book.clap > 10 && (
                <LikedBookButton key={book.title} book={book} index={index} />
              ),
          )}
        </ScrollView>
      </View>
    </View>
  )
}

const mapStateToProps = ({ user }) => ({
  dUser: user,
})

const mapDispatchToProps = {
  dUnsetUser: unsetUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withCamera(Profile))
