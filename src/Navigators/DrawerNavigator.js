import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../HomeComponents/Home';
import CustomHeader from '../CustomUI/CustomHeader';
import HomeStackNavigator from './HomeStackNavigator';
import CustomDrawer from './../CustomUI/CustomDrawer'; 
const DrawerNavigator = (props) => {

    const Drawer = createDrawerNavigator();
    return(
        <NavigationContainer>
            <Drawer.Navigator
             drawerContent={(props) => <CustomDrawer {...props} />}
             >
                <Drawer.Screen 
                     component = {HomeStackNavigator}
                     name="Home"
                     options ={{
                         header : props => <CustomHeader  {...props}/>
                     }}

                />
                
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigator;