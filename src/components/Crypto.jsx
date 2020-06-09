import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PercentChange from './PercentChange';

export default function Crypto({ name, symbol, priceUsd, percentChange24h, percentChange7d }) {
    return (
        <View style={coinCard}>
            <View style={coinInfoRow}>
                <Text style={coinName}>{name} ({symbol})</Text>
                <Text style={coinPrice}>
                    {priceUsd.toFixed(2)}
                    <Text style={usdSymbol}>$</Text>
                </Text>
            </View>
            <View style={percentChangeRow}>
                <PercentChange percentChange={percentChange24h} timeMark='24h' />
                <PercentChange percentChange={percentChange7d} timeMark='7d' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    coinCard: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e3e3e3",
        borderBottomWidth: 3,
        padding: 20
    },
    coinInfoRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20,
        fontWeight: 'bold',
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20,
        fontWeight: 'bold'
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    usdSymbol: {
        marginLeft: 5,
        fontWeight: 'bold'
    },
    percentChangeRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopColor: '#f3f3f3',
        borderTopWidth: 2,
        padding: 10
    }
});

const {
    coinCard,
    coinInfoRow,
    coinSymbol,
    coinName,
    coinPrice,
    usdSymbol,
    percentChangeRow
} = styles;