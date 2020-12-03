// este arquivo apresenta a estrutura do componente botão de ajuda

//importações
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

//declaração do componente botão

const HelpButton = ({}) => (
  <View>
      <Ionicons name="ios-help" size = {90} style={styles.Button}/>
  </View>
);

export default HelpButton;