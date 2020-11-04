import React from 'react';
import {View, Text} from 'react-native'; 

const ProfileOption = () => {
    return(
        <View style = {styles.card}>
            <Text style = {styles.text}>Escolha o tipo de perfil que deseja criar</Text>
        </View>
    );
};

export default ProfileOption;