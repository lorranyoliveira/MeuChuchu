import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { colors } from '../../styles';



export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>MeuChuchu</Text>
        </View>
    )
}
