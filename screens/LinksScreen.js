import React from 'react';
import { ScrollView, StyleSheet,Image, View} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import SearchBar from "../components/SearchBar";

export default function LinksScreen() {
  
  return (
    
      <>
        <SearchBar />
        <Image
            style={{zIndex:3,position:'absolute',bottom:-50,left:-27}}
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
});
