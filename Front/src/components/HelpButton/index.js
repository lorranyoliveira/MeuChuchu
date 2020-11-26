import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

//declaração do componente botão

const HelpButton = ({}) => (
  <View>
    <TouchableOpacity>
      <Ionicons name="ios-help" size = {90} style={styles.Button}/>
    </TouchableOpacity>
  </View>
);

export default HelpButton;