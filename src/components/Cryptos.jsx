import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { API_KEY } from 'react-native-dotenv'
import Crypto from './Crypto';
import axios from 'axios';

export default function Cryptos() {
    const [cryprocurrencies, setCryptocurrencies] = useState([]);
    
    useEffect(() => {
        axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            {
                params: {
                    'CMC_PRO_API_KEY': API_KEY,
                    'start': '1',
                    'limit': '10',
                    'convert': 'USD',
                }
            })
            .then(res => {
                setCryptocurrencies(res.data.data)
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <View style={cryptosContainer}>
            <ScrollView>
                {cryprocurrencies.length
                    ? renderCryptos(cryprocurrencies)
                    : <Text>Loading...</Text>}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    cryptosContainer: {
        display: "flex",
        marginTop: 60,
        alignItems: "center",
    },
})

const { cryptosContainer } = styles;

const renderCryptos = (cryprocurrencies) => {
    return cryprocurrencies.map(c => (
        <Crypto
            key={c.id}
            name={c.name}
            symbol={c.symbol}
            priceUsd={c.quote.USD.price}
            percentChange24h={c.quote.USD.percent_change_24h}
            percentChange7d={c.quote.USD.percent_change_7d}
        />
    ));
};