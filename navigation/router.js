// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";


const Stack = createNativeStackNavigator();

function Router() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                    headerShown: false,
                }}/>
            </Stack.Navigator>
    );
}

export default Router;
