import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen'
import LinksScreen from '../screens/LinksScreen';
import Stared from '../screens/Stared';
import { Image } from 'react-native';


    
const Tab = createMaterialBottomTabNavigator();
export default function AppBar() {
    return (
       
            <Tab.Navigator
                initialRouteName="Notifications"
                activeColor="#e91e63"
                inactiveColor="#000"

                barStyle={{
                    backgroundColor: 'transparent',
                    backgroundOpacity: 0,
                    elevation: 0,
                    shadowColor: 'transparent',
                    borderTopColor: 'transparent',
                    marginTop: -25


                }}
            >
                <Tab.Screen
                    name="Notifications"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <Image
                                source={require("../assets/images/icon1.png")}
                                    style={{
                                        marginRight: 20,
                                        marginTop:-5
                                    }}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Stared"
                    component={Stared}
                    options={{

                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <Image
                                source={require("../assets/images/exams.png")}
                                style={{
                                    marginRight: 45,
                                    marginTop:-5
                                }}

                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Feed"
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <Image
                                source={require("../assets/images/profile.png")}
                                style={{
                                    marginLeft: 45,
                                    marginTop:-5
                                }}

                            />

                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={LinksScreen}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <Image
                            source={require("../assets/images/settings.png")}
                            style={{
                                marginLeft: 25,
                                marginTop:-4
                            }}

                        />
                        ),
                    }}
                />

            </Tab.Navigator>
       

    );
}