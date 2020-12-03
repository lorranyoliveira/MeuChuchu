//este arquivo apresenta a estrutura da tela Main

//importações

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//declaração da estrutura da tela Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default function Main() {
  return (
    <View style={styles.container}/>

   
  );
}