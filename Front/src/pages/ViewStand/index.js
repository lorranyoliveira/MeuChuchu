import React from 'react';
import { View, Text, Image,TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from '../../components/Button';
import { colors } from '../../styles';
import styles from './styles';
// import MateriaCommunityIcons from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HelpButton from '../../components/HelpButton';

//<ion-icon name="chevron-back-outline"></ion-icon>
//<Ionicons name="chevron-back-outline" size = {24} style={styles.backbutton}/>

const ViewStand = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.Container2}>
                <View style = {styles.BackPos}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons
                            name = "chevron-left" 
                            size = {70}
                            style= {styles.BackButton}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.HelpButton}>
                   <HelpButton/> 
                </View>
            </View>

            <View style={styles.PlusPos}>
                <TouchableOpacity>
                    <MaterialCommunityIcons 
                        name="plus-circle" 
                        size = {30} 
                        style={styles.PlusButton}
                    />
                </TouchableOpacity>
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
