import React from 'react';
import { View, Text} from 'react-native';
import { Input } from 'react-native-elements';
import Button2 from '../../components/Button2';
import { colors } from '../../styles';
import styles from './styles';

const storeInformations = () => {
    const [text, setText] = React.useState('');

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
                <Input
                    style={styles.Input}
                    onChangeText={email => setText(email)}
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

export default storeInformations;
