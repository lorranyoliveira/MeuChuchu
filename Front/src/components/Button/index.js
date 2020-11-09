// este arquivo apresenta a estrutura do componente botão

//importações

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

//declaração do componente botão

const Button = ({
  text, width, backgroundColor
}) => (
  <TouchableOpacity>
    <View style={styles.button} width={width} backgroundColor={backgroundColor}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default Button;