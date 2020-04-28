import React from 'react';
import { StyleSheet, View, Text, Image ,Dimensions, TouchableOpacity} from 'react-native';
import CustomBorder from '../CustomUI/CustomBorder';
import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 230;
 
const images = [
    require('./../assets/banner.png')
];
const Home = (props) => {


    const renderPage = (image, index) =>{
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={image} />
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <View style={styles.bannerContainer}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => renderPage(image, index))}
                </Carousel>
            </View>
            <CustomBorder customStyles={{borderColor:'grey',borderWidth:1.5,elevation:2,height:55,marginTop:25}}>
                <View style={styles.viewStyle}>
                    <Image source={require('../assets/avtar.png')} style={{width:30,height:30,}} />
                    <Text style={styles.textStyle}>Capturar</Text>
                </View>
                
            </CustomBorder>

            <CustomBorder customStyles={{borderColor:'grey',borderWidth:1.5,elevation:2,height:55,marginTop:25}}>
                <TouchableOpacity
                    style={{alignSelf:"flex-start",width:"100%"}}
                    onPress={()=> props.navigation.navigate('FAQ')}
                >
                    <View style={styles.viewStyle}>
                        <Image source={require('../assets/faq.png')} style={{width:30,height:30,}} />
                        <Text style={styles.textStyle}>Dúvidas Frequentes</Text>
                    </View>
                </TouchableOpacity>
                
            </CustomBorder>

            <CustomBorder customStyles={{borderColor:'grey',borderWidth:1.5,elevation:2,height:55,marginTop:25}}>
                <TouchableOpacity
                    style={{alignSelf:"flex-start",width:"100%"}}
                    onPress={()=> props.navigation.navigate('AboutUs')}
                >
                    <View style={styles.viewStyle}>
                        <Image source={require('../assets/info.png')} style={{width:30,height:30,}} />
                        <Text style={styles.textStyle}>Sobre nós</Text>
                    </View>
                </TouchableOpacity>
                
            </CustomBorder>

        </View>
    )
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    bannerContainer: {
        //flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    viewStyle:{
        flexDirection:'row',
        backgroundColor:"white",
        alignSelf:"flex-start",
        marginLeft:20,
    },
    textStyle:{
        fontSize:20,
        marginLeft:10,
        alignSelf:"center",
        color:'grey'
    }
})

export default Home;