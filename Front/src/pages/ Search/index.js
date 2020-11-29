//  import React, { useState, useEffect } from 'react';
//import { View, FlatList } from 'react-native';
//import CardSearch from '../../components/CardSearch';
//import FuncSearch from '../../components/FuncSearch';
//import api from '../../services/api';
//import styles from './styles';
//
//
//const Search = () => {
//    const [data, setData] = useState([]);
//    const [username, setUsername] = useState('');
//    useEffect(() => {
//        const apiAsyncTest = async () => {
//            try {
//                const response = await api.get('mostrar_produtos')
//                    //console.log(response);
//                    .then((response) => response.data)
//                    .then((json) => setData(json))
//                    .catch((error) => console.error(error))
//                    .finally(() => setLoading(false));
//            } catch (error) {
//                console.log(error);
//            }
//        }
//        apiAsyncTest();
//    }, []);
//
//    useEffect(() => {
//        const apiAsyncTest = async () => {
//            try {
//                const response = await api.get('mostrar_produtos/' + id)
//                    //console.log(response);
//                    .then((response) => response.data)
//                    .then((json) => setUsername(json))
//                    .catch((error) => console.error(error))
//                    .finally(() => setLoading(false));
//            } catch (error) {
//                console.log(error);
//            }
//        }
//        apiAsyncTest();
//    }, []);
//
//
//    return (
//        <View style={styles.Container}>
//            <FuncSearch
//                value={username}
//                onChangeText={setUsername}
//            />
//                <FlatList
//                    data={data}
//                    showsVerticalScrollIndicator={false}
//                    renderItem={({ item }) => (
//                        <CardSearch
//                            name={item.name.toString()}
//                            descricao={item.descricao.toString()}
//                            preco={item.preco}
//                        //image={item.image.uri}
//                        />
//                    )}
//                    keyExtractor={(_, i) => i.toString()}
//                />
//            </View>
//    );
//
//};
//
//export default Search;


import React, { Component, useEffect, useState} from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
const [data, setData] = useState([]);

useEffect(() => {
    const apiAsyncTest = async () => {
        try {
            const response = await api.get('mostrar_produtos/' + id)

                .then((response) => response.data
                    .then((json) => setData(json))
                    .catch((error) => console.error(error))
                    .finally(() => setLoading(false));
        } catch (error) {
            console.log(error);
        }
    }
    apiAsyncTest();
}, []);
class FlatListDemo extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            error: null,
        };

        this.arrayholder = [];
    }

    componentDidMount() {
        this.apiAsyncTest();
    }

    // makeRemoteRequest = () => {
    //   const url = `https://randomuser.me/api/?&results=20`;
    //   this.setState({ loading: true });
    //
    //   fetch(url)
    //     .then(res => res.json())
    //     .then(res => {
    //       this.setState({
    //         data: res.results,
    //         error: res.error || null,
    //         loading: false,
    //       });
    //       this.arrayholder = res.results;
    //     })
    //     .catch(error => {
    //       this.setState({ error, loading: false });
    //     });
    // };


renderSeparator = () => {
    return (
        <View
            style={{
                height: 1,
                width: '86%',
                backgroundColor: '#CED0CE',
                marginLeft: '14%',
            }}
        />
    );
};

searchFilterFunction = text => {
    this.setState({
        value: text,
    });

    const newData = this.arrayholder.filter(item => {
        const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
    });
    this.setState({
        data: newData,
    });
};

renderHeader = () => {
    return (
        <SearchBar
            placeholder="Type Here..."
            lightTheme
            round
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
        />
    );
};

render() {
    if (this.state.loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator />
            </View>
        );
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <ListItem
                        leftAvatar={{ source: { uri: item.picture.thumbnail } }}
                        title={`${item.name.first} ${item.name.last}`}
                        subtitle={item.email}
                    />
                )}
                keyExtractor={item => item.email}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
            />
        </View>
    );
}
}

export default FlatListDemo;
