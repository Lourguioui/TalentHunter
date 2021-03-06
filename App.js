import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from './components/SearchBar';
import FloattingActionButton from './components/FloattingActionButton';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen'
import LinksScreen from './screens/LinksScreen';
import Stared from './screens/Stared';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppNavigator from './navigation/AppNavigator';
import AppContainer from './components/AppContainer';
import QrCodeScanner from './components/QrCodeScanner';
import AppBar from './components/AppBar';

const Stack = createStackNavigator()

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false,}}>
        <Stack.Screen name='Home' component={AppContainer} />
        <Stack.Screen name='QrCodeScanner' component={QrCodeScanner} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}






export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <AppStack />
      // <View style={styles.container}>

      //   {Platform.OS === 'ios' && <StatusBar barStyle="default" />}



      //   <FloattingActionButton style={styles.buttonStyle} />

      //   <AppBar />



      // </View>

    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonStyle: {
    // width: '100%',
    // flex: 1,
    // position: 'absolute',
    // bottom: 100,
    // height: 60,
    // zIndex: 30,
    // elevation: 30,
    // alignSelf: 'center'

  }
});
