import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Crypto({ name, symbol, priceUsd, percentChange24h, percentChange7d }) {
    return (
        <View>
            <View style={coinInfoRow}>
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={seperator}>|</Text>
                <Text style={coinName}>{name}</Text>
            </View>
            <Text>{priceUsd}</Text>
            <Text>{percentChange24h} {percentChange7d}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    coinInfoRow:{
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: "bold",
    },
    seperator: {
        marginTop: 10,
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    },
    coinPrice: {},
    // Percent change + green and - red 
});

const { coinInfoRow, coinSymbol, seperator, coinName, coinPrice } = styles;