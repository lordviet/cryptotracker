import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function PercentChange({ percentChange, timeMark }) {
    return (
        <View style={percentChangeContainer}>
            <Text style={timeMarker}>{timeMark}:</Text>
            <Text style={percentChange > 0
                ? positivePercentChange
                : negativePercentChange}>
                {percentChange.toFixed(2)}%
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    percentChangeContainer:{
        display: 'flex',
        flexDirection: 'row',
    },
    timeMarker: {
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold'
    },
    positivePercentChange: {
        color: '#00BFA5',
        fontWeight: 'bold',
        marginLeft: 5
    },
    negativePercentChange: {
        color: '#DD2C00',
        fontWeight: 'bold',
        marginLeft: 5
    }
});

const {
    percentChangeContainer,
    timeMarker,
    positivePercentChange,
    negativePercentChange
} = styles;