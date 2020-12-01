import  React, {useState, useEffect} from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity, Button, Alert, Modal} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//import Button from '../../components/Button';
import { colors } from '../../styles';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HelpButton from '../../components/HelpButton';
import api from '../../services/api'
import { useFonts} from '@expo-google-fonts/inter';
import { AppLoading } from 'expo';

export default function ViewStand(){
    const id =  2
    const [modalContactOpen, setModalContactOpen] = useState(false);
    const [modalHelpOpen, setModalHelpOpen] = useState(false);

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    //let [fontsLoaded] = useFonts({
    //   'Red Hat Display Medium': require('../../../assets/fonts/RedHatDisplay-Medium.tff'),
    //});
    
    useEffect(() => {
        const apiAsyncTest = async () => {
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
        apiAsyncTest();
    }, []);

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
              <View style = {styles.modalContent}>
                <View style={styles.ButtonPos}>
                  </View>
                    <Text>Contatos:</Text>
                      <FlatList
                        data={data}
                        keyExtractor={(item) => item.id.toString()} 
                        renderItem={({ item }) => (
                        <Text style={styles.Name}> Email:{item.email}</Text>
                        )}
                    />
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
                  <Text style={styles.Name}>{item.name}</Text>
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