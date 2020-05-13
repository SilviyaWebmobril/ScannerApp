import React ,{ useState }from 'react';
import { StyleSheet, View,ActivityIndicator ,Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';

const Privacy = (props) => {

    const [loading,setLoading] = useState(true);

    const hideSpinner = () =>{

        setLoading(false)
    }
    const path = require("../assets/privacy_policy.pdf")


    return(
        <View style={styles.container}>

                <Pdf
                    source={require("../assets/privacy_policy.pdf")}
                    onLoadComplete={(numberOfPages,filePath)=>{
                      //  console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                      //  console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    onPressLink={(uri)=>{
                       // console.log(`Link presse: ${uri}`)
                    }}  
                     style={styles.pdf}/>
            {/* {loading && (
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
            )} */}

            

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
})
export default Privacy ;