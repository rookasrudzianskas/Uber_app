import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, Platform} from 'react-native';
import {Provider} from 'react-redux';
import {store} from "./store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Router from "./navigation/router";



export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <SafeAreaProvider>
                  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={{flex: 1}}>
                      <StatusBar style="auto" />
                      <Router />
                  </KeyboardAvoidingView>
              </SafeAreaProvider>
          </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {

  }
});
