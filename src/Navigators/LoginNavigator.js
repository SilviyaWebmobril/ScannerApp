import 'react-native-gesture-handler';
import React from  'react' ;
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackView } from '@react-navigation/stack'

import Login from '../LoginComponents/Login';


const LoginNavigator = (props) => {


    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options = {{
                        headerShown:false
                    }}
                    component = {Login}
                    name="Login"
                
                />

            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default LoginNavigator;