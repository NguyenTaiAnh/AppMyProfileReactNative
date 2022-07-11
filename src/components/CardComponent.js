import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const BoxServicesComponent = ({ children }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation: 4,
        backgroundColor: "white",
        shadowOffset: {width: 1, height: 3},
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 4,
        width: 250,
        height: "100%"
    },
    cardContent: {
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: "center",
    }
})

export default BoxServicesComponent;
