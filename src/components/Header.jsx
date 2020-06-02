import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={headerContainer}>
            <Text style={headerText}>Cryptotracker</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 60,
        alignItems: "center",
    },

    headerText: {
        fontWeight: "600",
        fontSize: 30
    }
})

const { headerContainer, headerText } = styles;