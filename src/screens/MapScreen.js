import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const MapScreen = () => (
  <View style={styles.container}>
    <LinearGradient
      style={styles.gradient}
      colors={['#68943e', '#277909', '#9cac2c']} // Dark green shades
      start={{x: 0, y: 0}} // Gradient start
      end={{x: 1, y: 1}} // Gradient end
    >
      <Text style={styles.text}>Map</Text>
    </LinearGradient>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the View expand to fill the whole screen
  },
  gradient: {
    flex: 1, // This makes the LinearGradient fill the entire container
    justifyContent: 'center', // Centers children vertically in the container
    alignItems: 'center', // Centers children horizontally in the container
  },
  text: {
    color: '#fff', // Example text color for visibility
    fontSize: 20, // Example font size
  },
});

export default MapScreen;
