import React from 'react';
import {View, Text} from 'react-native'; 
import Button from '../../components/Button';
import styles from './styles';


const ProfileOption = () => {
    return(
        <View style = {styles.card}>
            <Text style = {styles.text}>Escolha o tipo de perfil que deseja criar</Text>
            <Button
                text = "Pessoal"
                width = {250}
                backgroundColor = "#FFF"
    
            />
        </View>
    );
};

export default ProfileOption;