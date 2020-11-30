import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import styles from './styles';
import { colors, metrics } from '../../styles';
import { Formik } from 'formik';
import api from '../../services/api'

export default function ProductForm({addProduct}) {
    return (
        <View styles = {styles.Container}>
            <Formik
                initialValues = {{ name: '', descricao: '', preco: ''}}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addProduct(values);
                    console.log(values);
                }}
            >
                {props => (
                <View style = {styles.inputs}>
                    <TextInput
                        style = {styles.input}
                        placeholder='Nome do produto'
                        onChangeText={props.handleChange('name')}
                        value={props.values.name}
                    />

                    <TextInput
                        multiline
                        style = {styles.input}
                        placeholder='Descrição'
                        onChangeText={props.handleChange('descricao')}
                        value={props.values.descricao}
                    />

                    <TextInput 
                        placeholder='Preço'
                        style = {styles.input}
                        onChangeText={props.handleChange('preco')}
                        value={props.values.preco}
                        keyboardType='numeric'
                    />
                
                    <Button color= '#3E782B' title="Enviar" onPress={props.handleSubmit} /> 
                </View>
                )}
            </Formik>
        </View>
    );
}