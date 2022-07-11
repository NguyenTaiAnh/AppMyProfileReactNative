import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import * as FileSystem from 'expo-file-system';
import { StorageAccessFramework } from 'expo-file-system';
const InfoComponent = () => {
    const downloadFile = async () => {
        alert("function under development")
        // const uri = '../../assets/cv/NguyenTaiAnh.pdf'
        // console.log("uri: ", uri)
        // let fileUri = FileSystem.documentDirectory + getFileName(uri)
        // console.log("uri: ", uri)
        // FileSystem.downloadAsync(uri, fileUri)
        // .then(({ uri }) => {
        //     alert('Finished downloading to ', uri);
        //   })
        // .catch(error => {
        //     alert(error);
        // });
        // const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
        // if (!permissions.granted) {
        //     return;
        // }

        // try {
        //     await StorageAccessFramework.createFileAsync(permissions.directoryUri, fileName, 'application/pdf')
        //     .then((r) => {
        //         console.log(r);
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     });
        // } catch(e ){
        //     console.log(e)
        // }
        // const callback = downloadProgress => {
        //     const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
        //   };
          
        //   const downloadResumable = FileSystem.createDownloadResumable(
        //     'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf',
        //     FileSystem.documentDirectory + 'boleto.pdf',
        //     {},
        //     callback
        //   );
          
        //   try {
        //     const { uri } = await downloadResumable.downloadAsync();
        //     console.log('Finished downloading to ', uri);
        //   } catch (e) {
        //     console.error(e);
        //   }
    }
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/img/avatar.jpg')} style={styles.imgStyle} />
            <Text style={styles.txtName}>Hello,</Text>
            <Text style={styles.txtName}>I'm Tai Anh</Text>
            <Text style={styles.txt}>Fullstack Developer</Text>
            <TouchableOpacity onPress={downloadFile}>
                <Text style={styles.btnButton}>Download CV</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        paddingVertical: 30,
        borderRadius: 20,
    },
    imgStyle:{
        width: 200,
        height:200,
        borderRadius: 30,
        marginBottom: 10,
    },
    txtName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    txt: {
        textTransform: 'uppercase',
        fontSize: 18,
        marginBottom: 10,
    },
    btnButton : {
        backgroundColor: 'black',
        color: "white",
        borderRadius: 20,
        textAlign: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10,
        elevation: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
})

export default InfoComponent;
