import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem';
import TeslaButton from './components/TeslaButton';

export default function App() {
  return (
    <View style={styles.container}>

      <CarItem 
        title={'Model S'}
        subTitle={'Starting at 69.420'} 
        cta={'Touchless Delivery'}
        image={require('./assets/images/ModelS.jpeg') }/>

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
 