import React from 'react';
import {StyleSheet, ActivityIndicator ,View ,} from 'react-native'

const CustomActivityIndicator = (props) => {

    return (
        <View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: 'rgba(255, 255, 255, 0.9)', justifyContent: 'center' }
        ]}
        >
        <ActivityIndicator
            animating={true}
            color="#8CC53D"
            style={styles.indicator}
            size="large"
        />
        </View>
    );
}

const styles = StyleSheet.create({
    indicator: {
        
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 80
	}

});

export default CustomActivityIndicator;