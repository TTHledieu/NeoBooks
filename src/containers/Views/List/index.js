// @flow

import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import BookButton from 'components/common/bookButton'
import books from 'utils/books'
import styles from './styles'

type Props = {}

// eslint-disable-next-line react/prefer-stateless-function
class List extends React.Component<Props> {
  titleText: string = 'Nouveautés littéraires'

  descriptionText1: string =
    "Choisissez un livre parmi les nouveautés littéraires du moment pour avoir plus d'informations !"

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleText}>{this.titleText}</Text>
          <Text style={styles.descriptionText}>{this.descriptionText1}</Text>
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

export default List
