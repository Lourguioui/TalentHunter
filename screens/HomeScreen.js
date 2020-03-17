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
    <View>
      
      <ScrollView>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
      </ScrollView>
      <SearchBar />
      <Image
            style={{zIndex:3,position:'absolute',bottom:-50,left:-27}}
            source={require('../assets/images/bottom_bar_background.png')}

          />
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: '#d6d7da',
      borderRadius: 10,
      flex: 3
    },
    rowContainer: {
      flexDirection: 'row',
      padding: 20
    },
    participantInfo: {
      color: 'gray'
    }
  });

