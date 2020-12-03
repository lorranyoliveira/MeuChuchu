import React from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import Button2 from '../../components/Button2';
import { colors } from '../../styles';
import styles from './styles';
import Header from '../../components/header';
import { useNavigation } from '@react-navigation/native';

const FeiranteRegister = () => {
    const [text, setText] = React.useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.Container}>
            <Header>

            </Header>
            <View style={styles.Container2}>
                <Text style={styles.textos}>Nome proprietário</Text>
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
                        text="Próximo"
                        width={200}
                        backgroundColor={colors.primaryGreen}
                        onPress={()=>navigation.navigate('storeInformations')}
                    />
                </View>
            </View>

        </View>
    );
};

export default FeiranteRegister;
