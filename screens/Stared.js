import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Profil from '../components/Profil';
import { View, Image, Text } from 'react-native';
import { render } from 'react-dom';

export default function Stared() {
    return (
        <>
            <Text>stared!</Text>
            <Image
                style={{ zIndex: 3, position: 'absolute', bottom: -50, left: -27 }}
                source={require('../assets/images/bottom_bar_background.png')}

            />
        </>
    );
}