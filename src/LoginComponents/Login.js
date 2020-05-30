import React ,{useState ,useEffect } from 'react';
import { View, Image,StyleSheet, Text, TouchableOpacity ,TextInput,Button,ToastAndroid,ActivityIndicator} from 'react-native';
import CustomBorder from '../CustomUI/CustomBorder';
import CustomActivityIndicator from '../CustomUI/CustomActivityIndicator';
import AuthContext from '../Context/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { submitLogin } from '../redux/actions/user_action';



 const Login = (props) => {

    const [email ,setEmail] = useState("");
    const [emailError , setEmailError ] = useState(false);
    const [emailErrorMsg ,setEmailErrorMsg ] = useState("");

    const [password ,setPassword] = useState("");
    const [passwordError , setPasswordError ] = useState(false);
    const [passwordErrorMsg ,setPasswordErrorMsg ] = useState("");

   const loading_status  = useSelector(state => state.common.loading);
   const disptch = useDispatch();


    const emailValidator = (val) => {

        
        if(!val){
            setEmailError(true);
            setEmailErrorMsg("Voer een e-mailadres in.");

            return false;

        }else if(!(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        val))){

            setEmailError(true);
            setEmailErrorMsg("Voer een geldig emailadres in.");

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
            setPasswordErrorMsg("Voer wachtwoord in alstublieft.");
            return false;
        }else if(val.length < 3 || val.length > 16){
           
            setPasswordError(true);
            setPasswordErrorMsg("Wachtwoord moet groter zijn dan 3 en minder dan 16 tekens.");
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
            disptch(submitLogin(email, password))
            .then(response => {
                
                if(response.data.success){
                        console.log("res,,,",response.data);
                    AsyncStorage.setItem("hash",response.data.hash);
                    AsyncStorage.setItem("name",response.data.name);
                }else{
                    ToastAndroid.show(response.data.erro,ToastAndroid.SHORT);
                }
            })
            .catch(error => {
                ToastAndroid.show("Something went wrong ! Please try again later.",ToastAndroid.SHORT);
            })
          
        }

    }

    if(loading_status){
        return (<View
            style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 'rgba(0, 0, 0, 0.2)', justifyContent: 'center' }
            ]}
            >
                <ActivityIndicator color={"#8CC53D"} size={30} />
        </View>)
    }



    return(
    
        <View style={styles.container}>

            <Image source={require('../assets/logo.png')} style={{width:200,height:140, }}/>
            <Text style={styles.loginText1}>Login</Text>
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
    loginText1:{
        marginTop:20,
        fontSize:20,
        marginBottom:10
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
        marginBottom:20,
        alignSelf:"flex-end"
    },
    forgotPasswordText:{
        color:"#8CC53D",
        fontSize:15,
        textDecorationLine:'underline',
        fontFamily:"roboto-bold"
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
        fontFamily:'roboto-bold',
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