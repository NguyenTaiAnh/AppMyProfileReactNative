import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ExperienceComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>Work Experience</Text>
            <View style={styles.parStyle}>
                <Text style={styles.txtDev}>Laravel Developer</Text>
                <Text>Company HeadCapital</Text>
                <Text style={styles.txtTime}>Sept 2019 - jul 2021 - 2 years </Text>
                <Text>Website operation and development</Text>
            </View>
            <View style={styles.parStyle}>
                <Text style={styles.txtDev}>Laravel Developer</Text>
                <Text>Company HeadCapital</Text>
                <Text style={styles.txtTime}>Sept 2019 - jul 2021 - 2 years </Text>
                <Text>Website operation and development</Text>
            </View>
            <View style={styles.parStyle}>
                <Text style={styles.txtDev}>Laravel Developer</Text>
                <Text>Company HeadCapital</Text>
                <Text style={styles.txtTime}>Sept 2019 - jul 2021 - 2 years </Text>
                <Text>Website operation and development</Text>
            </View>
            <View style={styles.parStyle}>
                <Text style={styles.txtDev}>Laravel Developer</Text>
                <Text>Company HeadCapital</Text>
                <Text style={styles.txtTime}>Sept 2019 - jul 2021 - 2 years </Text>
                <Text>Website operation and development</Text>
            </View>
            <View style={styles.parStyle}>
                <Text style={styles.txtDev}>Laravel Developer</Text>
                <Text>Company HeadCapital</Text>
                <Text style={styles.txtTime}>Sept 2019 - jul 2021 - 2 years </Text>
                <Text>Website operation and development</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: '#E5E5E5',
        paddingVertical: 20,
        borderRadius: 20,
        fontSize: 16,
        paddingHorizontal: 20,
    },
    txtTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    txtDev: {
        fontWeight: '500'
    },
    txtTime:{
        color: "gray"
    },
    parStyle:{
        marginBottom: 10
    }
})

export default ExperienceComponent;
