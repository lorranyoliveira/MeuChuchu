import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { colors } from '../../styles';



export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.help}>
                <MaterialCommunityIcons
                    name="help"
                    size={24}
                    color={colors.primaryGreen}
                />
            </View>
            <View style={styles.teste}>
                <AntDesign
                    name="arrowleft"
                    size={24}
                    color={colors.primaryGreen}
                />
            </View>
            <Text style={styles.headerText}>Meu Chuchu</Text>

        </View>
    )
}
