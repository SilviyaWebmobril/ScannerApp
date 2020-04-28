import React, { useState } from 'react';
import { StyleSheet, View, TextInput,TouchableOpacity,Text } from 'react-native';

const ContactUs  = (props) => {

    const [title, setTitle] = useState("");
    const [message ,setMessage] = useState("");


    return(
        <View style={styles.container}>
            <TextInput 
               
                placeholder="Titulo"
                onChangeText={(value) => {setTitle(value)}}
                value={title}
                underlineColorAndroid="#a9a9a9"
                
                />

            <TextInput
               
                placeholder="Mansagem"
                onChangeText={(value) => {setMessage(value)}}
                value={message}
                multiline={true}
                returnKeyType="done"
                underlineColorAndroid="#a9a9a9"
                />
            <TouchableOpacity
                style={styles.loginBtn}>
                <Text style={styles.loginText}>ENVIAR</Text>
            </TouchableOpacity>

           
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:"white",
       padding:10
    },
    loginBtn:{
        backgroundColor:"blue",
        margin:20,
        width:"90%",
        height:45,
        borderRadius:6,
        backgroundColor:"#8CC53D",
        justifyContent:"center",
        alignItems:'center'

    },
    loginText:{
        textAlign:"center",
        fontSize:15,
        color:"white"

    },
    textInputStyle:{
        marginBottom:5
    }
})

export default ContactUs;