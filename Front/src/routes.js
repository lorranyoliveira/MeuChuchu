// este arquivo apresenta as rotas da aplicação

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();
//import Main from'./pages/Main';
//import ProfileOption from './pages/ProfileOption';
//import Profile from './pages/Profile';
//import ViewStand from './pages/ViewStand';
import Login from './pages/Login';

//declaração das páginas de navegação

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Login" component={Login}/>
            </AppStack.Navigator>
        </NavigationContainer>

    );
}