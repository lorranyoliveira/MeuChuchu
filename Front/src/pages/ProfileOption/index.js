//este arquivo apresenta a estrutura da tela ProfileOption

//importações

import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from '../../components/Button';
import HelpButton from '../../components/HelpButton';
import { colors } from '../../styles';
import styles from './styles';
import Header from '../../components/header';


// declaração da estrutura da tela ProfileOption 

const ProfileOption = () => {
    return (
        <View style={styles.card}>
            <Header>

            </Header>

            <HelpButton/>
            <Text style={styles.text}>Escolha o tipo de perfil que deseja criar</Text>
            <View style={styles.cardButton}>
                <Button
                    text="Pessoal"
                    width={250}
                    backgroundColor= {colors.primaryGreen}
                />
                <Button
                    text="Comercial"
                    width={250}

                    backgroundColor= {colors.primaryGreen}
                />
            </View>
        </View>
    );
};

export default ProfileOption;