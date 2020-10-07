import {createStackNavigator} from '@react-navigation/stack';
import Details from '../Details';
import Home from '../Home';
import React from 'react'

const Stack = createStackNavigator();

export const HomeStack = () => {

    return (
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'NewsDetails'} component={Details} />
      </Stack.Navigator>
    );
}