import React from 'react';
import { View } from 'react-native';
import { Header, Cryptos } from './src/components/index';

export default function App() {
  return (
    <View>
      <Header />
      <Cryptos />
    </View>
  );
}