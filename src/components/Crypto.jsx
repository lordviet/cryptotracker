import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Crypto({ name, symbol, priceUsd, percentChange24h, percentChange7d }) {
    return (
        <View>
            <Text>{symbol}</Text>
            <Text>{name}</Text>
            <Text>{priceUsd}</Text>
            <Text>{percentChange24h} {percentChange7d}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    coinName: {},
    coinSymbol: {},
    coinPrice:{},
   // Percent change + green and - red 
});