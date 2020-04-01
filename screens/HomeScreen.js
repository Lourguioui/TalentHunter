import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchBar from '../components/SearchBar';


import ProfileCard from '../components/profileCard/ProfileCard';

export default function HomeScreen() {
  return (
    <View style = {styles.container}>
      
      <ScrollView>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
      </ScrollView>
      <SearchBar />
      <Image
            style={styles.tabBarStyle}
            source={require('../assets/images/bottom_bar_background.png')}

          />
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    tabBarStyle: {
      zIndex:3,
      position:'absolute',
      bottom:"-6%",
      alignSelf: 'center',
      width: '120%',
    }
  });

