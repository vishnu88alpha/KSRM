import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const GradingScreen = () => {
  const [assignmentModalVisible, setAssignmentModalVisible] = useState(false);
  const [quizModalVisible, setQuizModalVisible] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const assignments = ['Assignment 1', 'Assignment 2', 'Assignment 3'];
  const quizzes = ['Quiz 1', 'Quiz 2', 'Quiz 3'];
  const subjects = ['Subject 1', 'Subject 2', 'Subject 3'];

  const handleAssignmentPress = () => {
    setAssignmentModalVisible(true);
  };

  const handleQuizPress = () => {
    setQuizModalVisible(true);
  };

  const handleGiveGrades = () => {
    // Implement the logic to give grades based on the selectedAssignment, selectedQuiz, and selectedSubject
    // For example, you can console.log the selected values
    console.log('Selected Assignment:', selectedAssignment);
    console.log('Selected Quiz:', selectedQuiz);
    console.log('Selected Subject:', selectedSubject);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleAssignmentPress}>
        <Text style={styles.buttonText}>Assignment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleQuizPress}>
        <Text style={styles.buttonText}>Quiz</Text>
      </TouchableOpacity>

      <Modal visible={assignmentModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select an Assignment</Text>
          <RNPickerSelect
            items={assignments.map((assignment) => ({ label: assignment, value: assignment }))}
            onValueChange={(itemValue) => setSelectedAssignment(itemValue)}
          />

          <Text style={styles.modalTitle}>Select a Subject</Text>
          <RNPickerSelect
            items={subjects.map((subject) => ({ label: subject, value: subject }))}
            onValueChange={(itemValue) => setSelectedSubject(itemValue)}
          />

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setAssignmentModalVisible(false)}
          >
            <Text style={styles.modalButtonText}>Close</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.giveGradesButton} onPress={handleGiveGrades}>
            <Text style={styles.buttonText}>Give Grades</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={quizModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select a Quiz</Text>
          <RNPickerSelect
            items={quizzes.map((quiz) => ({ label: quiz, value: quiz }))}
            onValueChange={(itemValue) => setSelectedQuiz(itemValue)}
          />

          <Text style={styles.modalTitle}>Select a Subject</Text>
          <RNPickerSelect
            items={subjects.map((subject) => ({ label: subject, value: subject }))}
            onValueChange={(itemValue) => setSelectedSubject(itemValue)}
          />

          <TouchableOpacity style={styles.modalButton} onPress={() => setQuizModalVisible(false)}>
            <Text style={styles.modalButtonText}>Close</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.giveGradesButton} onPress={handleGiveGrades}>
            <Text style={styles.buttonText}>Give Grades</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  giveGradesButton: {
    backgroundColor: 'green',
    padding: 15,
    margin: 20,
    borderRadius: 9,
  },
});

export default GradingScreen;
