import React from 'react';
import { View, StyleSheet, Image,Text, TouchableOpacity } from 'react-native';

const CustomHeader  = (props) => {

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <Image source={require('./../assets/hamburger_white.png')} style={styles.imageStyle} /> 
            </TouchableOpacity>
            <Text style={styles.headerText}>Home</Text>

        </View>
    )

}

const styles = StyleSheet.create({

    container:{
        backgroundColor:"#8CC53D",
        height:60,
        width:"100%",
        justifyContent:"flex-start",
        alignItems:'center',
        flexDirection:"row"

    
    },
    imageStyle:{
        width:25,
        height:25,
        alignSelf:'center',
        marginLeft:20
    },
    headerText:{
        fontSize:20,
        color:"white",
        marginLeft:20
    }
   
})

export default CustomHeader ;