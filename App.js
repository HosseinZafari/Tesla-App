import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem';
import CarsList from './components/CarsList';
import Header from './components/Header';
import TeslaButton from './components/TeslaButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />

      <StatusBar style={'auto'}/>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 