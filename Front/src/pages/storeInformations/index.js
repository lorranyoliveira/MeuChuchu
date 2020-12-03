import { colors } from '../../styles';
import styles from './styles';
import Header from '../../components/header';
import React, { Component } from 'react';
import { TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Input } from 'react-native-elements';
import api from '../../services/api';
import * as ImagePicker from 'expo-image-picker';
import Button2 from '../../components/Button2'; 

const user_id = 34 

class storeInformations extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			category: ['Açougue'],
			endereco: '',
			regadm: '',
			email: '',
			celular: '',
			instagram: '',
			facebook: '',
			website: '',
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
			"category": [this.state.category],
			"endereco": this.state.endereco,
			"regadm": this.state.regadm,
			"email": this.state.email,
			"celular": this.state.celular,
			"instagram": this.state.instagram,
			"facebook": this.state.facebook,
			"website": this.state.website,
			"image": this.state.image['base64'],
			"user_id": user_id
		}
		console.log(payload)
		const res = await api.post('/cadastrar_banca', payload).then((res) => {
			console.log(res.data)
		})
	}

	render() {
		// const text = 'Açougue';
		const { category } = this.state;
		return (
			<ScrollView>
				<View style={styles.Container}>
					<Header>

					</Header>
					<View style={styles.Container2}>
						<Text style={styles.textos}>Nome da loja</Text>
						<Input
							style={styles.Input}
							onChangeText={(e) => this.handleChange(e, 'name')}
						/>
						<Text style={styles.textos}>Endereço da loja</Text>
						<Input
							style={styles.Input}
							onChangeText={(e) => this.handleChange(e, 'endereco')}
						/>

						<Text style={styles.textos}>Região Administrativa</Text>
						<Input
							style={styles.Input}
							onChangeText={(e) => this.handleChange(e, 'regadm')}
						/>
						<Text style={styles.textos}>Email</Text>
						<Input
							style={styles.Input}
							onChangeText={(e) => this.handleChange(e, 'email')}
						/>
						<Text style={styles.textos}>Celular</Text>
						<Input
							style={styles.Input}
							onChangeText={(e) => this.handleChange(e, 'celular')}
						/>
						<Text style={styles.textos}>Intagram</Text>
						<Input
							style={styles.Input}
							onChangeText={(e) => this.handleChange(e, 'instagram')}
						/>
						<Text style={styles.textos}>Facebook</Text>
						<Input
							style={styles.Input}
							onChangeText={(e) => this.handleChange(e, 'facebook')}
						/>
						<Text style={styles.textos}>Website</Text>
						<Input
							style={styles.Input}
							onChangeText={(e) => this.handleChange(e, 'website')}
						/>

						<Text style={styles.textos}>Categoria</Text>
						<Picker
							selectedValue={category}
							style={styles.pickerComponente}
							onValueChange={(itemValue) => this.handleChange(itemValue, 'category')}
						>

							<Picker.Item label="Selecione uma categoria" value=" " />
							<Picker.Item label="Acougue" value="Acougue" />
							<Picker.Item label="Bebidas" value="Bebidas" />
							<Picker.Item label="Cereais/Grão" value="Cereais/Grão" />
							<Picker.Item label="Doces" value="Doces" />
							<Picker.Item label="Frutas/Verduras" value="Frutas/Verduras" />
							<Picker.Item label="Massas" value="Massas" />
							<Picker.Item label="Tempero" value="Tempero" />

						</Picker>
						<View style={styles.Container3}>
							<TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}
								onPress={() => this.pickImage()}>
								<Text style={{ fontSize: 16, color: "#3E782B" }}>Escolher imagem para banca</Text>
							</TouchableOpacity>
							
							<TouchableOpacity style={ styles.button}
								onPress={() => this.saveInfo()}>
								<Text style={ styles.buttonText}>Salvar</Text>
							</TouchableOpacity>
						</View>
					</View>

				</View>
			</ScrollView>
		);
	}

}

export default storeInformations;
