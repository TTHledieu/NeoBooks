// @flow

import 'moment'
import 'moment/locale/fr'

import React from 'react'
import { Text, View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import styles from './styles'

type Props = {}

type State = {
  messages: Array<{}>,
}

// eslint-disable-next-line react/prefer-stateless-function
class List extends React.Component<Props, State> {
  state = {
    messages: [],
  }

  titleText: string = 'Votre avis nous intéresse !'

  descriptionText: string =
    "Vous avez lu ce livre ? Qu'en avez-vous pensé ? Écrivez votre avis en quelques mots !"

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text:
            "J'ai bien aimé ce livre, bien qu'un peu long sur la fin. Je recommande malgré tout !",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Jacques M.',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'super !! a acheter impérativement !',
          createdAt: new Date(),
          user: {
            _id: 3,
            name: 'Sophie',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 3,
          text: "Histoire pas commune qui attire l'attention. Je recommande",
          createdAt: new Date(),
          user: {
            _id: 4,
            name: 'Charline',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleText}>{this.titleText}</Text>
          <Text style={styles.descriptionText}>{this.descriptionText}</Text>
        </View>
        <View style={styles.list}>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
            renderAvatar={null}
            locale="fr"
          />
        </View>
      </View>
    )
  }
}

export default List
