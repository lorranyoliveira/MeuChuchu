// este arquivo apresenta as rotas da aplicação
import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { colors, metrics, fonts } from './styles';

import ProfileOption from './pages/ProfileOption';
import FeiranteRegister from './pages/FeiranteRegister';
import storeInformations from './pages/storeInformations';
import Search from './pages/Search';
import Login from './pages/Login';


<<<<<<< HEAD
const HomeStack = createStackNavigator();
const HomeScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Escolha de Perfil" component={ProfileOption} />
    <HomeStack.Screen name="Search" component={Search}
      options={{
        title: 'Busca',
        headerRight: () => (
          <TouchableOpacity
            // onPress={() => { sethelpModalVisible(!helpModalVisible); }}
            style={{ margin: metrics.baseMargin * 2 }}
          >
            <FontAwesome name="question" size={32} color={colors.gray} />
          </TouchableOpacity>
        ),
      }} />
    <HomeStack.Screen name="Login" component={Login}
      options={{
        title: 'Login',
        headerRight: () => (
          <TouchableOpacity
            // onPress={() => { sethelpModalVisible(!helpModalVisible); }}
            style={{ margin: metrics.baseMargin * 2 }}
          >
            <FontAwesome name="question" size={32} color={colors.gray} />
          </TouchableOpacity>
        ),
      }} />
    <HomeStack.Screen name="FeiranteRegister" component={FeiranteRegister}
      options={{
        title: 'Cadastro feirante',
        headerRight: () => (
          <TouchableOpacity
            // onPress={() => { sethelpModalVisible(!helpModalVisible); }}
            style={{ margin: metrics.baseMargin * 2 }}
          >
            <FontAwesome name="question" size={32} color={colors.gray} />
          </TouchableOpacity>
        ),
      }} />
    <HomeStack.Screen name="storeInformations" component={storeInformations}
      options={{
        title: 'Cadastro Feirante',
        headerRight: () => (
          <TouchableOpacity
            // onPress={() => { sethelpModalVisible(!helpModalVisible); }}
            style={{ margin: metrics.baseMargin * 2 }}
          >
            <FontAwesome name="question" size={32} color={colors.gray} />
          </TouchableOpacity>
        ),
      }} />
  </HomeStack.Navigator>
)
export default function Routes() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}
=======
//declaração das páginas de navegação

let id = 2 //id é o id da banca selecionada
let user_id = 34 //user_id é o id do usuário que está logado
let user = true

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="ViewStand" component={ViewStand}/>
            </AppStack.Navigator>
        </NavigationContainer>

    );
}
>>>>>>> 13cec9e8212ab8755271d4a4c963e94f6815fe94
