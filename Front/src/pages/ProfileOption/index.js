//este arquivo apresenta a estrutura da tela ProfileOption

//importações

import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';
import { colors } from '../../styles';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';



// declaração da estrutura da tela ProfileOption 

const ProfileOption = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <Text style={styles.text}>Escolha o tipo de perfil que deseja acessar</Text>
            <View style={styles.cardButton}>
                <Button
                    text="Pessoal"
                    width={250}
                    backgroundColor= {colors.primaryGreen}
                    onPress={()=>navigation.navigate('Search')}
                />
                <Button
                    text="Comercial"
                    width={250}

                    backgroundColor= {colors.primaryGreen}
                    onPress={()=>navigation.navigate('Login')}
                />
            </View>
        </View>
    );
};

export default ProfileOption;