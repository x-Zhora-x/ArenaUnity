import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GamesScreen from '../screens/GamesScreen';
import MapScreen from '../screens/MapScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';
import SocialScreen from '../screens/SocialScreen.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Keeps the header hidden
        tabBarStyle: { 
          backgroundColor: 'rgba(255, 255, 255, 0.25)', // Semi-transparent white background
          position: 'absolute', // Needed to show the content behind the tab bar
          borderTopWidth: 0, // Optional: removes the borderTop to make it look more seamless
        },
      }}
    >
      <Tab.Screen name="Games" component={GamesScreen} options = {{
            tabBarLabel: "Games",
            tabBarIcon: ({color, size}) => <MaterialIcons name="sports-soccer" size={24} color="black" />
        }}/>
        <Tab.Screen name="Map" component={MapScreen} options = {{
            tabBarLabel: "Map",
            tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="map-legend" size={size}/>
        }}/>
        <Tab.Screen name = "Social" component={SocialScreen} options = {{
            tabBarLabel: "Social",
            tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="message-text-outline" size={size}/>
        }}
        />
      <Tab.Screen name="Profile" component={ProfileScreen} options = {{
            tabBarLabel: "Profile",
            tabBarIcon: ({color, size}) => <MaterialCommunityIcons name = "face-man-profile" size = {size}/>
        }}/>
    </Tab.Navigator>


  );
}

export default TabNavigator;
