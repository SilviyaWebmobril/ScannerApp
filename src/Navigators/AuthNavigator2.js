import React, { useEffect, useState } from 'react';
import LoginNavigator from './LoginNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import DrawerNavigator from './DrawerNavigator';
import ApiUrl from '../ApiUrl';
import Axios from 'axios';
import AuthContext from '../Context/AuthContext';
import Splash from '../Splash/Splash';
import {ToastAndroid,ActivityIndicator,View, StyleSheet} from 'react-native';

const AuthNavigator =(props) => {

    const [loading ,setLoading] = useState(false);
    const [showSplash , setSplash] = useState(true);
    const [isSignedIn,setIsSignedIn]  = useState(null); 
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
                console.log("restoring the token");
              return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
              };
            case 'SIGN_IN':
              return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignout: true,
                userToken: null,
              };
            case 'SET_LOADING':
            return {
                ...prevState,
                isLoading:action.loading
            };
          }
        },
        {
          isLoading: false,
          isSignout: false,
          userToken: null,
        }
      );


      const getAllValues = async() => {
        setSplash(false);
       
        const uid =  await AsyncStorage.getItem("hash");
        console.log("has",uid);
        dispatch({ type: 'RESTORE_TOKEN', token: uid });
    }

    useEffect(()=> {

        const timeout = setTimeout(async () => {

          
            getAllValues();
          

        },3000);

        return () => {
            timeout;
        }
      
    },[]);

   
    // useEffect(async()=> {

    //     //dispatch({ type: 'SET_LOADING', loading: true });
    //     const uid =  await AsyncStorage.getItem("hash");
    //     console.log("hashcxhgvhbjcfxfxfxcvjbjkyvgjbxjvcs",uid);
    //     dispatch({ type: 'RESTORE_TOKEN', token: uid });
    //     // if(uid) {
    //     //     console.log("hashcxhgvhbjcfxfxfxcvjbjkyvgjbxjvcs",uid);
    //     //     dispatch({ type: 'RESTORE_TOKEN', token: uid });
    //     //     //setIsSignedIn(uid)
    //     // }else{
    //     //     dispatch({ type: 'SET_LOADING', loading: false });
    //     // }

    // },[]);


    const authContext = React.useMemo(
        () => ({
          signIn: async data => {
            // In a production app, we need to send some data (usually username, password) to server and get a token
            // We will also need to handle errors if sign in failed
            // After getting token, we need to persist the token using `AsyncStorage`
            // In the example, we'll use a dummy token;
            console.log("i am  calling sign in function ");
            dispatch({ type: 'SET_LOADING', loading: true });
            setLoading(true)
            Axios.post(ApiUrl.base_url + ApiUrl.login ,data)
            .then(response => {
                dispatch({ type: 'SET_LOADING', loading: false });
                setLoading(false)
                console.log("res",response.data);
                if(response.data.success){
                    AsyncStorage.setItem("hash",response.data.hash);
                    AsyncStorage.setItem("name",response.data.name);
                    //props.navigation.navigate('Home')
                    dispatch({ type: 'SIGN_IN', token: response.data.hash });
                    
                }else{
                  ToastAndroid.show(response.data.erro,ToastAndroid.SHORT);
                }
              
            }).catch(error => {
                dispatch({ type: 'SET_LOADING', loading: false });
                setLoading(false)
                ToastAndroid.show("Something went wrong ! Please try again",ToastAndroid.SHORT);
                console.log("error",error);
            })

    
           
          },
          signOut:  async () =>{
               AsyncStorage.clear();
              dispatch({ type: 'SIGN_OUT' })
        },
          signUp: async data => {
            // In a production app, we need to send user data to server and get a token
            // We will also need to handle errors if sign up failed
            // After getting token, we need to persist the token using `AsyncStorage`
            // In the example, we'll use a dummy token
    
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
         
        }),
        []
      );
    

      // if(loading){
      //   return (<View
      //               style={[
      //               StyleSheet.absoluteFill,
      //               { backgroundColor: 'rgba(0, 0, 0, 0.7)', justifyContent: 'center' }
      //               ]}
      //               >
      //                   <ActivityIndicator color={"#8CC53D"} size={40} />
      //           </View>)
      // }



    if(showSplash){
        return <Splash />
    }
   

    return (
        <AuthContext.Provider value={authContext}>
            {state.userToken == null ?
                (
                  // <AuthContext.Consumer>
                    <LoginNavigator />
                  // </AuthContext.Consumer>
                )
            :
                (
                    <DrawerNavigator />
                )
        }
        </AuthContext.Provider>
    )
}


export default AuthNavigator ;