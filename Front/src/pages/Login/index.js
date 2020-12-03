import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Input } from 'react-native-elements';
import { Button } from 'react-native';
import Button2 from '../../components/Button2';
import { colors } from '../../styles';
import Header from '../../components/header';
import api from '../../services/api';
import { AsyncStorage } from '@react-native-community/async-storage';



const Login = () => {
    
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    

    async function routeLogin () {
        const data = { email, password};
        const response = await api.post('/login', data)
        .then( async (response) => {
			console.log(response.data)
			try {
				await AsyncStorage.setItem(
				  user_id, response.data['user_id']
				);
			  } catch (error) {
				// Error saving data
			  }
		})
        .catch(error => console.error("There was an error!", error)); 

    };


    return (
        <View style={styles.Container}>
            <Header/>

            
            <View style={styles.Container2}>
                <Text style={styles.Login}>Login:</Text>
                <Input
                    style={styles.Input}
                    value={email}
                    onChangeText={email => setEmail(email)}
                />
            </View>
            <View style={styles.Container3}>
                <Text style={styles.Password}>Senha:</Text>
                <Input
                    style={styles.Input}
                    value={password}
                    onChangeText={password => setPassword(password)}
                    secureTextEntry={true}

                />
                <Button style={styles.boton}
                    title="Esqueceu a senha?"
                    
                />
                <View style={styles.Container4}>
                    <Button2 style={styles.Botton}
                        text="Entrar"
                        width={200}
                        backgroundColor={colors.primaryGreen}
                        onPress={routeLogin}
                    />
                    <Button2 style={styles.Botton}
                        text="Criar cadastro"
                        width={200}
                        backgroundColor={colors.lightPink}
                    />

                </View>
            </View>
        </View>
    );
};

export default Login;



