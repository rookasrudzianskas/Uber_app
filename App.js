import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {store} from "./store";

export default function App() {
  return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>Uber app 🚀!</Text>
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});
