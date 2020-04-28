import React from 'react';
import { StyleSheet, View } from 'react-native';


const CustomBorder = (props) => {

    return(
        <View style={[styles.container,props.customStyles]}>
            {props.children}

        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        borderColor:"#8CC53D",
        width:"90%",
        borderWidth:1,
        height:50,
        borderRadius:4,
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default CustomBorder;