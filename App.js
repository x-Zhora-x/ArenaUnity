import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigator.js';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
