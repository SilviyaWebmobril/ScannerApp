import React , {useState} from 'react';
import { StyleSheet, View,ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';


const AboutUs = (props) => {

    const [loading,setLoading] = useState(true);

    const hideSpinner = () =>{

        setLoading(false)
    }



    return(
        <View style={styles.container}>
            <WebView
                onLoad={hideSpinner}
                source={{ uri:'http://webmobril.org/dev/locum/api/api_pages?page_id=2'}}
                style={{ marginTop: 10 }}
                
            />
            {loading && (
                <View
                style={[
                StyleSheet.absoluteFill,
                { backgroundColor: 'rgba(0, 0, 0, 0.7)', justifyContent: 'center' }
                ]}
                >
                    <ActivityIndicator
                        animating={true}
                        color='#8CC53D'
                        style={styles.indicator}
                        size="large"
                    />
                </View>
            )}

        </View>


        )
}

const styles = StyleSheet.create({

    container :{
        flex:1,
        backgroundColor:"white",
    }
})


export default AboutUs;