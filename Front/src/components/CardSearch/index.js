import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CardSearch = ({
  name, descricao, onPress, image, preco
}) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{name}</Text>
        
        <Text numberOfLines={8} style={styles.cardText}>{descricao}</Text>
        <Text style={styles.preco}>R$:{preco}</Text>
        
        <View style={{ paddingHorizontal: '5%' }} />
      </View>
    </TouchableOpacity>
  );
CardSearch.propTypes = {
  name: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  preco: PropTypes.number.isRequired,
  //image: PropTypes.string.isRequired,
};

//{image()}
export default CardSearch;