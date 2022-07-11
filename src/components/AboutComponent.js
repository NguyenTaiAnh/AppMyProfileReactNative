import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const AboutComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>About Me</Text>
            <Text style={styles.txt}>Passionate full-stack engineer with 3+ years ò hands-on experience in devloping scalable websites.applications using a wide range of front-end and back-end skills like HTML, CSS, JS, TS, PHP, Laravel, Angular, Reactjs, Vuejs, React Native, etc. Developed 20+ websites from scratch at TPISoftware. Looking to further enhance HTML, CSS, JS, TS, PHP skills as the future full stack developer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 20,
    },
    txtTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    txt: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 10,
        lineHeight: 25
    }
})

export default AboutComponent;
