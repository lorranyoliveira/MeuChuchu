// este arquivo apresenta as rotas da aplicação

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();
//import Main from'./pages/Main';

import ConsumerRegister from './pages/ConsumerRegister';


//declaração das páginas de navegação

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="ConsumerRegister" component={ConsumerRegister}/>
            </AppStack.Navigator>
        </NavigationContainer>

    );
}