// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const ProfileScreen = () => {
  // Dummy user profile data
  const user = FIREBASE_AUTH.currentUser;

  const userProfile = {
    name: 'John Doe',
    studentId: '123456',
    course: 'Computer Science',
    email: user.email,
    // Add more profile details as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text>{userProfile.name}</Text>

        <Text style={styles.label}>Student ID:</Text>
        <Text>{userProfile.studentId}</Text>

        <Text style={styles.label}>Course:</Text>
        <Text>{userProfile.course}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text>{userProfile.email}</Text>

        {/* Add more profile details as needed */}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Edit Profile" onPress={() => {/* Handle navigation to edit profile screen */}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInfo: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default ProfileScreen;
