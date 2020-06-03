import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Crypto({ name, symbol, priceUsd, percentChange24h, percentChange7d }) {
    return (
        <View>
            <Text>{name} - {symbol} - {priceUsd}</Text>
            <Text>{percentChange24h} {percentChange7d}</Text>
        </View>
    );
}