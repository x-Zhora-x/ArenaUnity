import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    // Here you would call your backend API to authenticate the user.
    // For now, let's just navigate to the MainApp as an example.
    navigation.navigate('MainApp');
  };
  const handleCreateAccountPress = () => {
    // Here you would handle the creation of a new account.
    // This could navigate to a different screen or open a registration form.
    console.log('Create Account Pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLoginPress} />
      <Button title="Create Account" onPress={handleCreateAccountPress} color="grey" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default LoginScreen;
