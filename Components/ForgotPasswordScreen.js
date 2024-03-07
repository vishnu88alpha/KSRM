// ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      if (!email || !email.trim()) {
        Alert.alert('Error', 'Please enter a valid email address for password recovery.');
        return;
      }

      await sendPasswordResetEmail(FIREBASE_AUTH, email);

      Alert.alert('Password Recovery', 'A password reset email has been sent to your email address.');
    } catch (error) {
      console.error('Password recovery failed', error);
      Alert.alert('Error', 'Password recovery failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Forgot Password</Text>
      <View style={styles.box}>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Email"
            value={email}
            autoCapitalize="none"
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        <Button title="Reset Password" style={styles.button} onPress={() => handleForgotPassword()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#D9E3F0',
  },
  box: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
  },
  icon: {
    marginRight: 10,
    color: '#34495e',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: '#2c3e50',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
  },
});

export default ForgotPasswordScreen;
