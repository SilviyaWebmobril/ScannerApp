/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component, Fragment, useState ,useRef} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './scanStyle';
import {
    TouchableOpacity,
    Text,
    StatusBar,
    Linking,
    View,
    ScrollView,
    StyleSheet,
    AsyncStorage
} from 'react-native';

import {
    Header, 
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Buffer } from 'buffer';
import Axios from 'axios';
import ApiUrl from '../ApiUrl';
global.Buffer = Buffer; // very important
import { RNCamera } from 'react-native-camera';

 

const Scan = (props) => {

    const textInput = useRef();

    const [scan ,setScan] = useState(true);
    const [scanResult , setScanResult] = useState(false);
    const [result ,setResult ] = useState(null);


   
    const onSuccess = async (e) => {

        console.log('scanned data 111111111 ----'  + e.type);
        console.log('scanned data 11111111222 ---'  + e.data);
        console.log('scanned data 11111111333 ---'  + e.rawData);
       //  const check = e.data.substring(0, 4);
       
        // let binaryData =  "01011110 01110000 11101111 10111111 10111101 01000000 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 01000110 00110000 01000100 11101111 10111111 10111101 00100000 01101100 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 01001100 11101111 10111111 10111101 01010101 11000111 10011000 01011111 11101111 10111111 10111101 01001101 11101111 10111111 10111101 11101111 10111111 10111101 00110001 01010000 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 01001110 11101111 10111111 10111101 11101111 10111111 10111101 00100100 11101111 10111111 10111101 11101111 10111111 10111101 00100000 01111100 11011101 10100001 01001111 01000011 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 01001110 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 01011110 11101111 10111111 10111101 00111111 01011111 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 00100101 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 01010110 01110101 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 01011111 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 11101111 10111111 10111101 01001001 11101111 10111111 10111101 11101111 10111111 10111101 01000101 01110100 11101111 10111111 10111101 01010101 01100100 11101111 10111111 10111101 01010101 01110101 11101111 10111111 10111101"
       

       // 10001011111010111100111000011010011010000000000010100000000000100010000000001000110001100000100010000000010001000000110110010100100100011001101101101001100110011100101010111000111100110000101111110000100010011011011001011101010100010110011000101010000000101110001010111010001110100000001010011101100000111101110001000000100110111000100111000010111111111010010010010111010000000100010000001111100110111011010000101001111010000110001010010010110110001000100111010011100110001111111000100010001110101000101111010101010001111110101111110000001101101001000101000100101100101111010011110101101101011000101011001110101000110001100010011100001010111110000000000000000000000000000110001001001000001000001001101000101011101000001000101010101011001001101011101010101011101010000000000001110110000010001111011000001000111101100000100011110110000010001111011000001000111101100
        // console.log('scanned data' + e.rawData);

    //     let hash =  await AsyncStorage.getItem("hash");
    //     console.log("hash",hash);
    //     //var encodedString = base64.encode(e.data);

    //     var encodedString = Buffer.from(e.data).toString('base64')

    //    console.log("encoded striing ... - ",encodedString);
       
    //     let formdata = {
    //         "hash" :hash,
    //         "base64" :"MDEwMTExMTAgMDExMTAwMDAgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDEwMDAwMDAgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDEwMDAxMTAgMDAxMTAwMDAgMDEwMDAxMDAgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDAxMDAwMDAgMDExMDExMDAgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDEwMDExMDAgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDEwMTAxMDEgMTEwMDAxMTEgMTAwMTEwMDAgMDEwMTExMTEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDEwMDExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDAxMTAwMDEgMDEwMTAwMDAgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDEwMDExMTAgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDAxMDAxMDAgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDAxMDAwMDAgMDExMTExMDAgMTEwMTExMDEgMTAxMDAwMDEgMDEwMDExMTEgMDEwMDAwMTEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDEwMDExMTAgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDEwMTExMTAgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDAxMTExMTEgMDEwMTExMTEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDAxMDAxMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDEwMTAxMTAgMDExMTAxMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDEwMTExMTEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDEwMDEwMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDEwMDAxMDEgMDExMTAxMDAgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDEwMTAxMDEgMDExMDAxMDAgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDEgMDEwMTAxMDEgMDExMTAxMDEgMTExMDExMTEgMTAxMTExMTEgMTAxMTExMDE=",
    //     }
    //     Axios.post(ApiUrl.base_url+ApiUrl.post_scan_data,formdata)
    //         .then(respone =>{

    //             console.log("response",respone.data);

    //             setResult(e);
    //             setScan(false);
    //             setScanResult(true);

    //         })
    //         .catch(error =>{

    //             console.log("show error",error);

    //         })
       
      
       

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

    const onRead = (res) => {
        console.log("xvdhbjfngk",res);
      };


     const barcodeReceived = (e) => {
        console.log('Barcode: ' + e.data);
        console.log('Type: ' + e.type);
      }

      const barcodeRecognized = ({ barcodes }) => {

        console.log("barcodes----",barcodes);
       // barcodes.forEach(barcode => console.warn(barcode.data))
      };

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
                        flashMode={RNCamera.Constants.FlashMode.auto}
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
      //   <RNCamera
      //   // ref={ref => {
      //   //   this.camera = ref;
      //   // }}
      //   barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
      //   style={{
      //     flex: 1,
      //     width: '100%',
      //   }}
      //   onGoogleVisionBarcodesDetected={barcodeRecognized}
      // >
    
      // </RNCamera>
     
    );


}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#000"
//     }
//   });


export default Scan;
