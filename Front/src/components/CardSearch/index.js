// este arquivo apresenta a estrutura do componente botão modelo 2

//importações

import React from 'react';
import {
  View, Text, TouchableOpacity,Image
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

//declaração do componente CardSearch

const CardSearch = ({
  name,  category, onPress, image,
}) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.card}>
      
       <Image
         source = {require('../../image/feira.jpg')}
         style={styles.image}
         {...image}/>
         
      <Text style={styles.cardTitle}>{name}</Text>
      <Text  style={styles.cardText}>{category}</Text>
        
        <View style={{ paddingHorizontal: '5%' }} />
      </View>
    </TouchableOpacity>
  );
  CardSearch.defaultProps = {
    image: '',
  };
CardSearch.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
  image: PropTypes.string,
};

//{image()}
export default CardSearch;