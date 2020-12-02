//Esse arquivo apresenta a estrutura da tela de visualização dos dados e produtos das bancas

//Imports
import  React, {useState, useEffect} from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity, Alert, Modal, Linking} from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../services/api'

//Declaração da estrutura da tela ViewStand
export default function ViewStand(){
    const id = 1
    const user = true
    const user_id = 1
    const [modalContactOpen, setModalContactOpen] = useState(false);

    const [isLoadingStand, setLoadingStand] = useState(true);
    const [isLoadingProduct, setLoadingProduct] = useState(true);
    const [data, setData] = useState([]);
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        const apiAsyncStand = async () => {
            try {
                const response = await api.get('mostrar_banca/' + id)  
                .then((response) => response.data)
                .then((json) => setData(json))
                .catch((error) => console.error(error))
                .finally(() => setLoadingStand(false));
            } catch (error) {
                console.log(error);
            }
        }
        apiAsyncStand();
    }, []);

    useEffect(() => {
      const apiAsyncProduct = async () => {
          try {
              const response = await api.get('mostrar_produto/' + id)  
              .then((response) => response.data)
              .then((json) => setProduct(json))
              .catch((error) => console.error(error))
              .finally(() => setLoadingProduct(false));
          } catch (error) {
              console.log(error);
          }
      }
      apiAsyncProduct();
    }, []);

    const DeleteProduct = async (product_id) => {
      await api.get('deletar_produto/' + product_id)
      
      setLoadingProduct(true)
      const response = await api.get('mostrar_produto/' + id)  
        .then((response) => response.data)
        .then((json) => setProduct(json))
        .finally(() => setLoadingProduct(false));
    };

    const DeleteConfirm = (product_id) =>
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

      function compare(){
        if(user && user_id == data[0].user_id){
          return 1;
        }
      }

      return (
        <View style={styles.Container}>
          <View style = {styles.Container1}>
            <Image
                style={styles.Photo}
                source={require('../../image/feira.png')}
            />
          </View>

          <View >
            <Modal visible ={modalContactOpen} animationType = 'slide'>
              <View style = {styles.ModalContacts}>
                <View style = {styles.PosContactsTitle}>
                  <Text style = {styles.ContactsTitle}>Contatos:</Text>
                </View>
                <View style = {styles.ContactsPos}>
                  <FlatList 
                    data={data}
                    keyExtractor={(item) => item.id.toString()} 
                    renderItem={({ item }) => (
                      <View style = {styles.ContactModal}>
                        <View style = {styles.Contact}>
                          <MaterialCommunityIcons
                            name = "cellphone-basic" 
                            size = {70}
                            style= {{color: 'darkorange'}}
                          />
                          <Text style={styles.Contacts} onPress={() => Linking.openURL(`tel:${item.celular}`)}>
                            Celular: {item.celular}
                          </Text>
                        </View>
                        <View style = {styles.Contact}>
                          <MaterialCommunityIcons
                            name = "instagram" 
                            size = {70}
                            style= {{color: '#C13584'}}
                          />
                          <Text style={styles.Contacts} onPress={() => Linking.openURL("https://instagram.com/" + item.instagram)}>
                            Instagram: {item.instagram}
                          </Text>
                        </View>
                        <View style = {styles.Contact}>
                          <MaterialCommunityIcons
                            name = "email-outline" 
                            size = {70}
                            style= {{color: 'red'}}
                          />
                          <Text style={styles.Contacts} onPress={() => Linking.openURL(`mailto:${item.email}`)}>
                            Email: {item.email}
                          </Text>
                        </View>
                        <View style = {styles.Contact}>
                          <MaterialCommunityIcons
                            name = "facebook" 
                            size = {70}
                            style= {{color: '#3b5998'}}
                          />
                          <Text style={styles.Contacts} onPress={() => Linking.openURL("https://facebook.com/" + item.facebook)}>
                            Facebook: {item.facebook}
                          </Text>
                        </View>
                        <View style = {styles.Contact}>
                          <MaterialCommunityIcons
                            name = "laptop-windows" 
                            size = {70}
                            style= {{color: 'limegreen'}}
                          />
                          <Text style={styles.Contacts} onPress={() => Linking.openURL("https://" + item.website)}>
                            Website: {item.website}
                          </Text>
                        </View>
                        <View style = {styles.Contact}>
                          <MaterialCommunityIcons
                            name = "sign-direction" 
                            size = {70}
                            style= {{color: 'pink'}}
                          />
                          <Text style={styles.Contacts}>
                            Endereco: {item.endereco}
                          </Text>
                        </View>
                        <View style = {styles.Contact}>
                          <MaterialCommunityIcons
                            name = "map-marker" 
                            size = {70}
                            style= {{color: '#fde910'}}
                          />
                          <Text style={styles.Contacts}>
                            Região Administrativa: {item.regadm}
                          </Text>
                        </View>
                      </View>
                    )}
                  />
                </View>
                  
                  <View style={styles.ClosePos}>
                    <TouchableOpacity onPress = {() => setModalContactOpen(false)}>
                      <MaterialCommunityIcons
                            name = "close-circle" 
                            size = {50}
                            style= {styles.CloseButton}
                      />
                    </TouchableOpacity>
                  </View>
              </View>  
            </Modal> 
          </View> 


          <View style={styles.Container2}>
              <View style = {styles.BackPos}>
                  <TouchableOpacity>
                      <MaterialCommunityIcons
                          name = "chevron-left" 
                          size = {70}
                          style= {styles.BackButton}
                      />
                  </TouchableOpacity>
              </View>
          </View>
          <View style={styles.NamePos}>
            {isLoadingStand ? <ActivityIndicator/> : (
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
            {isLoadingStand ? <ActivityIndicator/> : (
              <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()} 
                renderItem={({ item }) => (
                  <Text style={styles.Category}>{item.category.toString().replace(',', ', ')}</Text>
                )}
              />
            )}
          </View>        
          <View style={styles.ProductsPos}>
            {isLoadingProduct ? <ActivityIndicator/> : (
              <FlatList
                vertical
                showsVerticalScrollIndicator={true}
                keyExtractor={(item) => item.id.toString()}
                data={product}
                renderItem={({ item }) => (
                  <View style={styles.Product}>
                    <Image
                      source={require('../../image/frutas_verduras.jpg')}
                      style ={styles.ProductImage}
                    />
                    <View style={styles.ProductText}>
                      <Text style={styles.ProductName}>
                        {item.name}
                      </Text>
                      <Text style={styles.ProductPrice}>
                        Preço: R${item.preco}
                      </Text>
                      <Text style={styles.ProductDes}>
                        Descrição: {item.descricao}
                      </Text>
                    </View>
                    {isLoadingStand? <ActivityIndicator/> : (
                      <View >
                        {compare() == 1? 
                          <TouchableOpacity onPress = {() => DeleteConfirm(item.id)}> 
                            <MaterialCommunityIcons 
                              name = "trash-can-outline" 
                              size = {25}
                              style= {styles.Delete}
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

          <View style={styles.ButtonPos} >
              <TouchableOpacity style = {styles.Button} onPress = {() => setModalContactOpen(true)}>
                <Text style = {styles.ButtonText}>Contate o vendedor</Text>
              </TouchableOpacity>
          </View>
        </View>
      );
}
