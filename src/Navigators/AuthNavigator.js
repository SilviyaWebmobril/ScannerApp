import React, { useEffect, useState } from 'react';
import LoginNavigator from './LoginNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import DrawerNavigator from './DrawerNavigator';
import Splash from '../Splash/Splash';
import {  useSelector, useDispatch } from 'react-redux';
import {getAsyncStorage} from '../redux/actions/user_action';



const AuthNavigator =(props) => {
  
  
    const [showSplash , setShowSplash ]  = useState(true);
    const dispatch =  useDispatch();

  

    const isSignedIn  = useSelector(state => state.user.hash) 

   // const loading =  useState(true);
   // const loading = useSelector(state => state.common.loading);


    const getAllValues = async() => {
        const uid =  await AsyncStorage.getItem("hash");
        console.log("my user",uid);
        setShowSplash(false);
        dispatch(getAsyncStorage(uid))
       return uid;
    }

    useEffect(()=> {

        const timeout = setTimeout(async () => {

          
            getAllValues();
          

        },3000);

        return () => {
            timeout;
        }
      
    },[]);



    

   

    if(showSplash){
        return <Splash />
    }
   

    return (
        
            isSignedIn == null ?
                (
                    <LoginNavigator />
                )
            :
                (
                    <DrawerNavigator />
                )
        
      
    )
}


export default AuthNavigator ;