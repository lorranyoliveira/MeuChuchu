import React from 'react';
import { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import { Text } from 'react-native';
import { Input } from 'react-native-elements';
import Button2 from '../../components/Button2';
import { colors } from '../../styles';
import styles from './styles';
import Header from '../../components/header';
import { useNavigation } from '@react-navigation/native';




const storeInformations = () => {
    const [text, setText, selectedValue, setSelectedValue] = useState("Açougue");
    const navigation = useNavigation();

    return (
        <View style={styles.Container}>
            <Header>

            </Header>
            <View style={styles.Container2}>
                <Text style={styles.textos}>Nome da banca</Text>
                <Input
                    style={styles.Input}
                    onChangeText={name => setText(name)}
                />
                <Text style={styles.textos}>Endereço da banca</Text>
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
                    <Picker.Item label="Açougue" value="Açougue" />
                    <Picker.Item label="Hortifruti" value="Hortifruti" />
                    <Picker.Item label="Lanches e refeições" value="Lanches e refeições" />
                    <Picker.Item label="Doces" value="Doces" />
                    <Picker.Item label="Peixaria" value="Peixaria" />
                    <Picker.Item label="Produtos Regionais" value="Produtos Regionais" />
                    <Picker.Item label="Outros" value="Outros" />

                </Picker>
                <View style={styles.Container3}>
                    <Button2 style={styles.Botton}
                        text="Cadastrar"
                        width={200}
                        backgroundColor={colors.primaryGreen}
                        onPress={()=>navigation.navigate('ViewStand')}
                        
                    />
                </View>
            </View>

        </View>
    );
};

export default storeInformations;
