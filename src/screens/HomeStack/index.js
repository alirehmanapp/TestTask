import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//Screens
import HomeScreen from './HomeScreen'

//Utils
import colors from '../../utils/colors';

//Components


/** Home Stack */
export default HomeStack = () => (
    <Stack.Navigator
        headerMode="none"
        initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
);