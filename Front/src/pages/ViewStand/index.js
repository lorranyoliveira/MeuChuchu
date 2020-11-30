import  React, {useState, useEffect} from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity, Button, Alert, Modal, Linking} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//import Button from '../../components/Button';
import { colors, metrics } from '../../styles';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HelpButton from '../../components/HelpButton';
import api from '../../services/api'
import { AppLoading } from 'expo';
import ProductForm from '../ProductForm';

//mdiFacebook mdiInstagram 
// mdiEmail mdiEmailOutline
// mdiPhone mdiPhoneOutline mdiCellphoneAndroid mdiCardAccountPhone
// mdiLaptopWindows 

export default function ViewStand(){
    const id = 1
    const user_id = 1
    const user = true

    const [modalContactOpen, setModalContactOpen] = useState(false);
    const [modalHelpOpen, setModalHelpOpen] = useState(false);
    const [modalProductOpen, setModalProductOpen] = useState(false);

    const [showButton, setshowButton] = useState(false);

    const [isLoadingProduct, setLoadingProduct] = useState(true);
    const [isLoadingStand, setLoadingStand] = useState(true);
    const [isSubmitingProduct, setSubmitingProduct] = useState(false);

    const [data, setData] = useState([]);
    const [product, setProduct] = useState([]);
    
    //let [fontsLoaded] = useFonts({
    //   'Red Hat Display Medium': require('../../../assets/fonts/RedHatDisplay-Medium.tff'),
    //});
    
    useEffect(() => {
        const apiAsyncStand = async () => {
            try {
                const response = await api.get('mostrar_banca/' + id)  
                //console.log(response);
                .then((response) => response.data)
                .then((json) => setData(json))
                .catch((error) => console.error(error))
                .finally(() => setLoadingStand(false));
            } catch (error) {
                console.log(error);
            }
        }
        apiAsyncStand()
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

    function compare(){
      if(user && user_id == data[0].user_id){
        return 1;
      }
    }

    //const teste =() => {
    //  return(
    //    <View>
    //    <Text>Testado</Text>
    //    </View>
    //  )
    //}
    //const value = await AsyncStorage.getItem('user_id');

    const addProduct = (product) => {
      product.banca_id = id;
      setProduct((currentProduct) => {
        api.post('cadastrar_produto', 
                  product)
        return [product, ...currentProduct];
      });
//      setLoadingProduct(true);
      setModalProductOpen(false);
      setSubmitingProduct(false);
    };

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
              {isLoadingStand ? <ActivityIndicator/> : (
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
                          Endereço: {item.endereco}
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
              )}
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
        <View >
          <Modal visible ={modalHelpOpen} animationType = 'slide'>
            <View style = {styles.modalContent}>
              <View style={styles.ButtonPos}>
                <TouchableOpacity style = {styles.Button}  onPress = {() => setModalHelpOpen(false)}>
                  <Text style = {styles.ButtonText}>Fechar modal</Text>
                </TouchableOpacity>
              </View>
                <Text>Ajuda:</Text>
            </View>  
          </Modal> 
        </View> 
        <View >
          <Modal visible ={modalProductOpen} animationType = 'slide'>
            <View style = {styles.modalContent}>
              <View style={styles.ButtonPos}>
                <ProductForm addProduct = {addProduct}/>
                <TouchableOpacity style = {styles.Button}  onPress = {() => setSubmitingProduct(false), () => setModalProductOpen(false)}>
                  <Text style = {styles.ButtonText}>Fechar modal</Text>
                </TouchableOpacity>
              </View>
                <Text>Adicionar produto:</Text>
                
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

            <View style={styles.HelpButton} >
              <TouchableOpacity onPress = {() => setModalHelpOpen(true)}>
                <HelpButton />
              </TouchableOpacity>
            </View>
        </View>

        {isLoadingStand ? <ActivityIndicator/> : (
            <View style={styles.PlusPos}>
              {compare() == 1?
               <TouchableOpacity>
               <MaterialCommunityIcons onPress = {() => setSubmitingProduct(true), () => setModalProductOpen(true)}
                   name="plus-circle" 
                   size = {40} 
                   style={styles.PlusButton}
               />
              </TouchableOpacity>
              : null }
            </View>
          )}

        <View style={styles.NamePos}>
          {isLoadingStand ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}  
              //Math.random().toString();
              
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
          {isLoadingProduct || isSubmitingProduct ? <ActivityIndicator/> : (
            <FlatList
              vertical
              showsVerticalScrollIndicator={true}
              keyExtractor={(item, index) => index.toString()}
              //keyExtractor={({ name }, index) => name.toString()}
              data={product}
              //ItemSeparatorComponent={
              //  () => <View style={{ width: metrics.baseMargin*10, height: metrics.baseMargin}}/>
              //}
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
  //}
//    return (
//<Button style = {styles.Button}
//              //  title="Contate o vendedor"
              //  color = {colors.primaryGreen}
              //  onPress={() => Alert.alert('Simple Button pressed')}
             // />
//
//    <View style={{ flex: 1, padding: 24 }}>
//      {isLoading ? <ActivityIndicator/> : (
//        <FlatList
//          data={data}
//          keyExtractor={(item) => item.id.toString()} 
//          renderItem={({ item }) => (
//            <Text style={styles.Name}>{item.name}, {item.email}</Text>
//          )}
//        />
//      )}
//    </View>
//  );

}
//
//    async function loadStand(){
//
//        if(loading){
//          return;
//        }
//
//        setLoading(true);
//
//        const response = await api.get('incidents', {
//          params: { page }
//        });
//    
//        setIncidents([...bancas, ...response.data]);
//        setPage(page + 1);
//        setLoading(false);
//        //await api.get('/mostrar_bancas')
//        ////.then(function(response) => response.json())
//        //.then((response) => response.data)
//        //.then((json) => setData(json))
//        //.catch((error) => console.error(error))
//        //.finally(() => setLoading(false));
//    }
//
//    useEffect(() => {
//        loadStand();
//    }, []);
    

//export default ViewStand = () => {
//    const [isLoading, setLoading] = useState(true);
//    const [data, setData] = useState([]);
//  
//    useEffect(() => {
//        api.get("mostrar_banca/1")
//        .then((response) => response.json())
//        .then((json) => setData(json.category))
//        .catch((error) => console.error(error))
//        .finally(() => setLoading(false));
//    }, []);
//  
//    return (
//      <View style={{ flex: 1, padding: 24 }}>
//        {isLoading ? <ActivityIndicator/> : (
//          <FlatList
//            data={data}
//            //keyExtractor={(banca) => banca.id} 
//            renderItem={({ category }) => (
//              <Text>{category}</Text>
//            )}
//          />
//        )}
//      </View>
//    );
//    
//};
//
//const [data, setData] = useState('');

//useEffect(() => {
//    Promise.all([
//      api.get("mostrar_banca/1"),
//    ]).then((response) => {
//      for (const res of response) {
//        const {
//          data: {name}
//        } = res;
//
//        setData((state) => [state, { name }]);
//      }
//    });
//  }, []);
//
//api.get("mostrar_banca/1")
//      .then((response) => doSomething(response.data))
//      .catch((err) => {
//        console.error("ops! ocorreu um erro" + err);
//     });


//<ion-icon name="chevron-back-outline"></ion-icon>
//<Ionicons name="chevron-back-outline" size = {24} style={styles.backbutton}/>
//
//const ViewStand = () => {
//    //const [data, setData] = useState('');
//    
//    return (
//        <View style={styles.Container}>
//            <View style={styles.Container2}>
//                <View style = {styles.BackPos}>
//                    <TouchableOpacity>
//                        <MaterialCommunityIcons
//                            name = "chevron-left" 
//                            size = {70}
//                            style= {styles.BackButton}
//                        />
//                    </TouchableOpacity>
//                </View>
//                <View style={styles.HelpButton}>
//                   <HelpButton/> 
//                </View>
//            </View>
//
//            <View>
//                <Text>
//                    Aqui vai o nome!
//                </Text>
//            </View>
//
//            <View style={styles.PlusPos}>
//                <TouchableOpacity>
//                    <MaterialCommunityIcons 
//                        name="plus-circle" 
//                        size = {30} 
//                        style={styles.PlusButton}
//                    />
//                </TouchableOpacity>
//            </View>
//
//            <View style={{ flex: 4, }}>
//                <Button style={styles.Botton}
//                    text="Contate o vendedor"
//                    width={250}
//                    backgroundColor={colors.primaryGreen}
//                />
//            </View>
//        </View>
//    );
//};