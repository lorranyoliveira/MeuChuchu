import React, { useState, useEffect } from 'react';
// importar todos os componentes que vamos usar
import {
    SafeAreaView,
    View,
    FlatList,
    TextInput,
} from 'react-native';
import CardSearch from '../../components/CardSearch';
import HelpButton from '../../components/HelpButton';
import api from '../../services/api';
import styles from './styles';


const Search = () => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

//Caminho para o banco de dados
    useEffect(() => {
        const apiAsyncTest = async () => {

            const response = await api.get('/mostrar_bancas')
                .then((response) => response.data)
                .then((json) => {
                    setMasterDataSource(json)
                    setFilteredDataSource(json);
                })
                .catch((error) => {
                    console.error(error);
                });
        }

        apiAsyncTest();
    }, []);

    const searchFilterFunction = (text) => {
        // Verificando se o titulo pesquisado não está em branco
        if (text) {
            // O texto inserido não está em branco
            // Filtre o masterDataSource
            // Atualizar FilteredDataSource
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.name
                        ? item.name.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setSearch(text);
        
        } else {
            // Se o texto inserido está em branco
            // Atualize FilteredDataSource com masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    return (
        <View style={styles.Container}>

            <SafeAreaView>
                <View>
                    <TextInput
                    //TextImput para inserir a pesquisa
                        style={styles.textInputStyle}
                        onChangeText={(text) => searchFilterFunction(text)}
                        value={search}
                        underlineColorAndroid="transparent"
                        placeholder="Vendedor"
                    />
                    
                    <FlatList
                    // Flatlist para rederizar a pesquisa
                        data={filteredDataSource}
                        showsVerticalScrollIndicator={false}
                        
                        renderItem={({ item }) => (
                            <CardSearch
                                name={item.name.toString()}
                                category={item.category}
                                image={item.image}
                            />
                        
                        )}
                        keyExtractor={(_, i) => i.toString()}
                        
                        
                    />
                    
                </View>
            </SafeAreaView>

        </View>

    );
};


export default Search;

