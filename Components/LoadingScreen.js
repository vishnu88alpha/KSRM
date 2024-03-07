// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a loading process
    setTimeout(() => {
      // Navigate to the LoginScreen after the splash screen
      navigation.replace('LoginScreen');
    }, 2000); // Adjust the duration as needed
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue', // Set your desired background color
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default LoadingScreen;
