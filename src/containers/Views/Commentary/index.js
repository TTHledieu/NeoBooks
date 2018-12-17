// @flow

import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import ClapButton from 'components/common/clapButton';
import styles from './styles';

type Props = {
  navigation: Object,
};

const Commentary = ({ navigation }: Props): Node => {
  const { book } = navigation.state.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <BackButton /> */}
        <Text style={styles.title}>{'L\'avis'}</Text>
        <Text style={styles.subtitle}>de votre critique NEOBOOKS</Text>
        <ClapButton />
      </View>
      <View style={styles.body}>
        <View style={styles.author}>
          <Text style={styles.name}>{book.commentary.author} - {book.commentary.from}</Text>
        </View>
        <View style={styles.commentary}>
          <ScrollView>
            <Text style={styles.commentaryTitle}>{book.commentary.title}</Text>
            <Text style={styles.commentaryDesc}>{book.commentary.text}</Text>
            <View style={styles.watermark}>
              <Text style={styles.watermarkNB}>NEOBOOKS</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default withNavigation(Commentary);
