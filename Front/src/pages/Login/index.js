//este arquivo apresenta a estrutura da tela ProfileLogin

//importações
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Input } from 'react-native-elements';
import { Button } from 'react-native';
import Button2 from '../../components/Button2';
import { colors } from '../../styles';
import Header from '../../components/header';
import { useNavigation } from '@react-navigation/native';



const Login = () => {
    const [text, setText] = React.useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.Container}>
            <Header>
                
            </Header>
            <View style={styles.Container2}>
                <Text style={styles.Login}>Login:</Text>
                <Input
                    style={styles.Input}
                    onChangeText={email => setText(email)}
                />
            </View>
            <View style={styles.Container3}>
                <Text style={styles.Password}>Senha:</Text>
                <Input
                    style={styles.Input}
                    onChangeText={password => setText(password)}
                    secureTextEntry={true}

                />
                <Button style={styles.boton}
                    title="Esqueceu a senha?"
                    color={colors.lightPink}

                />
                <View style={styles.Container4}>
                    <Button2 style={styles.Botton}
                        text="Entrar"
                        width={200}
                        backgroundColor={colors.primaryGreen}
                        onPress={()=>navigation.navigate('Search')}

                    />
                    <Button2 style={styles.Botton}
                        text="Criar cadastro"
                        width={200}
                        backgroundColor={colors.lightPink}
                        onPress={()=>navigation.navigate('FeiranteRegister')}
                        
                    />

                </View>
            </View>
        </View>
    );
};

export default Login;


