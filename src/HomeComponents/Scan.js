/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component, Fragment, useState ,useRef} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './scanStyle'
import {
    TouchableOpacity,
    Text,
    StatusBar,
    Linking,
    View,
    ScrollView,
    AsyncStorage
} from 'react-native';

import {
    Header, 
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import base64 from 'react-native-base64'
import { Buffer } from 'buffer';
import Axios from 'axios';
import ApiUrl from '../ApiUrl';
global.Buffer = Buffer; // very important

const Scan = (props) => {

    const textInput = useRef();

    const [scan ,setScan] = useState(true);
    const [scanResult , setScanResult] = useState(false);
    const [result ,setResult ] = useState(null);


    const onSuccess = async (e) => {
        const check = e.data.substring(0, 4);
       
       
        console.log('scanned data' + e.rawData);

        let hash =  await AsyncStorage.getItem("hash");
        console.log("hash",hash);
       // var encodedString = base64.encode(e.rawData);

      // var encodedString = Buffer.from(e.rawData).toString('base64')

       //console.log("encoded striing ... - ",encodedString);
       
        let formdata = {
            "hash" :hash,
            "base64" : e.rawData,
        }
        Axios.post(ApiUrl.base_url+ApiUrl.post_scan_data,formdata)
            .then(respone =>{

                console.log("response",respone.data);

                setResult(e);
                setScan(false);
                setScanResult(true);

            })
            .catch(error =>{

                console.log("show error",error);

            })
       
      
        if (check === 'http') {
            console.log('hiii');
            Linking
                .openURL(e.data)
                .catch(err => console.log('An error occured', err));


        } else {

          
        }

    }

    // const activeQR = () => {
    //     this.setState({
    //         scan: true
    //     })
    // }
    const scanAgain = () => {
       
        setScan(true);
        setScanResult(false)
    }


    return (
       <ScrollView>
        <View style={styles.scrollViewStyle}>
            <Fragment>
               
                {scanResult &&
                    <Fragment>
                        <Text style={styles.textTitle1}>Result !</Text>
                        <View style={scanResult ? styles.scanCardView : styles.cardView}>
                            <Text>Type : {result.type}</Text>
                            <Text>Result : {result.data}</Text>
                            <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                            <TouchableOpacity onPress={scanAgain} style={styles.buttonTouchable}>
                                <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
                            </TouchableOpacity>

                        </View>
                    </Fragment>
                }


                {scan &&
                    <QRCodeScanner
                        reactivate={true}
                        showMarker={true}
                        ref={textInput}
                        //ref={(node) => { scanner = node }}
                        onRead={onSuccess}
                        // topContent={
                        //     <Text style={styles.centerText}>
                        //         Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code to test.</Text>
                        // }
                        // bottomContent={
                        //     <View >
                        //         <TouchableOpacity style={styles.buttonTouchable} onPress={() => textInput.reactivate()}>
                        //             <Text style={styles.buttonTextStyle}>Done</Text>
                        //         </TouchableOpacity>

                        //         {/* <TouchableOpacity style={styles.buttonTouchable} onPress={() => >
                        //             <Text style={styles.buttonTextStyle}>Stop Scan</Text>
                        //         </TouchableOpacity> */}
                        //     </View>

                        // }
                    />
                }
            </Fragment>
        </View>
        </ScrollView>

     
    );


}


export default Scan;
