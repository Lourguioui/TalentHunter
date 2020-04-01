import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Profil from '../components/Profil';
import { View, Image, Text, StyleSheet } from 'react-native';
import { render } from 'react-dom';

export default function Stared() {
    return (
        <>
            <Text>stared!</Text>
            <Image
                style={styles.tabBarStyle}
                source={require('../assets/images/bottom_bar_background.png')}

            />
        </>
    );
}

const styles = StyleSheet.create({
    tabBarStyle : { 
        zIndex:3,
        position:'absolute',
        bottom:"-6%",
        alignSelf: 'center',
        width: '120%',
    }
})