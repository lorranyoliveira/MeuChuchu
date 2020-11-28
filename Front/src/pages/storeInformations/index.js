import React from 'react';
import { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import { Text } from 'react-native';
// import { Picker } from '@react-native-community/picker'
import { Input } from 'react-native-elements';
import Button2 from '../../components/Button2';
import { colors } from '../../styles';
import styles from './styles';


const storeInformations = () => {
    const [text, setText, selectedValue, setSelectedValue] = useState("Acougue");

    return (
        <View style={styles.Container}>
            <Text style={styles.MeuChuchu}>MeuChuchu</Text>
            <View style={styles.Container2}>
                <Text style={styles.textos}>Nome da loja</Text>
                <Input
                    style={styles.Input}
                    onChangeText={name => setText(name)}
                />
                <Text style={styles.textos}>Endereço da loja</Text>
                <Input
                    style={styles.Input}
                    onChangeText={address => setText(address)}
                />
                <Text style={styles.textos}>Categoria</Text>
                <Picker
                    selectedValue={text}
                    style={styles.pickerComponente}
                    onValueChange={(itemValue, itemIndex) => setText(itemValue)}
                >

                    <Picker.Item label="Selecione uma categoria" value=" " />
                    <Picker.Item label="Acougue" value="Acougue" />
                    <Picker.Item label="Bebidas" value="Bebidas" />
                    <Picker.Item label="Cereais/Grão" value="Cereais/Grão" />
                    <Picker.Item label="Doces" value="Doces" />
                    <Picker.Item label="Frutas/Verduras" value="Frutas/Verduras" />
                    <Picker.Item label="Massas" value="Massas" />
                    <Picker.Item label="Tempero" value="Tempero" />

                </Picker>
                <View style={styles.Container3}>
                    <Button2 style={styles.Botton}
                        text="Cadastrar"
                        width={200}
                        backgroundColor={colors.primaryGreen}
                    />
                </View>
            </View>

        </View>
    );
};

export default storeInformations;
