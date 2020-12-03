<<<<<<< HEAD
import React from 'react';
import { View, Text, Image } from 'react-native';
=======
import React, { useState, useEffect, Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
>>>>>>> 13cec9e8212ab8755271d4a4c963e94f6815fe94
import { Input } from 'react-native-elements';
import Button2 from '../../components/Button2';
import { colors } from '../../styles';
import styles from './styles';
import Header from '../../components/header';
<<<<<<< HEAD
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
=======
import * as ImagePicker from 'expo-image-picker';
import Button from '../../components/Button';
import api from '../../services/api';
import LZString from 'lz-string';


// import { createStackNavigator } from 'react-navigation-stack';

class ConsumerRegister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			cellphone: '',
			email: '',
			password: '',
			image: ''
		}
	}

	pickImage = async () => {
		const image = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			base64: true,
			quality: 0.4,
			aspect: [4, 3],
		});

		if (!image.cancelled) {
			this.setState({
				image: image,
			});
		}
	}

	saveInfo = async () => {
		const payload = {
			"name": this.state.name,
			"celular": this.state.cellphone,
			"email": this.state.email,
			"password": this.state.password,
			"image": this.state.image['base64'],
			"tipo_de_user": false
		}
		const res = await api.post('/create-user', payload).then((res) => {
		})
	}

	handleChange = (event, name) => {
    const value = event.target ? event.target.value : event;
    this.setState({ [name]: value });
  };

	render() {
		return (
			<View style={styles.Container}>
				<Header>

				</Header>
				<View style={styles.Container2}>
					<Text style={styles.textos}>Nome completo</Text>
					<Input
						style={styles.Input}
						onChangeText={(e) => this.handleChange(e, 'name')}
					/>
					<Text style={styles.textos}>Celular</Text>
					<Input
						style={styles.Input}
						onChangeText={(e) => this.handleChange(e, 'cellphone')}
					/>
					<Text style={styles.textos}>Email</Text>
					<Input
						style={styles.Input}
						onChangeText={(e) => this.handleChange(e, 'email')}
					/>
					<Text style={styles.textos}>Senha</Text>
					<Input
						style={styles.Input}
						onChangeText={(e) => this.handleChange(e, 'password')}
						secureTextEntry={true}

					/>
					<View style={styles.Container3}>
						<TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
							onPress={() => this.pickImage()}>
							<Text style={{ fontSize: 16, color: "#3E782B" }}>Escolher imagem de perfil</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.Container3}>
						<TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
							onPress={() => this.saveInfo()}>
							<Text style={{ fontSize: 16, color: "#3E782B" }}>Cadastrar</Text>
						</TouchableOpacity>
					</View>
				</View>

			</View>
		);
	}
}
>>>>>>> 13cec9e8212ab8755271d4a4c963e94f6815fe94

export default ConsumerRegister;
