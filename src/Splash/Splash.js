import React from 'react' ;
import { Text, ImageBackground ,Image,View} from 'react-native';


const Splash =(props) => {


    return(
       <React.Fragment>
           <ImageBackground source={require('../assets/splash.png')} style={{flex:1,alignItems:'center',justifyContent:"space-between",}} >
           <Image source={require('../assets/logo.png')} style={{width:200,height:150, alignSelf:"center",top:200}} />
           <View style={{justifyContent: 'flex-end',marginBottom:40,width:"100%"}}>
           <Image source={require('../assets/demo_logo.png')} style={{width:140,height:100,alignSelf:"center",}} />
           </View>
           </ImageBackground>
       </React.Fragment>
    )
}


export default Splash;  