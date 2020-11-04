import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    fontFamily: 'Avenir-L',
    fontSize: 20,
  },
  title2: {
    fontFamily: 'Avenir-S',
    fontSize: 20,
  },
  title3: {
    fontFamily: 'Avenir-B',
    fontSize: 20,
  },
});

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Avenir-L</Text>
      <Text style={styles.title2}>Avenir-S</Text>
      <Text style={styles.title3}>Avenir-B</Text>
    </View>
  );
}