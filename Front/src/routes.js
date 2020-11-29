import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();
//import Main from'./pages/Main';
import ProfileOption from './pages/ProfileOption';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ConsumerRegister from './pages/ConsumerRegister';
import FeiranteRegister from './pages/FeiranteRegister';
import storeInformations from './pages/storeInformations';
import header from'./components/header';
export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="ProfileOption" component={ProfileOption}/>
            </AppStack.Navigator>
        </NavigationContainer>

    );
}