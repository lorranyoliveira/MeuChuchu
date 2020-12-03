// este arquivo apresenta a estrutura do componente header

// importações
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

//criação do header
export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>MeuChuchu</Text>
        </View>
    )
}
