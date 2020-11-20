import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();
//import Main from'./pages/Main';
//import ProfileOption from './pages/ProfileOption';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ConsumerRegister from './pages/ConsumerRegister';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="ConsumerRegister" component={ConsumerRegister}/>
            </AppStack.Navigator>
        </NavigationContainer>

    );
}