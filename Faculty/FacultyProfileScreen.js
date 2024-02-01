// FacultyScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const FacultyScreen = () => {
  // Dummy faculty profile data
  const facultyProfile = {
    name: 'John Doe',
    facultyId: 'F123',
    department: 'Computer Science',
    email: 'faculty@example.com',
    // Add more faculty details as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faculty Profile</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text>{facultyProfile.name}</Text>

        <Text style={styles.label}>Faculty ID:</Text>
        <Text>{facultyProfile.facultyId}</Text>

        <Text style={styles.label}>Department:</Text>
        <Text>{facultyProfile.department}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text>{facultyProfile.email}</Text>

        {/* Add more faculty details as needed */}
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

export default FacultyScreen;
