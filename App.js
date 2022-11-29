import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Home from './src/screens/Home/index';

export default function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      <StatusBar/>
      <Home />
    </SafeAreaView >
  )
};

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }
});