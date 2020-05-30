import React from 'react' ;
import { View, StyleSheet, Text, TouchableOpacity, Image,Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AuthContext from '../Context/AuthContext';
import {onLogoutUser} from '../redux/actions/user_action';
import { useDispatch } from 'react-redux';


const CustomDrawer = (props) => {

    const disptach = useDispatch();

    const showLogoutAlert = () =>{
        Alert.alert(
            'Sair',
            "Weet je zeker dat je wilt uitloggen?",
            [
         
           
            {text: 'CANCEL', onPress: () =>  {console.log("ok")}},
            {text: 'OK', onPress: () => {AsyncStorage.clear(); disptach(onLogoutUser())}},
            ], 
            { cancelable: false }
            )
        
     }

  return(
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                {/* <Text style={styles.headerText}># John Deo</Text> */}
            </View>
            <View style={styles.rowStyle}>
                <TouchableOpacity onPress={()=> props.navigation.navigate("Home")} style={{width:"100%"}}>
                    <View style={styles.btnView}>
                        <Image source={require('./../assets/home.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>Página Principal</Text>
                    </View>
                   
                </TouchableOpacity>
                
            </View>
            <View  style={styles.viewLineStyle} />
            <View style={styles.rowStyle}>
                <TouchableOpacity onPress={()=> props.navigation.navigate("AboutUs")} style={{width:"100%"}}>
                    <View style={styles.btnView}>
                        <Image source={require('./../assets/info_two.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>Sobre nós</Text>
                    </View>
                   
                </TouchableOpacity>
                
            </View>
            <View  style={styles.viewLineStyle} />
            <View style={styles.rowStyle}>
                <TouchableOpacity onPress={()=> props.navigation.navigate("FAQ")} style={{width:"100%"}}>
                    <View style={styles.btnView}>
                        <Image source={require('./../assets/faq_dark.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>Dúvidas Frequentes</Text>
                    </View>
                   
                </TouchableOpacity>
                
            </View>
            <View  style={styles.viewLineStyle} />
            <View style={styles.rowStyle}>
                <TouchableOpacity onPress={()=> props.navigation.navigate("Privacy")} style={{width:"100%"}}>
                    <View style={styles.btnView}>
                        <Image source={require('./../assets/privacy.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>Politica de Privacidade</Text>
                    </View>
                   
                </TouchableOpacity>
                
            </View>
            <View  style={styles.viewLineStyle} />
            <View style={styles.rowStyle}>
                <TouchableOpacity onPress={()=> props.navigation.navigate("ContactUs")} style={{width:"100%"}}>
                    <View style={styles.btnView}>
                        <Image source={require('./../assets/contact.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>Contacto</Text>
                    </View>
                   
                </TouchableOpacity>
                
            </View>
            <View  style={styles.viewLineStyle} />
            <View style={styles.rowStyle}>
                <TouchableOpacity style={{width:"100%"}}>
                    <View style={styles.btnView}>
                        <Image source={require('./../assets/notification_grey.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>Notifiaco</Text>
                    </View>
                   
                </TouchableOpacity>
                
            </View>
            <View  style={styles.viewLineStyle} />
            <View style={styles.rowStyle}>
                <TouchableOpacity style={{width:"100%"}}>
                    <View style={styles.btnView}>
                        <Image source={require('./../assets/history.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>Histórico</Text>
                    </View>
                   
                </TouchableOpacity>
                
            </View>
            <View  style={styles.viewLineStyle} />
            <View style={styles.rowStyle}>
                <TouchableOpacity style={{width:"100%",alignSelf:"flex-start"}} onPress={() => {showLogoutAlert()}}>
                    <View style={styles.btnView}>
                        <Image source={require('./../assets/logout.png')} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>Sair</Text>
                    </View>
                   
                </TouchableOpacity>
                
            </View>
            <View  style={styles.viewLineStyle} />
        </View>
    )
}

const styles  = StyleSheet.create({
    container:{
        flex:1,
    },
    headerStyle:{
        height:100,
        width:"100%",
        backgroundColor:'#949EA8',
        justifyContent:"center",
       
    },
    headerText:{
        fontSize:20,
        color:"white",
        textAlign:'left',
        marginLeft:20
    },
    rowStyle:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:'row',
        marginLeft:10,
        marginTop:15,
        marginBottom:15, 
    },
    imageStyle:{
        width:25,
        height:25,

    },
    btnView:{
        flexDirection:'row',
       
    },
    textStyle:{
        marginLeft:30,
        color:"black",
        fontSize:17,
    },
    viewLineStyle :{
        width:"90%",
        height:1,
        borderWidth:0.7,
        marginLeft:10,
        marginRight:10,
        backgroundColor:"#a9a9a9",
        borderColor:'#a9a9a9'
        
    }
})

export default CustomDrawer;