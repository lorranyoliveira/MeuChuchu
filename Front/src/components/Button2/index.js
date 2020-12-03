// este arquivo apresenta a estrutura do componente botão modelo 2

//importações

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

//declaração do componente botão

const Button2 = ({
  text, width, backgroundColor, onPress
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button} width={width} backgroundColor={backgroundColor}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default Button2;