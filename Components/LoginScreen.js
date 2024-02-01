// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableWithoutFeedback,Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); 

  const auth = FIREBASE_AUTH;
  

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response.user.email);
  
      if (response.user.email === 'faculty@gmail.com') {
        console.log('Navigating to FacultyHome');
        navigation.replace('Inside', {screen: 'FacultyHome'});
      } else {
        console.log('Navigating to HomeScreen');
        navigation.replace('Inside', {screen: 'HomeScreen'});
      }
    } catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error);
    } finally {
      setLoading(false);
    }
  };


  const forgotPassword = async () => {
    try {
      // Send a password reset email to the user's email address
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Password Reset Email Sent', 'Check your email for instructions to reset your password.');
    } catch (error) {
      console.log(error);
      Alert.alert('Forgot Password Failed', 'Failed to send password reset email. Please check your email address.');
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>KSRM CONNECT APP</Text>
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
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Password"
            value={password}
            autoCapitalize="none"
            onChangeText={setPassword}
            secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
            style={styles.input}
          />
          <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
            <Icon
              name={showPassword ? 'eye-slash' : 'eye'}
              size={20}
              color="#888"
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <Button title="Login" style={styles.button} onPress={() => signIn()} />
            <TouchableWithoutFeedback onPress={forgotPassword}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableWithoutFeedback>
          </View>
        )}
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
    backgroundColor: '#ecf0f1', // Matte background color
  },
  box: {
    width: '80%', // Adjust the width as needed
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
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
    borderBottomColor: '#bdc3c7', // Matte border color
  },
  icon: {
    marginRight: 10,
    color: '#34495e', // Matte icon color
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: '#2c3e50', // Matte text color
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db', // Set your desired button color
    padding: 10,
    borderRadius: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
  },
  forgotPassword: {
    marginTop: 20,
    color: 'red',
    textDecorationLine: 'underline',
  },
});
 
export default LoginScreen;
