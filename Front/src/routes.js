// este arquivo apresenta as rotas da aplicação
import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { colors, metrics, fonts } from './styles';

import ProfileOption from './pages/ProfileOption';
import Profile from './pages/Profile';
import Search from './pages/Search';

const NavBar = createStackNavigator();

const NavScreen = () => {
  return (
    <NavBar.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.btnBlue,
          height: metrics.screenHeight * 0.13,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: colors.primaryYellow,
          fontSize: fonts.title * 0.825,
        },
        headerTintColor: colors.primaryYellow,
      }}
    >
      <NavBar.Screen
        name="ProfileOption"
        component={ProfileOption}
        options={{
          title: 'Tipo de Perfil',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => { sethelpModalVisible(!helpModalVisible); }}
              style={{ margin: metrics.baseMargin * 2 }}
            >
              <FontAwesome name="question" size={32} color={colors.primaryGreen} />
            </TouchableOpacity>
          ),
        }}
      />
    </NavBar.Navigator>
  );
};

const NavSerch = createStackNavigator();

const NavSerchScreen = () => {
  return (
    <NavSerch.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.btnBlue,
          height: metrics.screenHeight * 0.13,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: colors.primaryYellow,
          fontSize: fonts.title * 0.825,
        },
        headerTintColor: colors.primaryYellow,
      }}
    >
      <NavSerch.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Buscar',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => { sethelpModalVisible(!helpModalVisible); }}
              style={{ margin: metrics.baseMargin * 2 }}
            >
              <FontAwesome name="question" size={32} color={colors.primaryGreen} />
            </TouchableOpacity>
          ),
        }}
      />
    </NavSerch.Navigator>
  );
};
const AppStack = createMaterialBottomTabNavigator();

export default function Routes() {
  const [isReady, setReady] = useState(false);

//   const netInfo = useNetInfo();
//   const { signed } = useAuth();

//   if (!isReady) {
//     return (
//       <AppLoading startAsync={fetchFonts} onFinish={() => setReady(true)} />
//     );
//   }

//  if (netInfo.isConnected) {
//    if (signed) {
      return (
        <NavigationContainer>
          <AppStack.Navigator
            headerMode="none"
            activeColor={colors.selected}
            inactiveColor={colors.gray}
            barStyle={{ backgroundColor: colors.primaryGreen}}
            shifting={false}
          >
            <AppStack.Screen
              name="Busca"
              component={NavSerchScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <AntDesign name="search1" size={24} color={color} />
                ),
              }}
            />
            <AppStack.Screen
              name="Perfil"
              component={NavScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <AntDesign name="user" size={24} color={color} />
                ),
              }}
            />
          </AppStack.Navigator>
        </NavigationContainer>
      );
    }
 // }
//}







