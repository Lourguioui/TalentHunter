import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Profil from '../components/Profil';
import {View,Image} from 'react-native';


export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return( 
    <View>
       
        <Profil />
        <Image
            style={{zIndex:3,position:'absolute',bottom:-50,left:-27}}
            source={require('../assets/images/bottom_bar_background.png')}

          />
        </View>
  ) 
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};