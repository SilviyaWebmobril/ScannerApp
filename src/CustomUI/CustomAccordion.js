import React, { useState } from 'react' ;
import { StyleSheet ,View,Text,TouchableOpacity,} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomAccordion = (props) => {

    const [expanded , setExpanded ] = useState(false);

    const toggleExpand=()=>{
        setExpanded(!expanded)
      }
    

    return(

        <View>
            <TouchableOpacity style={styles.row} onPress={()=>toggleExpand()}>
                <Text style={[styles.title, styles.font]}>{props.title}</Text>
                <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color="#a9a9a9" />
            </TouchableOpacity>
           
            {!expanded &&
                 <View  style={styles.viewLineStyle} />
            }
            <View style={styles.parentHr}/>
            {
                expanded &&
                <View style={styles.child}>
                    <Text>{props.data}</Text>    
                </View>
            }
        </View>

    )
}


const styles = StyleSheet.create({

    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: "grey",
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: "white",
    },
    parentHr:{
        height:1,
        color: "black",
        width:'100%'
    },
    child:{
        backgroundColor: "#F3F3F3",
        padding:16,
    },
    viewLineStyle :{
        width:"95%",
        height:1,
        borderWidth:0.7,
        marginLeft:10,
        marginRight:10,
        backgroundColor:"#a9a9a9",
        borderColor:'#a9a9a9'
        
    }
})

export default CustomAccordion ;