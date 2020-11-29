import  React, {useState, useEffect} from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity, Button, Alert, Modal, Linking} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//import Button from '../../components/Button';
import { colors, metrics } from '../../styles';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HelpButton from '../../components/HelpButton';
import api from '../../services/api'
import { useFonts} from '@expo-google-fonts/inter';
import { AppLoading } from 'expo';
//import * as MailComposer from 'expo-mail-composer';

//mdiFacebook mdiInstagram 
// mdiEmail mdiEmailOutline
// mdiPhone mdiPhoneOutline mdiCellphoneAndroid mdiCardAccountPhone
// mdiLaptopWindows 

export default function ViewStand(){
    const id = 1
    const [modalContactOpen, setModalContactOpen] = useState(false);
    const [modalHelpOpen, setModalHelpOpen] = useState(false);

    const [isLoading, setLoading] = useState(true);
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
                .finally(() => setLoading(false));
            } catch (error) {
                console.log(error);
            }
        }
        apiAsyncStand();
      
  

//        const apiAsyncProduct = async () => {
//          try {
//              const response = await api.get('mostrar_produto/' + id)  
//              //console.log(response);
//              .then((response) => response.product)
//              .then((json) => setProduct(json))
//              .catch((error) => console.error(error))
//              .finally(() => setLoading(false));
//          } catch (error) {
//              console.log(error);
//          }
//        }
//        apiAsyncProduct();
    }, []);

    useEffect(() => {
      const apiAsyncStand = async () => {
          try {
              const response = await api.get('mostrar_produto/' + id)  
              //console.log(response);
              .then((response) => response.data)
              .then((json) => setProduct(json))
              .catch((error) => console.error(error))
              .finally(() => setLoading(false));
          } catch (error) {
              console.log(error);
          }
      }
      apiAsyncStand();
    }, []);

  // function sendMail() {
  // MailComposer.composeAsync({
  // subject: `MeuChuchu: ${item.name}`,
  //  recipients: [item.email],
  // })
  //}

    //if (!fontsLoaded) {
    //  return <AppLoading />;
    //} else {
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
                    <Text style={styles.Contacts}> 
                       Email: {item.email}{"\n"}{"\n"}{"\n"}
                       Celular: {item.celular}{"\n"}{"\n"}{"\n"}
                       Instagram: {item.instagram}{"\n"}{"\n"}{"\n"}
                       Facebook: {item.facebook}{"\n"}{"\n"}{"\n"}
                       Website: {item.website}{"\n"}
                    </Text>
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
          <View style={styles.NamePos}>
            {isLoading ? <ActivityIndicator/> : (
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
            {isLoading ? <ActivityIndicator/> : (
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
            {isLoading ? <ActivityIndicator/> : (
              <FlatList
                vertical
                showsVerticalScrollIndicator={true}
                keyExtractor={(item) => item.id.toString()}
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
              //  title="Contate o vendedor"
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