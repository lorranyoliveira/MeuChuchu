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


const HomeStack = createStackNavigator();
const HomeScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Escolha de Perfil" component={ProfileOption} />
    <HomeStack.Screen name="Search" component={Search}/>
    <HomeStack.Screen name="Login" component={Login}/>
    <HomeStack.Screen name="FeiranteRegister" component={FeiranteRegister}/>
    <HomeStack.Screen name="storeInformations" component={storeInformations}/>
  </HomeStack.Navigator>
)
export default function Routes() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}
