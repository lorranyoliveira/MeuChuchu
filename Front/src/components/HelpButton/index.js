import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

//declaração do componente botão

const HelpButton = ({
  
}) => (
    <TouchableOpacity>
      <View>
        <Ionicons name="ios-help" size = {100} style={styles.button}/>
      </View>
    </TouchableOpacity>
);

export default HelpButton;