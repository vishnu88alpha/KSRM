// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const SettingsScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleLogout = async () => {
    try {
      const user = FIREBASE_AUTH.currentUser;
  
      if (user) {
        // Show a confirmation alert before logging out
        Alert.alert(
          'Logout',
          'Are you sure you want to log out?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Logout',
              onPress: async () => {
                try {
                  await FIREBASE_AUTH.signOut();
                  console.log('User logged out successfully');
                  // Navigate to the login screen
                  navigation.replace('LoginScreen');
                } catch (error) {
                  console.error('Logout failed', error);
                }
              },
            },
          ],
          { cancelable: false }
        );
      } else {
        console.log('No user is currently logged in');
        // Navigate to the login screen even if there is no authenticated user
        navigation.replace('Loading');
      }
    } catch (error) {
      console.error('Error checking user authentication', error);
    }
  };
  
  
  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled((prev) => !prev);
  };

  const handleFeedback = () => {
    // Implement feedback functionality (e.g., open a feedback form)
    Alert.alert('Feedback', 'Thank you for your feedback!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
      </View>

      <TouchableOpacity style={styles.settingItem} onPress={handleFeedback}>
        <Text style={styles.settingText}>Give Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem} onPress={handleLogout}>
        <Text style={[styles.settingText, { color: 'red' }]}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
  },
  settingText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
