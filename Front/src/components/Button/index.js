import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

const Button  = ({text, backgroundColor, width}) => (
    <TouchableOpacity> 
        <View style = {styles.button} width = {width} backgroundColor = {backgroundColor}>
            <Text style = {styles.buttonText}>{text}</Text>
        </View> 
    </TouchableOpacity>
);

export default Button;