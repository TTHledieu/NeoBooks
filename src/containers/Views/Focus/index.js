// @flow

import React from 'react';
import { Text, ScrollView, View, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

type Props = {
  navigation: Object,
};

const Focus = ({ navigation }: Props): Node => {
  const { book } = navigation.state.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <BackButton /> */}
        <Image
          style={styles.image}
          source={{ uri: book.img }}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.infos}>
          <View style={styles.text}>
            <Text style={styles.title}>{book.title}</Text>
            <View style={styles.authorPrice}>
              <Text style={styles.author}>{book.author}</Text>
              <Text style={styles.price}>{book.price}€</Text>
            </View>
          </View>
        </View>
        <View style={styles.synopsis}>
          <ScrollView>
            <Text style={styles.descriptionText}>{book.synopsis}</Text>
            <View style={styles.watermark}>
              <Text style={styles.watermarkNB}>NEOBOOKS</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default withNavigation(Focus);
