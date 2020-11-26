import React from 'react';
import { View, Text, Image,TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from '../../components/Button';
import { colors } from '../../styles';
import styles from './styles';
// import MateriaCommunityIcons from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//<ion-icon name="chevron-back-outline"></ion-icon>
//<Ionicons name="chevron-back-outline" size = {24} style={styles.backbutton}/>

const ViewStand = () => {
    return (
        <View style={styles.Container}>
           <View style={styles.Container2}>
                <TouchableOpacity>
                    <View style={styles.backbutton}>
                        <MaterialCommunityIcons
                            name = "chevron-left" 
                            size = {100}
                            color= {colors.primaryGreen}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.Icon}>
                        <MaterialCommunityIcons 
                            name="plus-circle" 
                            size = {30} 
                            color= {colors.primaryGreen}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.Container3}>
                <Image
                    style={styles.Photo}
                    source={require('../../image/photo.jpg')}
                />
            </View>
            <View style={{ flex: 4, }}>
                <Button style={styles.Botton}
                    text="Contate o vendedor"
                    width={250}
                    backgroundColor={colors.primaryGreen}
                />
            </View>

        </View>
    );
};

export default ViewStand;
