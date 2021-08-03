import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {store} from "./store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <SafeAreaProvider>
                  <StatusBar style="auto" />
                  <HomeScreen />
              </SafeAreaProvider>
          </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {

  }
});
