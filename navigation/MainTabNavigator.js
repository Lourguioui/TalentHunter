import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Svg, {
  Use,

} from 'react-native-svg';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { View, Text, Image } from 'react-native';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  defaultNavigationOptions = {
    headerStyle: {
      backgroundColor: '#0091EA',
    },
    style: {
        backgroundColor:'#000'
    },
    headerTintColor: '#fff',
    title: 'Home Tab',
   
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: ' ',
  
  tabBarIcon: ({ tintColor }) => (
   
      <Image
        source={require('../assets/images/exams.png')}
        
      />
    
  )

};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};


LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: ' ',
  
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../assets/images/icon1.png')}
      style={{marginBottom:30}}
    />
  ),

};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
