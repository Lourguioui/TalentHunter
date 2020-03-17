import React from 'react';
import {View,Image,Text,StyleSheet,TouchableOpacity} from 'react-native';



export default function FloattingActionButton(){
    return(
        <TouchableOpacity
        style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:60,
             position: 'absolute',                                          
             bottom: 45,                                                    
             right: '41%',
            height:60,
            backgroundColor:'red',
            borderRadius:100,
          }}
      >
        <Image source={require("../assets/images/Qr.png")}/>
       </TouchableOpacity>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         alignItems:'center',
//         position:'absolute'
//     }
// })