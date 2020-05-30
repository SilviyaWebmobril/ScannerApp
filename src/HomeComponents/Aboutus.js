import React , {useState} from 'react';
import { StyleSheet, View,ActivityIndicator,Text } from 'react-native';


const AboutUs = (props) => {

    const [loading,setLoading] = useState(true);

    const hideSpinner = () =>{

        setLoading(false)
    }



    return(
        <View style={styles.container}>
           <Text style={styles.para}>Fundada em 2002, a Pontodev atua no desenvolvimento e implantação de sistemas 100% personalizados para empresas de qualquer porte e segmento. </Text>
           <Text style={styles.para}>Desde meados de 2006 a Pontodev passou a atuar de maneira mais freqüente no ramo de fabricação de placas automotivas, possuímos know how na informatização de todo o processo, desde a fabricação até o emplacamento. Tudo com conceito de rastreabilidade dos filetes através de qr-code.</Text>
            <Text style={styles.para}>Através do nosso sistema  “ePIV”  são controladas grande parte das placas do estado de São Paulo, mas, também estamos presentes em outros estados. 
Através do app “ePIV Scan” os qr-codes das placas podem ser lidos e os dados de fabricação e emplacamento apresentados.</Text>
        </View>


        )
}

const styles = StyleSheet.create({

    container :{
        flex:1,
        backgroundColor:"white",
        padding:15
    },
    para:{
        fontFamily:'roboto-medium',
        fontSize:14,
        marginBottom:15
    }
})


export default AboutUs;