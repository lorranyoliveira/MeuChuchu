// este arquivo apresenta as rotas da aplicação

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();
//import Main from'./pages/Main';
<<<<<<< HEAD
import ProfileOption from './pages/ProfileOption';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ConsumerRegister from './pages/ConsumerRegister';
import FeiranteRegister from './pages/FeiranteRegister';
import storeInformations from './pages/storeInformations';
import header from'./components/header';
=======
//import ProfileOption from './pages/ProfileOption';
//import ViewStand from './pages/ViewStand';
import Profile from './pages/Profile';
import Login from './pages/Login';

//declaração das páginas de navegação

>>>>>>> dea8b49ef1b03ae3769f8df32612a6f156c4dd4d
export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="ConsumerRegister" component={ConsumerRegister}/>
            </AppStack.Navigator>
        </NavigationContainer>

    );
}