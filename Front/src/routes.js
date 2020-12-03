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
import ViewStand from './pages/ViewStand';
import Profile from './pages/Profile';


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
      <HomeStack.Screen name="ViewStand" component={ViewStand}
      options={{
        title: 'Minha Banca',
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

const ProfileStack = createStackNavigator();
const ProfileScreen = () => (
  <ProfileStack.Screen name="Profile" component={Profile} />

)
const SearchStack = createStackNavigator();
const SearchScreen = () => (
  <SearchStack.Screen name="Search" component={Search} />

)
const AppStack = createMaterialBottomTabNavigator();


export default function Routes() {
  //const isLoged = await AsyncStorage.getItem(login)
  const isLoged = true
  if (isLoged) {
    return (
      <NavigationContainer>
        <AppStack.Navigator
          headerMode="none"
          activeColor={colors.selected}
          inactiveColor={colors.gray}
          barStyle={{ backgroundColor: colors.primaryGreen }}
          shifting={false}
        >
          <AppStack.Screen
            name="Busca"
            component={Search}
            options={{
              tabBarIcon: () => (
                <AntDesign 
                    name="search1"
                    size={24}
                    color={colors.white}

                />
              ),
            }}
          />
          <AppStack.Screen
            name="Perfil"
            component={Profile}
            options={{
              tabBarIcon: () => (
                <AntDesign 
                    name="user"
                    size={24}
                    color={colors.white}
                />
              ),
            }}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}
