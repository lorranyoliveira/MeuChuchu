import  React, {useState, useEffect} from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
//import { View, Text, Image,TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from '../../components/Button';
import { colors } from '../../styles';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HelpButton from '../../components/HelpButton';
import api from '../../services/api'
import axios from "axios"

export default function ViewStand(){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const apiAsyncTest = async () => {
            try {
                const response = await api.get('mostrar_bancas')
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
    
    return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => (
            <Text>{item.name}, {item.email}</Text>
          )}
        />
      )}
    </View>
  );
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