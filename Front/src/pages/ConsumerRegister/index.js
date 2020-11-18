import React from 'react';
import { View, Text, Image } from 'react-native';
import { Input } from 'react-native-elements';
import Button from '../../components/Button';
import { colors } from '../../styles';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ConsumerRegister = () => {
    const [text, setText] = React.useState('');

    return (
        <View style={styles.Container}>
            <View style={styles.Container2}>
                <Text>Nome completo</Text>
                {/* <Input
                    style={styles.Input}
                    onChangeText={name => setText(name)}
                /> */}
                <Text>Celular</Text>
                {/* <Input
                    style={styles.Input}
                    onChangeText={cellphone => setText(cellphone)}
                /> */}
                <Text>Email</Text>
                {/* <Input
                    style={styles.Input}
                    onChangeText={email => setText(email)}
                /> */}
                <Text>Senha</Text>
                {/* <Input
                    style={styles.Input}
                    onChangeText={password => setText(password)}
                    secureTextEntry={true}

                /> */}
            </View>
            <Button2 style={styles.Botton}
                text="Cadastrar"
                width={200}
                backgroundColor={colors.primaryGreen}
            />

        </View>
    );
};

export default ConsumerRegister;
