import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { firebase } from '../FirebaseConfig';

const FacultyHome = ({ navigation }) => {

  const navigateToAttendanceMarking = () => {
    navigation.navigate('AttendanceMkScreen');
  };

  const navigateToAssignmentsScreen = () => {
    navigation.navigate('AssignmentsScreen');
  };

  const navigateToAnnouncementScreen = () => {
    navigation.navigate('AnnouncementScreen');
  };

  const navigateToConductingQuizScreen = () => {
    navigation.navigate('ConductingQuizScreen');
  };

  const navigateToGradingScreen = () => {
    navigation.navigate('GradingScreen');
  };

  const FacultyProfileScreen = () => {
    navigation.navigate('FacultyProfileScreen');
  };

  const handleLogout = async () => {
    try {
      // Display confirmation dialog
      Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Logout', onPress: async () => {
            await firebase.auth().signOut();
            // Navigate to the login screen after logout
            navigation.replace('Login');
          }},
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateToAttendanceMarking}>
        <Icon name="clipboard" size={30} color="#3498db" />
        <Text style={styles.buttonText}>Attendance Marking</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToAssignmentsScreen}>
        <Icon name="tasks" size={30} color="#3498db" />
        <Text style={styles.buttonText}>Assignments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToConductingQuizScreen}>
        <Icon name="question-circle" size={30} color="#3498db" />
        <Text style={styles.buttonText}>Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToGradingScreen}>
        <Icon name="database" size={30} color="#3498db" />
        <Text style={styles.buttonText}>Grade</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToAnnouncementScreen}>
        <Icon name="file" size={30} color="#3498db" />
        <Text style={styles.buttonText}>AnnouncementScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={FacultyProfileScreen}>
        <Icon name="user" size={30} color="#3498db" />
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsButton} onPress={handleLogout}>
        <Icon name="sign-out" size={30} color="#e74c3c" />
        <Text style={styles.settingsButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1e90ff', // Light background color
    borderRadius:7,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 3, // Add elevation for a card-like effect
  },
  buttonText: {
    color: '#3498db',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  settingsButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 3, // Add elevation for a card-like effect
  },
  settingsButtonText: {
    color: '#e74c3c',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default FacultyHome;
