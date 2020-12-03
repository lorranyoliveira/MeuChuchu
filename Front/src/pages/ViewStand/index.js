//Esse arquivo apresenta a estrutura da tela de visualização dos dados e produtos das bancas

//Imports
import React, { useState, useEffect, Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity, Alert, Modal, Linking } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../services/api'
import ProductForm from '../ProductForm';
import base64 from 'react-native-base64'

//Declaração da estrutura da tela ViewStand

///////////DESCOMENTAR A PRÓXIMA LINHA//////////////
// export default function ViewStand(id, user_id, user){ 
let id = 2 //id é o id da banca selecionada
let user_id = 34 //user_id é o id do usuário que está logado
let user = true


class ViewStand extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalContactOpen: false,
      modalProductOpen: false,
      isLoadingProduct: '',
      isLoadingStand: '',
      isSubmitingProduct: '',
      product: '',
      data: ''
    }

    let id = 2 //id é o id da banca selecionada
    let user_id = 34 //user_id é o id do usuário que está logado
    let user = true
  }

  componentDidMount = async () => {
    const apiAsyncStand = async () => {
      try {
        const response = await api.get('mostrar_banca/' + id)
          .then((response) => response.data)
          .then((json) => this.handleChange(json, 'data'))
          .catch((error) => console.error(error))
          .finally(() => this.handleChange(false, 'isLoadingStand'));
      } catch (error) {
        console.log(error);
      }
    }
    apiAsyncStand();

    const apiAsyncProduct = async () => {
      try {
        const response = await api.get('mostrar_produto/' + id)
          .then((response) => response.data)
          .then((json) => this.handleChange(json, 'product'))
          .catch((error) => console.error(error))
          .finally(() => this.handleChange(false, 'loadingProduct'));
      } catch (error) {
        console.log(error);
      }
    }
    apiAsyncProduct();
  }

  DeleteProduct = async (product_id) => {
    await api.get('deletar_produto/' + product_id)

    this.handleChange(true, 'loadingProduct')
    const response = await api.get('mostrar_produto/' + id)
      .then((response) => response.data)
      .then((json) => this.handleChange(json, 'product'))
      .finally(() => this.handleChange(false, 'loadingProduct'));
  };

  DeleteConfirm = (product_id) =>
    Alert.alert(
      "Excluir produto",
      "Você quer mesmo excluir o produto?",
      [
        {
          text: "Cancelar",
        },
        { text: "Excluir", onPress: () => DeleteProduct(product_id) }
      ],
    );

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

  compare = (user) => {
    if (user && user_id == data[0].user_id) {
      return 1;
    }
  }

  displayImage = (item) => {
    const image = base64.decode(item.image)
    return (
      <Image
        // style={styles.ProductImage}
        source={{ uri: `data:image/jpg;base64,${image}` }}
      />
    )
  }

  handleChange = (event, name) => {
    const value = event.target ? event.target.value : event;
    this.setState({ [name]: value });
  };

  render() {
    const {
      modalContactOpen, modalProductOpen, isLoadingProduct, isLoadingStand, isSubmitingProduct, product, data
    } = this.state
    return (
      <View style={styles.Container}>
        <View style={styles.Container1}>
          <Image
            style={styles.Photo}
            source={require('../../image/feira.png')}
          />
        </View>

        <View >
          <Modal visible={modalContactOpen} animationType='slide'>
            <View style={styles.ModalContacts}>
              <View style={styles.PosContactsTitle}>
                <Text style={styles.ContactsTitle}>Contatos:</Text>
              </View>
              <View style={styles.ContactsPos}>
                {isLoadingStand ? <ActivityIndicator /> : (
                  <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                      <View style={styles.ContactModal}>
                        <View style={styles.Contact}>
                          <MaterialCommunityIcons
                            name="cellphone-basic"
                            size={70}
                            style={{ color: 'darkorange' }}
                          />
                          <Text style={styles.Contacts} onPress={() => Linking.openURL(`tel:${item.celular}`)}>
                            Celular: {item.celular}
                          </Text>
                        </View>
                        <View style={styles.Contact}>
                          <MaterialCommunityIcons
                            name="instagram"
                            size={70}
                            style={{ color: '#C13584' }}
                          />
                          <Text style={styles.Contacts} onPress={() => Linking.openURL("https://instagram.com/" + item.instagram)}>
                            Instagram: {item.instagram}
                          </Text>
                        </View>
                        <View style={styles.Contact}>
                          <MaterialCommunityIcons
                            name="email-outline"
                            size={70}
                            style={{ color: 'red' }}
                          />
                          <Text style={styles.Contacts} onPress={() => Linking.openURL(`mailto:${item.email}`)}>
                            Email: {item.email}
                          </Text>
                        </View>
                        <View style={styles.Contact}>
                          <MaterialCommunityIcons
                            name="facebook"
                            size={70}
                            style={{ color: '#3b5998' }}
                          />
                          <Text style={styles.Contacts} onPress={() => Linking.openURL("https://facebook.com/" + item.facebook)}>
                            Facebook: {item.facebook}
                          </Text>
                        </View>
                        <View style={styles.Contact}>
                          <MaterialCommunityIcons
                            name="laptop-windows"
                            size={70}
                            style={{ color: 'limegreen' }}
                          />
                          <Text style={styles.Contacts} onPress={() => Linking.openURL("https://" + item.website)}>
                            Website: {item.website}
                          </Text>
                        </View>
                        <View style={styles.Contact}>
                          <MaterialCommunityIcons
                            name="sign-direction"
                            size={70}
                            style={{ color: 'pink' }}
                          />
                          <Text style={styles.Contacts}>
                            Endereço: {item.endereco}
                          </Text>
                        </View>
                        <View style={styles.Contact}>
                          <MaterialCommunityIcons
                            name="map-marker"
                            size={70}
                            style={{ color: '#fde910' }}
                          />
                          <Text style={styles.Contacts}>
                            Região Administrativa: {item.regadm}
                          </Text>
                        </View>
                      </View>
                    )}
                  />
                )}
              </View>
              <View style={styles.ClosePos}>
                <TouchableOpacity onPress={(e) => this.setState({modalContactOpen: false})}>
                  <MaterialCommunityIcons
                    name="close-circle"
                    size={50}
                    style={styles.CloseButton}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View>
          <Modal visible={modalProductOpen} animationType='slide'>
            <View style={styles.modalContent}>
              <Text style={styles.AddProductsTitle}>Adicionar produto</Text>
              <View style={styles.ButtonPos}>
                <ProductForm addProduct={this.addProduct} />
                <View style={styles.ClosePos2}>
                  <TouchableOpacity onPress={() => this.handleChange(false, 'submiting'), (e) => this.handleChange(e, 'ProductOpen')}>
                    <MaterialCommunityIcons
                      name="close-circle"
                      size={50}
                      style={styles.CloseButton}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.Container2}>
          <View style={styles.BackPos}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="chevron-left"
                size={70}
                style={styles.BackButton}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.NamePos}>
          {isLoadingStand ? <ActivityIndicator /> : (
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}

              renderItem={({ item }) => (
                <Text style={styles.Name}>{item.name} </Text>
              )}
            />
          )}
        </View>

        <View style={styles.CategoryPos}>
          {isLoadingStand ? <ActivityIndicator /> : (
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Text style={styles.Category}>{item.category.toString().replace(',', ', ')}</Text>
              )}
            />
          )}
        </View>

        {isLoadingStand ? <ActivityIndicator /> : (
          <View style={styles.PlusPos}>
            {this.compare() == 1 ?
              <TouchableOpacity>
                <MaterialCommunityIcons onPress={() => this.handleChange(true, 'submitingProduct'), (e) => this.handleChange(e, 'ProductOpen')}
                  name="plus-circle"
                  size={40}
                  style={styles.PlusButton}
                />
              </TouchableOpacity>
              : null}
          </View>
        )}

        <View style={styles.ButtonPos} >
          <TouchableOpacity
            style={styles.Button}
            onPress={(e) => this.setState({modalContactOpen: true})}>
            <Text style={styles.ButtonText}>Contate o vendedor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ProductsPos}>
          {isLoadingProduct || isSubmitingProduct ? <ActivityIndicator /> : (
            <FlatList
              vertical
              showsVerticalScrollIndicator={true}
              keyExtractor={(item, index) => index.toString()}
              data={product}
              renderItem={({ item }) => (
                <View style={styles.Product}>
                  <Image
                    style={styles.ProductImage}
                    source={require('../../image/feira.png')}
                  />
                  <View style={styles.ProductText}>
                    <Text style={styles.ProductName}>
                      {item.name}
                    </Text>
                    {item.preco == -1 ?
                      < Text style={styles.ProductPrice}>
                        Preço: --
                      </Text>
                      :
                      < Text style={styles.ProductPrice}>
                        Preço: R${item.preco}
                      </Text>
                    }
                    <Text style={styles.ProductDes}>
                      Descrição: {item.descricao}
                    </Text>
                  </View>
                  {isLoadingStand ? <ActivityIndicator /> : (
                    <View >
                      {this.compare() == 1 ?
                        <TouchableOpacity onPress={() => this.DeleteConfirm(item.id)}>
                          <MaterialCommunityIcons
                            name="trash-can-outline"
                            size={25}
                            style={styles.Delete}
                          />
                        </TouchableOpacity>
                        : null}
                    </View>
                  )}
                </View>
              )}
            />
          )}
        </View>
      </View>
    );
  }

}

export default ViewStand;