import React, { useEffect, useState } from 'react';
import LoginNavigator from './LoginNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import DrawerNavigator from './DrawerNavigator';


const AuthNavigator =(props) => {

    const [loading ,setLoading] = useState(true);
    const [isSignedIn,setIsSignedIn]  = useState(null); 

    useEffect(async()=> {

        const uid =  await AsyncStorage.getItem("hash");
        console.log("hashcxhgvhbjcfxfxfxcvjbjkyvgjbxjvcs",uid);
        if(uid) {
            console.log("hashcxhgvhbjcfxfxfxcvjbjkyvgjbxjvcs",uid);
            setIsSignedIn(uid)
        }

    },[])

   

    return isSignedIn == null ? 

        
        <LoginNavigator />
    :
        <DrawerNavigator />
}


export default AuthNavigator ;