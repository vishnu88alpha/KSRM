// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const SettingsScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  
  
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
