import React from  'react' ;
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackView } from '@react-navigation/stack'

import Home from '../HomeComponents/Home';
import CustomHeader from '../CustomUI/CustomHeader';
import FAQ from '../HomeComponents/FAQ';
import AboutUs from '../HomeComponents/Aboutus';
import Privacy from '../HomeComponents/Privacy';
import ContactUs from '../HomeComponents/ContactUs';
import Scan from '../HomeComponents/Scan';


const HomeStackNavigator = (props) => {


    const Stack = createStackNavigator();
    return(
            <Stack.Navigator>
                <Stack.Screen
                    component = {Home}
                    name="Home"
                    options ={{
                        header : props => <CustomHeader  {...props}/>
                    }}
                
                />
                <Stack.Screen
                    component={Scan}
                    name="Scan"
                    options ={{
                        title : "Capturar",
                        headerStyle: {
                            backgroundColor: "#8CC53D",
                          },
                          headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen
                    component={FAQ}
                    name="FAQ"
                    options ={{
                        title : "Dúvidas Frequentes",
                        headerStyle: {
                            backgroundColor: "#8CC53D",
                          },
                          headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen
                    component={AboutUs}
                    name="AboutUs"
                    options ={{
                        title : "Sobre nós",
                        headerStyle: {
                            backgroundColor: "#8CC53D",
                          },
                          headerTintColor: '#fff',
                    }}
                />

                <Stack.Screen
                    component={Privacy}
                    name="Privacy"
                    options ={{
                        title : "Politica de Privacidade",
                        headerStyle: {
                            backgroundColor: "#8CC53D",
                          },
                          headerTintColor: '#fff',
                    }}
                />
                 <Stack.Screen
                    component={ContactUs}
                    name="ContactUs"
                    options ={{
                        title : "Contacto",
                        headerStyle: {
                            backgroundColor: "#8CC53D",
                          },
                          headerTintColor: '#fff',
                    }}
                />


            </Stack.Navigator>

    )
}

export default HomeStackNavigator;