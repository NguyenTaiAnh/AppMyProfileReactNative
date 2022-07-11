import React from 'react';
import {View, StyleSheet, Text, Button, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import Card from '../components/CardComponent'
const ServicesComponent = () => {
    const arrayService = [
        {
            title: 'UX/UI Designer',
            content: 'User interface design or user interface engineering is the design of user interfaces for machines and software, such as compiters, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience'
        },
        {
            title: 'Web Developer',
            content: 'User interface design or user interface engineering is the design of user interfaces for machines and software, such as compiters, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience'
        },
        {
            title: 'UX/UI Designer 1',
            content: 'User interface design or user interface engineering is the design of user interfaces for machines and software, such as compiters, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience'
        },
        {
            title: 'UX/UI Designer 2',
            content: 'User interface design or user interface engineering is the design of user interfaces for machines and software, such as compiters, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience'
        },
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>Services</Text>
            <Text style={styles.txt}>if you want make a software for your bussiness contact me. I make as soon as possible you really like my work, if you don't change this untill you like, if you want make a software for your bussiness conatcat me</Text>
            <FlatList
                style={{ marginVertical: 10}}
                data={arrayService}
                keyExtractor={item => item.title}
                renderItem={({item}) => {
                    return <Card>
                        <Text style={styles.titleBox}>{item.title}</Text>
                        <Text style={styles.txtBox}>{item.content}</Text>
                        <TouchableOpacity>
                            <Text style={styles.btn}>Read More</Text>
                        </TouchableOpacity>
                    </Card>
                    
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
            />
            <View style={styles.othersStyle}>
                <Text style={styles.textOthers}>Others Skills</Text>
                <View style={{ flexDirection: 'row' }}>    
                    <Text style={styles.otherSkills}>Laravel FrameWork</Text>
                    <Text style={styles.otherSkills}>VueJS</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>    
                    <Text style={styles.otherSkills}>Angular</Text>
                    <Text style={styles.otherSkills}>Reactjs</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>    
                    <Text style={styles.otherSkills}>React Native</Text>
                    <Text style={styles.otherSkills}>Ionic</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>    
                    <Text style={styles.otherSkills}>NextJS</Text>
                    <Text style={styles.otherSkills}>NuxtJS</Text>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: '#E5E5E5',
        paddingTop: 20,
        paddingBottom: 10,
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
    txt: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 10,
        lineHeight: 25
    },
    btn:{
        margin: 10,
        paddingVertical: 10,
        backgroundColor: "black",
        color: "white",
        fontSize:16,
        borderRadius: 30, 
        width: 140,
        height: 40,
        textAlign: "center",

        
        borderRadius: 20,
        textAlign: 'center',
        elevation: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    titleBox: {
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: 8, 
        fontSize: 18
    },
    txtBox: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    textOthers: {
        fontSize: 16,
        fontWeight: 'bold',
        
    },  
    othersStyle: {
        marginLeft: 10
    },
    otherSkills: {
        margin: 10,
        paddingVertical: 10,
        backgroundColor: "black",
        color: "white",
        fontSize:16,
        borderRadius: 30, 
        // width: "45%",
        // height: 40,
        paddingHorizontal: 10,
        textAlign: "center",
        borderRadius: 20,
        elevation: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
})

export default ServicesComponent;
