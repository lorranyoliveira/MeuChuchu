import React from 'react';
import { View, Text, Image, MaterialCommunityIcons } from 'react-native';
import Button from '../../components/Button';
import { colors } from '../../styles';
import styles from './styles';

const Profile = () => {
    return (
        <View style={styles.Container}>
            <Image
                style={styles.Photo}
                source={require('../../image/photo.jpg')}
            />
            <Text style={styles.Name}>Meu Nome</Text>
            <View style={{ flex: 4, }}>
                <Button style={styles.Botton}
                    text="Editar Perfil"
                    width={250}
                    backgroundColor={colors.primaryGreen}
                />
            </View>

        </View>
    );
};

export default Profile;
