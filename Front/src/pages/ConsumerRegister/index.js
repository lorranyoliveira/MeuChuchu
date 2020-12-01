import React, { useState, useEffect, Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import Button2 from '../../components/Button2';
import { colors } from '../../styles';
import styles from './styles';
import Header from '../../components/header';
import * as ImagePicker from 'expo-image-picker';
import Button from '../../components/Button';
import api from '../../services/api';


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
			quality: 0.1,
			aspect: [4, 3],
		});

		if (!image.cancelled) {
			this.setState({
        image: image,
      });
		}
	}

	saveInfo = async () => {
		console.log("ta dentro")
		const payload = {
			"name": this.state.name,
			"cellphone": this.state.cellphone,
			"email": this.state.email,
			"password": this.state.password,
			"image": this.state.image
		}
		console.log(payload)
		// const res = await api.post('/create-user', payload).then((res) => {
		// 	console.log(res)
		// })
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

export default ConsumerRegister;
