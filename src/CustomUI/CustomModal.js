import React from 'react';
import { Overlay } from 'react-native-elements';
import { View,Text } from 'react-native';


const CustomModal = (props) => {

    return(
        <Overlay isVisible={true}>
            <Text>Hello from Overlay!</Text>
        </Overlay>
    )
}

export default CustomModal;