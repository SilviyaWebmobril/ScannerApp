import React from 'react' ;
import { Text, ImageBackground ,Image} from 'react-native';


const Splash =(props) => {


    return(
       <React.Fragment>
           <ImageBackground source={require('../assets/splash.png')} style={{flex:1,alignItems:'center',justifyContent:'center'}} >
           <Image source={require('../assets/logo.png')} style={{width:200,height:150, }} />
           <Image source={require('../assets/demo_logo.png')} style={{width:140,height:100,alignSelf:"center",top:520,position:'absolute',left:100,right:0,bottom:0}} />
           </ImageBackground>
       </React.Fragment>
    )
}


export default Splash;  