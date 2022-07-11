import React from 'react';
import {View, StyleSheet, Text, FlatList, Button, TouchableOpacity, ScrollView} from 'react-native';
import AboutComponent from '../components/AboutComponent';
import ExperienceComponent from '../components/ExperienceComponent';
import ServicesComponent from '../components/ServicesComponent';
// import ButtonComponent from '../components/ButtonComponent';
import InfoComponent from '../components/InfoComponent';
import ContactComponent from '../components/ContactComponent';
const HomeScreen = () => {
    const titleButton = ["Home","About Me", "Experience", "Services", "Contact"]
    return (
        <View style={{ flex:1}}>
            {/* <ButtonComponent title={titleButton} /> */}
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={titleButton}
                keyExtractor={item => item}
                contentContainerStyle={{
                    flexDirection: 'row',
                }}
                renderItem={({item}) =>{
                    return <TouchableOpacity>
                        <Text style={styles.txtTitleStyle}>{item}</Text>
                    </TouchableOpacity>
                }}
            /> 
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={styles.contentStyle}
            >
                <InfoComponent />
                <AboutComponent />
                <ExperienceComponent />
                <ServicesComponent />
                <ContactComponent />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    txtTitleStyle:{
        margin: 10,
        paddingVertical: 10,
        backgroundColor: "black",
        color: "white",
        fontSize:16,
        borderRadius: 30, 
        width: 140,
        height: 40,
        textAlign: "center",
    },
    contentStyle: {
        marginHorizontal: 10
    }
})

export default HomeScreen;
