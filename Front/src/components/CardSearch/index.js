import React from 'react';
import {
  View, Text, TouchableOpacity,Image
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CardSearch = ({
  name,  category, onPress, image,
}) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{name}</Text> 
        <Text numberOfLines={8} style={styles.cardText}>{ category}</Text>
        <Image
        source = {require('../../image/download.jpeg')}
        {...image()}
        style={styles.image}
        />
        <View style={{ paddingHorizontal: '5%' }} />
      </View>
    </TouchableOpacity>
  );
CardSearch.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
  //image: PropTypes.string.isRequired,
};

//{image()}
export default CardSearch;