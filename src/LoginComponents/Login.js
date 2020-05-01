import React ,{useState ,useEffect } from 'react';
import { View, Image,StyleSheet, Text, TouchableOpacity ,TextInput,Button} from 'react-native';
import CustomBorder from '../CustomUI/CustomBorder';
import ApiUrl from '../ApiUrl';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import CustomActivityIndicator from '../CustomUI/CustomActivityIndicator';




 const Login = (props) => {

    const [email ,setEmail] = useState("");
    const [emailError , setEmailError ] = useState(false);
    const [emailErrorMsg ,setEmailErrorMsg ] = useState("");

    const [password ,setPassword] = useState("");
    const [passwordError , setPasswordError ] = useState(false);
    const [passwordErrorMsg ,setPasswordErrorMsg ] = useState("");

    const [loading_status ,setLoadingStatus ] = useState(false);


    const emailValidator = (val) => {

        
        if(!val){
            setEmailError(true);
            setEmailErrorMsg("Please enter email.");

            return false;

        }else if(!(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        val))){

            setEmailError(true);
            setEmailErrorMsg("Please enter valid email.");

            return false
        }else{
            setEmailError(false);
            setEmailErrorMsg("");

        }

        return true;
       
    }

    const passwordValidator = (val) => {

       
        if(!val) {
            setPasswordError(true);
            setPasswordErrorMsg("Please enter password.");
            return false;
        }else if(val.length < 3 || val.length > 16){
           
            setPasswordError(true);
            setPasswordErrorMsg("Password must be greater than 8 and less than 16 characters.");
            return false;
        }else{
            setPasswordError(false);
            setPasswordErrorMsg("");
        }
        return true;

    }

  

    const onLoginSubmit = () => {
        console.log("validated111!")
        if(emailValidator(email) && passwordValidator(password)){

            console.log("validated!");
            const formData = {
                "email":email,
                "pass":password
            }
            setLoadingStatus(true);
            Axios.post(ApiUrl.base_url + ApiUrl.login ,formData)
                .then(response => {
                    setLoadingStatus(false);
                    console.log("res",response.data);
                    if(response.data.success){
                        AsyncStorage.setItem("hash",response.data.hash);
                        AsyncStorage.setItem("name",response.data.name);
                        props.navigation.navigate('Home')
                        
                    }
                  
                }).catch(error => {

                    console.log("error",error);
                })

        }

    }

    if(loading_status) {
        return <CustomActivityIndicator />
    }

    return(
        
        <View style={styles.container}>

            <Image source={require('../assets/logo.png')} style={{width:200,height:150, }}/>
            <Text style={styles.loginText}>Login</Text>
            <Text style={styles.labelText}>Email</Text>
            <CustomBorder>
                <TextInput 
                    style={styles.textInputStyle}
                    value={email}
                    onChangeText={(value) => {
                        setEmail(value);
                        emailValidator(value)
                    }}
                    placeholder="Enter Email" />
            </CustomBorder>
            {emailError ? 
                <Text style={styles.errorMsgStyle}>{emailErrorMsg}</Text>
            :
                <View/>
            }
            <Text style={styles.labelText}>Senha</Text>
            <CustomBorder>
                <TextInput 
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(value) => {setPassword(value); passwordValidator(value)}}
                    style={styles.textInputStyle}
                    placeholder="Enter Password" />
            </CustomBorder>
            {passwordError ? 
                <Text numberOfLines={2} style={styles.errorMsgStyle}>{passwordErrorMsg}</Text>
            :
                <View/>
            }
            <TouchableOpacity style={styles.forgotPasswordBtn}>
                <Text style={styles.forgotPasswordText}>Esqueceu e Senha ?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={onLoginSubmit}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={{marginTop:20}} >
                <Text style={{ color:"grey",fontSize:15,}}>Nao tem uma conta ? <Text style={styles.forgotPasswordText}>Continue como Vistante</Text></Text>
            </TouchableOpacity>
            


            
        </View>

    )
 }



 const styles = StyleSheet.create({

    container :{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:'center'
        
    },
    loginText:{
        fontSize:20,
        marginBottom:20
    },
    labelText:{
        marginTop:20,
        marginLeft:20,
        fontSize:15,
        color:"grey",
        alignSelf:"flex-start"
    },
    forgotPasswordBtn:{
        marginTop:25,
        marginRight:20,
        alignSelf:"flex-end"
    },
    forgotPasswordText:{
        color:"#8CC53D",
        fontSize:15,
        textDecorationLine:'underline'
    },
    loginBtn:{
      
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
        width:"100%",
        alignSelf:"flex-start"
    },
    errorMsgStyle:{
        fontSize:12,
        color:"red",
        alignSelf:"flex-start",
        marginTop:2,
        marginLeft:20
    }
 })

 export default Login;