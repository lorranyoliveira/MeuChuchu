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
<<<<<<< HEAD
            <Header>

            </Header>

=======
            <HelpButton/>
>>>>>>> dea8b49ef1b03ae3769f8df32612a6f156c4dd4d
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
<<<<<<< HEAD
                    backgroundColor="#FFF"
=======
                    backgroundColor= {colors.primaryGreen}
>>>>>>> dea8b49ef1b03ae3769f8df32612a6f156c4dd4d
                />
            </View>
        </View>
    );
};

export default ProfileOption;