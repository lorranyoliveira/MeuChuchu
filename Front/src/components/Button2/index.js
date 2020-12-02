import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

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