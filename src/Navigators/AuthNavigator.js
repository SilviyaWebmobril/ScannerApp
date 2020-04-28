import React, { useEffect, useState } from 'react';
import LoginNavigator from './LoginNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import DrawerNavigator from './DrawerNavigator';


const AuthNavigator =(props) => {

    const [loading ,setLoading] = useState(true);
    const [isSignedIn,setIsSignedIn]  = useState(null); 

    useEffect(async()=> {

        const uid =  await AsyncStorage.getItem("uid");
        if(uid) {
            console.log("uid",uid);
            setIsSignedIn(uid)
        }

    },[])

   

    return isSignedIn ? (

        <DrawerNavigator />
    ) : (
        <LoginNavigator />
    )
}

export default AuthNavigator ;