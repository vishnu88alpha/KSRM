import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, Dimensions, Modal } from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker';

const AttendanceMkScreen = () => {
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [studentsAttendance, setStudentsAttendance] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);
  const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const detailsOptions = [
    { label: 'Sem1-CSE-A-C Programming', value: 'Sem1-CSE-A-C Programming' },
    { label: 'Sem4-CSE-B-ADS', value: 'Sem4-CSE-B-ADS' },
    { label: 'Sem5-CSE-B-DAA', value: 'Sem5-CSE-B-DAA' }
    // Add more options as needed
  ];

  const handleDetailsChange = (details) => {
    setSelectedDetails(details.value);
    setModalVisible(true);

    // Simulate fetching students list for selected subject
    const studentsList = Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      name: `Student ${i + 1}`,
      present: false,
    }));
    setStudentsAttendance(studentsList);
    setAttendanceSubmitted(false); // Reset submission status when changing subject
    setPresentCount(0);
    setAbsentCount(0);
  };

  const handleAttendanceChange = (studentId, present) => {
    const updatedStudentsAttendance = studentsAttendance.map((student) =>
      student.id === studentId ? { ...student, present } : student
    );
    setStudentsAttendance(updatedStudentsAttendance);
  };

  const handleSubmitAttendance = () => {
    // Here you can submit the attendance data to your backend or store it locally
    // For demonstration, let's just log the attendance data
    console.log('Attendance Data:', studentsAttendance);
    setAttendanceSubmitted(true);
    setPresentCount(studentsAttendance.filter((student) => student.present).length);
    setAbsentCount(studentsAttendance.filter((student) => !student.present).length);
    setSubmittedData(studentsAttendance);
    setModalVisible(false);
  };

  const handleResubmitAttendance = () => {
    setSelectedDetails(null);
    setAttendanceSubmitted(false);
    setPresentCount(0);
    setAbsentCount(0);
    setStudentsAttendance(submittedData);
    setModalVisible(true);
  };

  const handleReturnToMainFrame = () => {
    setSelectedDetails(null);
    setAttendanceSubmitted(false);
    setPresentCount(0);
    setAbsentCount(0);
  };

  return (
    <View style={styles.container}>
      {!selectedDetails && (
        <RNPicker
          selectedValue={selectedDetails}
          onValueChange={(itemValue) => handleDetailsChange(itemValue)}
          style={[styles.dropdown, { backgroundColor: 'lightgrey', color: 'black' }]}>
          <RNPicker.Item label="Select Details" value={null} />
          {detailsOptions.map((option, index) => (
            <RNPicker.Item key={index} label={option.label} value={option} />
          ))}
        </RNPicker>
      )}

      {attendanceSubmitted && (
        <View style={styles.summaryContainer}>
          <Text>Subject: {selectedDetails}</Text>
          <Text>Present: {presentCount}</Text>
          <Text>Absent: {absentCount}</Text>
          <TouchableOpacity style={styles.resubmitButton} onPress={handleResubmitAttendance}>
            <Text style={styles.buttonText}>Resubmit Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.returnButton} onPress={handleReturnToMainFrame}>
            <Text style={styles.buttonText}>Return to Main Frame</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.subHeading}>Attendance for {selectedDetails}</Text>
            <ScrollView style={styles.attendanceScrollView}>
              {studentsAttendance.map((student) => (
                <View key={student.id} style={styles.studentAttendanceRow}>
                  <Text>{student.name}</Text>
                  <View style={styles.attendanceButtons}>
                    <TouchableOpacity
                      style={[styles.attendanceButton, student.present && styles.presentButton]}
                      onPress={() => handleAttendanceChange(student.id, true)}>
                      <Text style={styles.buttonText}>Present</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.attendanceButton, !student.present && styles.absentButton]}
                      onPress={() => handleAttendanceChange(student.id, false)}>
                      <Text style={styles.buttonText}>Absent</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
            {!attendanceSubmitted && (
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmitAttendance}>
                <Text style={styles.buttonText}>Submit Attendance</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#3498db',
    alignItems: 'center',
  },
  dropdown: {
    width: '100%',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  attendanceScrollView: {
    marginTop: 20,
    width: '100%',
    maxHeight: Dimensions.get('window').height * 0.6, // Set a maximum height for ScrollView
  },
  studentAttendanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  attendanceButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  attendanceButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  presentButton: {
    backgroundColor: 'green',
  },
  absentButton: {
    backgroundColor: 'red',
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  resubmitButton: {
    backgroundColor: 'gold',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  returnButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  summaryContainer: {
    marginTop: 20,
    width: '100%',
  },
});

export default AttendanceMkScreen;
