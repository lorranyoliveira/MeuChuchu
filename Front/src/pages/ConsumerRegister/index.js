import React from 'react';
import { View, Text, Image } from 'react-native';
import { Input } from 'react-native-elements';
import Button2 from '../../components/Button2';
import { colors } from '../../styles';
import styles from './styles';
import Header from '../../components/header';
// import { createStackNavigator } from 'react-navigation-stack';
const ConsumerRegister = () => {
    const [text, setText] = React.useState('');

    return (
        <View style={styles.Container}>
            <Header>

            </Header>
            <View style={styles.Container2}>
                <Text style={styles.textos}>Nome completo</Text>
                <Input
                    style={styles.Input}
                    onChangeText={name => setText(name)}
                />
                <Text style={styles.textos}>Celular</Text>
                <Input
                    style={styles.Input}
                    onChangeText={cellphone => setText(cellphone)}
                />
                <Text style={styles.textos}>Email</Text>
                <Input
                    style={styles.Input}
                    onChangeText={email => setText(email)}
                />
                <Text style={styles.textos}>Senha</Text>
                <Input
                    style={styles.Input}
                    onChangeText={password => setText(password)}
                    secureTextEntry={true}

                />
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

export default ConsumerRegister;
