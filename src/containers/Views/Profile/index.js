// @flow

import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import BookButton from 'components/BookButton'
import Button from 'components/Button'
import CircleAvatar from 'components/CircleAvatar'
import { withCamera } from 'containers/CameraContext'
import books from 'utils/books'
import styles from './styles'

type Props = {
  picture: string,
  setCameraMode: boolean => void,
}

// eslint-disable-next-line react/prefer-stateless-function
class Profile extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <CircleAvatar
            onPress={() => this.props.setCameraMode(true)}
            source={this.props.picture}
          />
          <Text style={styles.title}>Théotime</Text>
          <Button
            style={{ marginTop: 20 }}
            variant="alert"
            onPress={() => {}}
          >
            Se déconnecter
          </Button>
        </View>
        <View style={styles.list}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {books.map((book, index) => (
              <BookButton key={book.title} book={book} index={index} />
            ))}
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default withCamera(Profile)
