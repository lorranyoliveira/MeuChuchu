import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();
//import Main from'./pages/Main';
import ProfileOption from './pages/ProfileOption';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Profile Option" component={ProfileOption}/>
            </AppStack.Navigator>
        </NavigationContainer>

    );
}