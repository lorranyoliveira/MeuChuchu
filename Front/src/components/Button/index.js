import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const Button  = ({onPress, text}) => (
    <TouchableOpacity onPress = {onPress}>
        <View style = {style.button}>
            <Text style = {style.buttonText}>{text}</Text>
        </View> 
    </TouchableOpacity>
);
