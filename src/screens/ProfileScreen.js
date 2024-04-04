import React from 'react';
import {Image, View, Text, StyleSheet, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";


const profileImage = require('../../assets/Image.jpg'); // Ensure this path is correct
 
const ProfileBlock = ({ title, status }) => (
  <View style={styles.block}>
    
    <Text style={styles.name}>{title}</Text>
    <Text style={styles.status}>{"\n"}{status}</Text>
    <View style={styles.buttonContainer}>
    </View>
  </View>
);
const TextBlock = ({ text }) => (
  <View style={styles.block}>
    <Text style={styles.name}>{text}</Text>
  </View>
);

const ProfileScreen = () => (
  <LinearGradient
    style={styles.outerContainer}
    colors={['#68943e', '#277909', '#9cac2c']} // Dark green shades
    start={{ x: 0, y: 0 }} // Gradient start
    end={{ x: 1, y: 1 }} // Gradient end
  >
    <MaterialCommunityIcons name="cog" size={36} color="black" />
    <View style={styles.innerContainer}>
      <ProfileBlock title="LongDick McGriddle" status="I stay fucking trappin. I am really good at soccer, my fatass takes up the entire net im mad nice with it bruh noones this nice bruh. Stay fucking mad bruh Im so fucking nice you wish you had ballls like these bruh" />
      <TextBlock text="Games Won" />
      {/* Profile Picture and Icon */}
      <View style={styles.profileIconContainer}>
        <Image source={profileImage} style={styles.profilePic} />
        <View style={styles.iconBackground}>
          <MaterialCommunityIcons name="football" size={36} color="#966218" />
        </View>
      </View>
      
    </View>
  </LinearGradient>
);
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'green', // Or any color for the background
  },
  innerContainer: {
    marginTop: 120,
    paddingTop: 80,
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    
  },
  block: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: "white"
  },
  status: {
    fontSize: 16,
    marginBottom: 12,
    color: "white"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  profileIconContainer: {
    position: 'absolute',
    top: -40,    
    left: 30
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'rgba(0, 255, 0, 0.25)',
  },
  iconBackground: {
    backgroundColor: 'white',
    borderRadius: 60,
    position: 'absolute',
    bottom: 0,
    left: 75,
  },
});

export default ProfileScreen;
