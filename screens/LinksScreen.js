import React from 'react';
import { ScrollView, StyleSheet,Image, View} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import SearchBar from "../components/SearchBar";

export default function LinksScreen() {
  
  return (
    
      <>
        <SearchBar />
        <Image
            style={styles.tabBarStyle}
            source={require('../assets/images/bottom_bar_background.png')}

          />
      </>   
      
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBarStyle : {
    zIndex:3,
      position:'absolute',
      bottom:"-6%",
      alignSelf: 'center',
      width: '120%',
  }
});
