// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";


const Stack = createNativeStackNavigator();

function Router() {
    return (
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                    headerShown: false,
                }}/>

                <Stack.Screen name="MapScreen" component={MapScreen} options={{
                    headerShown: false,
                }}/>
            </Stack.Navigator>
    );
}

export default Router;
