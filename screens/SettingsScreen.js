import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Profil from '../components/Profil';
import {View,Image, StyleSheet} from 'react-native';


export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return( 
    <View>
       
        <Profil />
        <Image
            style={styles.tabBarStyles}
            source={require('../assets/images/bottom_bar_background.png')}

          />
        </View>
  ) 
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};

const styles = StyleSheet.create({
  tabBarStyles : {
    zIndex:3,
      position:'absolute',
      bottom:"-6%",
      alignSelf: 'center',
      width: '120%',
  }
})