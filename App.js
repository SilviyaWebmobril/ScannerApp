import React ,{useState,useEffect} from 'react';
import { Text } from 'react-native';
import Splash from './src/Splash/Splash';
import AuthNavigator from './src/Navigators/AuthNavigator';


const App =(props) => {


   //ßß const [isLoading ,setLoading ] = useState(true);

    // useEffect(() => {
    //   const spalshInterval = setTimeout(()=> {
  
    //     setLoading(false);
  
    // },3000);
    //   return () => {
    //     clearTimeout(spalshInterval);
    //   }
    // }, [])
  
    // if(isLoading){
    //   return <Splash />
    // }
  
    return (
      <>
        <AuthNavigator /> 
      </>
    )
  
}

export default App;