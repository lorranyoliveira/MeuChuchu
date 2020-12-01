import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { colors } from '../../styles';



export default function Header() {
    const ajuda = () =>{

    }
    const voltar = () =>{

    }
    return (
        <View style={styles.header}>
            {/* <View style={styles.help}>
                <MaterialCommunityIcons
                    name="help"
                    size={24}
                    color={colors.primaryGreen}
                    onPress={ajuda}
                />
            </View>
            <View style={styles.teste}>
                <AntDesign
                    name="arrowleft"
                    size={24}
                    color={colors.primaryGreen}
                    onPress={voltar}

                />
            </View> */}
            <Text style={styles.headerText}>MeuChuchu</Text>

        </View>
    )
}
