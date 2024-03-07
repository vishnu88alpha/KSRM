import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const GradingScreen = () => {
  const [assignmentModalVisible, setAssignmentModalVisible] = useState(true);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const assignments = ['Assignment 1', 'Assignment 2', 'Assignment 3'];
  const subjects = [
    'Sem1-CSE-A-C Programming',
    'Sem4-CSE-B-ADS',
    'Sem5-CSE-B-DAA'
  ];

  const handleGiveGrades = () => {
    if (!selectedAssignment || !selectedSubject) {
      alert('Incomplete Selection: Please select an assignment and subject.');
    } else {
      console.log('All selections made. Proceeding with grading.');
      console.log('Selected Assignment:', selectedAssignment);
      console.log('Selected Subject:', selectedSubject);
      // Proceed with grading logic here
    }
  };

  return (
    <View style={[styles.mainContainer, { backgroundColor: '#3498db' }]}>
      <View style={styles.container}>
        <RNPickerSelect
          items={assignments.map((assignment) => ({ label: assignment, value: assignment }))}
          onValueChange={(itemValue) => setSelectedAssignment(itemValue)}
          style={pickerSelectStyles}
        />
      </View>

      <View style={styles.container}>
        <RNPickerSelect
          items={subjects.map((subject) => ({ label: subject, value: subject }))}
          onValueChange={(itemValue) => setSelectedSubject(itemValue)}
          style={pickerSelectStyles}
        />
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'gold' }]}
        onPress={handleGiveGrades}
      >
        <Text style={styles.buttonText}>Give Grades</Text>
      </TouchableOpacity>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    marginBottom: 10,
  },
  inputAndroid: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    marginBottom: 10,
  },
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    padding: 20,
    marginBottom:-300,
  },
  container: {
    marginBottom: 5,
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',

  },
  button: {
    backgroundColor: 'gold',
    padding: 20,
    borderRadius: 9,
    marginBottom:567,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default GradingScreen;
