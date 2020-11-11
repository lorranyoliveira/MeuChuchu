import React from 'react';
import { View, Text, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from '../../components/Button';
import { colors } from '../../styles';
import styles from './styles';
// import MateriaCommunityIcons from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {
    return (
        <View style={styles.Container}>
           <View style={styles.Container2}>
                <MaterialCommunityIcons style={styles.Logout}
                    name="logout"
                    size={24} 
                    color={colors.primaryGreen}
                
                 />
            </View>
            <View style={styles.Container3}>
                <Image
                    style={styles.Photo}
                    source={require('../../image/photo.jpg')}
                />
                <Text style={styles.Name}>Meu Nome</Text>
            </View>
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
