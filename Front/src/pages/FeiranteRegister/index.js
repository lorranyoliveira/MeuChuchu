import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import styles from './styles';
import Header from '../../components/header';
import api from '../../services/api'
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';


const user_id = 1

class FeiranteRegister extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			password: '',
			celular: '',
			email: '',
			image: ''
		}
	}

	handleChange = (event, name) => {
		const value = event.target ? event.target.value : event;
		this.setState({ [name]: value });
	};

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
			"tipo_de_user": true
		}
		console.log(payload)
		const res = await api.post('/create-user', payload).then((res) => {
			console.log(res.data)
		})
	}

	render() {
		return (
			<View style={styles.Container}>
				<Header>

				</Header>
				<View style={styles.Container2}>
					<Text style={styles.textos}>Nome proprietário</Text>
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
					<TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
						onPress={() => this.pickImage()}>
						<Text style={{ fontSize: 16, color: "#3E782B" }}>Escolher imagem para banca</Text>
					</TouchableOpacity>
					<View style={styles.Container3}>

						<TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
							onPress={() => this.saveInfo()}>
							<Text style={{ fontSize: 16, color: "#3E782B" }}>Próximo</Text>
						</TouchableOpacity>
					</View>
				</View>

			</View>
		);
	}


}

export default FeiranteRegister;
