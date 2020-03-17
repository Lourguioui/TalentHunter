import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';



export default function FloattingActionButton() {
    return (
        <TouchableOpacity
            style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 60,
                position: 'absolute',
                bottom: 45,
                right: '41%',
                height: 60,
                
                borderRadius: 100,
            }}
        >
            <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  colors={['#5F1F5F','#7E1F65','#A9206D']} style={styles.gradient} >
                <Image source={require("../assets/images/Qr.png")} />
            </LinearGradient>
        </TouchableOpacity>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         alignItems:'center',
//         position:'absolute'
//     }
// })
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius:200,
      width:'100%',
      height:'100%'
     
    },
   
  });