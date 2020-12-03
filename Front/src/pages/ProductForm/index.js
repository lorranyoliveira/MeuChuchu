//Esse arquivo apresenta a estrutura da tela de visualização dos dados das bancas

//Imports
import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import styles from './styles';
import { Formik } from 'formik';
import Header from '../../components/header';
import api from '../../services/api';
import * as ImagePicker from 'expo-image-picker';

//Declaração da estrutura da tela ProductForm

 const banca_id = 2;
class ProductForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			preco: '',
			descricao: '',
			image: ''

		}
	}

	addProduct = (product) => {
		if (product.name != '') {
			if (product.preco == '') {
				product.preco = -1;
			}
			product.banca_id = id;
			this.handleChange(currentProduct => {
				api.post('cadastrar_produto',
					product)
				return [product, ...currentProduct];
			}, 'product');
		}
		this.handleChange(false, 'ProductOpen');
		this.handleChange(false, 'submitingProduct');
	};

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
			"descricao": this.state.descricao,
			"preco": this.state.preco,
			"image": this.state.image['base64'],
			"banca_id": banca_id
		}
		console.log(payload)
		const res = await api.post('/cadastrar_produto', payload).then((res) => {
			console.log(res.data)
		})
	}


	render() {
		return (
			<View style={styles.Container}>
				<Header />
				<View style={styles.Container2}>
					<Text style={styles.textos}>Nome do produto</Text>
					<Input
						// style={styles.Input}
						onChangeText={(e) => this.handleChange(e, 'name')}
					/>
					<Text style={styles.textos}>Descrição do produto</Text>
					<Input
						// style={styles.Input}
						onChangeText={(e) => this.handleChange(e, 'descricao')}
					/>
					<Text style={styles.textos}>Preço</Text>
					<Input
						// style={styles.Input}
						onChangeText={(e) => this.handleChange(e, 'preco')}
					/>
					<View style={styles.Container3}>
							<TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}
								onPress={() => this.pickImage()}>
								<Text style={{ fontSize: 16, color: "#3E782B" }}>Escolher imagem para produto</Text>
							</TouchableOpacity>
							
							<TouchableOpacity style={ styles.button}
								onPress={() => this.saveInfo()}>
								<Text style={ styles.buttonText}>Salvar</Text>
							</TouchableOpacity>
						</View>
				</View>
			</View>
		);
	}
}

export default ProductForm;