import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ContactComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>If You have any Unique Idea for Project In your Mind</Text>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Text style={styles.contactBtn}>Contact Me</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Icon name="phone-square" size={30} style={{ marginLeft: 3 }}/>
                <Text style={styles.phone}> +84 392974287</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name="email" size={30}/>
                <Text style={styles.phone}> anhdv001@gmail.com</Text>
            </View>
            <Text style={{ fontSize: 17, textAlign: 'center', marginVertical: 20}}>I make as soon as possible. If you really like my work then followe me on social medias and subscribe my Youtube Channel for learn more new thinngs.</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={ styles.circle }>
                    <Icon name="facebook-square" size={30} style={{ alignSelf: 'center', marginTop: 10 }}/>
                </View>
                <View style={ styles.circle }>
                    <Icon name="instagram" color={'black'} size={30} style={{ alignSelf: 'center', marginTop: 10 }}/>
                </View>
                <View style={ styles.circle }>
                    <Icon name="linkedin-square" size={30} style={{ alignSelf: 'center', marginTop: 10 }}/>
                </View>
                <View style={ styles.circle }>
                    <Icon name="youtube-play" size={30} style={{ alignSelf: 'center', marginTop: 10 }}/>
                </View>
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
        fontSize: 19.5,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    contactBtn: {
        margin: 10,
        paddingVertical: 10,
        backgroundColor: "black",
        color: "white",
        fontSize:16,
        borderRadius: 30, 
        width: "45%",
        // height: 40,
        textAlign: "center",
        borderRadius: 20,
        elevation: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    phone:{
        fontSize: 16,
        alignSelf: 'center',
        marginHorizontal: 10
    },
    circle:{
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 3
    }
})

export default ContactComponent;
