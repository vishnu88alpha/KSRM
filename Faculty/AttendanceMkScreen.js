import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal, Alert } from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker';

const AttendanceScreen = () => {
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [studentsAttendance, setStudentsAttendance] = useState([]);
  const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);
  const [submittedData, setSubmittedData] = useState([]);

  const detailsOptions = [
    { label: 'Sem1-CSE-B-C Programming', value: 'Sem1-CSE-B-C Programming' },
    { label: 'Sem2-CSE-A-Python', value: 'Sem2-CSE-A-Python' },
    { label: 'Sem3-CSE-B-DAA', value: 'Sem3-CSE-B-DAA' }
  ];

  const handleDetailsChange = (details) => {
    setSelectedDetails(details);
  };

  const handleEnterAttendance = () => {
    if (selectedDetails) {
      const studentsList = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        name: `Student ${i + 1}`,
        present: false,
      }));
      setStudentsAttendance(studentsList);
      setModalVisible(true);
    } else {
      Alert.alert('Select Details', 'Please select a details option.');
    }
  };

  const handleAttendanceChange = (studentId, present) => {
    const updatedStudentsAttendance = studentsAttendance.map((student) =>
      student.id === studentId ? { ...student, present } : student
    );
    setStudentsAttendance(updatedStudentsAttendance);
  };

  const handleSubmitAttendance = () => {
    const present = studentsAttendance.filter((student) => student.present).length;
    const absent = studentsAttendance.filter((student) => !student.present).length;
    setPresentCount(present);
    setAbsentCount(absent);
    setSubmittedData([...submittedData, { subject: selectedDetails, present, absent }]);
    setAttendanceSubmitted(true);
    setModalVisible(false);
  };

  const handleResubmitAttendance = () => {
    const previousData = submittedData.find((data) => data.subject === selectedDetails);
    if (previousData) {
      setPresentCount(previousData.present);
      setAbsentCount(previousData.absent);
      setAttendanceSubmitted(true);
      setModalVisible(true);
    }
  };

  const handleReturnToMain = () => {
    setSelectedDetails(null);
    setAttendanceSubmitted(false);
    setPresentCount(0);
    setAbsentCount(0);
    setStudentsAttendance([]);
  };

  return (
    <View style={styles.container}>
      <RNPicker
        selectedValue={selectedDetails}
        onValueChange={(itemValue) => handleDetailsChange(itemValue)}
        style={styles.dropdown}>
        <RNPicker.Item label="Select Details" value={null} />
        {detailsOptions.map((option, index) => (
          <RNPicker.Item key={index} label={option.label} value={option.value} />
        ))}
      </RNPicker>

      <TouchableOpacity
        style={styles.enterAttendanceButton}
        onPress={handleEnterAttendance}
        disabled={!selectedDetails}>
        <Text style={styles.buttonText}>Enter Attendance</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Attendance for {selectedDetails}</Text>
            <ScrollView style={styles.attendanceScrollView}>
              {studentsAttendance.map((student) => (
                <View key={student.id} style={styles.studentRow}>
                  <Text>{student.name}</Text>
                  <TouchableOpacity
                    style={[styles.attendanceButton, student.present ? styles.presentButton : styles.absentButton]}
                    onPress={() => handleAttendanceChange(student.id, !student.present)}>
                    <Text style={styles.buttonText}>{student.present ? 'Present' : 'Absent'}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmitAttendance}>
              <Text style={styles.buttonText}>Submit Attendance</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {attendanceSubmitted && (
        <View style={styles.summaryContainer}>
          <Text>Subject: {selectedDetails}</Text>
          <Text>Present: {presentCount}</Text>
          <Text>Absent: {absentCount}</Text>
          <TouchableOpacity style={styles.resubmitButton} onPress={handleResubmitAttendance}>
            <Text style={styles.buttonText}>Resubmit</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.returnButton} onPress={handleReturnToMain}>
        <Text style={styles.buttonText}>Return to Main</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
  },
  dropdown: {
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#eee',
  },
  enterAttendanceButton: {
    padding: 10,
    backgroundColor: 'gold',
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  attendanceScrollView: {
    maxHeight: 300,
    marginBottom: 20,
  },
  studentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  attendanceButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#3498db',
  },
  presentButton: {
    backgroundColor: 'green',
  },
  absentButton: {
    backgroundColor: 'red',
  },
  submitButton: {
    padding: 10,
    backgroundColor: 'gold',
    borderRadius: 5,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resubmitButton: {
    padding: 10,
    backgroundColor: 'gold',
    borderRadius: 5,
    marginTop: 10,
  },
  returnButton: {
    position: 'absolute',
    bottom: 20,
    padding: 10,
    backgroundColor: 'gold',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black', // Changed text color to black
    textAlign: 'center',
  },
});

export default AttendanceScreen;