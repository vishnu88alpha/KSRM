import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const FacultyHome = ({ navigation }) => {

  const navigateToAttendanceMarking = () => {
    navigation.navigate('AttendanceMkScreen');
  };

  const navigateToAssignmentsScreen = () => {
    navigation.navigate('AssignmentsScreen');
  };

  const navigateToBlankScreen = () => {
    navigation.navigate('BlankScreen');
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
        navigation.replace('LoginScreen');
      }
    } catch (error) {
      console.error('Error checking user authentication', error);
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
      <TouchableOpacity style={styles.button} onPress={navigateToBlankScreen}>
        <Icon name="file" size={30} color="#3498db" />
        <Text style={styles.buttonText}>BlankScreen</Text>
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
    backgroundColor: '#ecf0f1', // Light background color
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
