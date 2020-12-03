// este arquivo apresenta as rotas da aplicação

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();
//import Main from'./pages/Main';

import ConsumerRegister from './pages/ConsumerRegister';


//declaração das páginas de navegação

let id = 2 //id é o id da banca selecionada
let user_id = 34 //user_id é o id do usuário que está logado
let user = true

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="ConsumerRegister" component={ConsumerRegister}/>
            </AppStack.Navigator>
        </NavigationContainer>

    );
}