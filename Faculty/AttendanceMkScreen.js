import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
  button: {
    marginBottom: 12,
    width: '100%',
  },
  listContainer: {
    marginTop: 16,
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  studentName: {
    fontSize: 16,
  },
  checkbox: {
    marginLeft: 8,
  },
});

const AttendanceMkScreen = () => {
  const predefinedSubjects = ['Math', 'English', 'Science'];
  const [selectedSubject, setSelectedSubject] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);

  const handleSubjectSelect = () => {
    if (selectedSubject.trim() !== '' && predefinedSubjects.includes(selectedSubject)) {
      const students = generateSampleStudents();
      setAttendanceData(students);
    } else {
      console.log('Invalid subject. Please select a valid subject.');
    }
  };

  const markAttendance = (studentId, isPresent) => {
    setAttendanceData((prevData) =>
      prevData.map((student) => {
        if (student.id === studentId) {
          const existingAttendance = student.attendance || [];
          const isAlreadyMarked = existingAttendance.some(
            (entry) => entry.subject === selectedSubject
          );

          if (!isAlreadyMarked) {
            return {
              ...student,
              attendance: [
                ...existingAttendance,
                {
                  subject: selectedSubject,
                  present: isPresent ? 1 : 0, // Mark 1 for present, 0 for absent
                },
              ],
            };
          }
        }
        return student;
      })
    );
  };

  const generateSampleStudents = () => {
    return [
      { id: 1, name: 'Student 1', attendance: [] },
      { id: 2, name: 'Student 2', attendance: [] },
      { id: 3, name: 'Student 3', attendance: [] },
    ];
  };

  const getTotalPresentAbsent = () => {
    const totalPresent = attendanceData.filter((student) =>
      student.attendance.some((entry) => entry.present === 1)
    ).length;

    const totalAbsent = attendanceData.length - totalPresent;

    return { totalPresent, totalAbsent };
  };

  const { totalPresent, totalAbsent } = getTotalPresentAbsent();

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.studentName, fontWeight: 'bold' }}>
        Subject Selection
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Subject"
        value={selectedSubject}
        onChangeText={setSelectedSubject}
      />
      <Button
        style={styles.button}
        title="Select Subject"
        onPress={handleSubjectSelect}
      />

      <FlatList
        style={styles.listContainer}
        data={attendanceData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.studentName}>{item.name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title="Present"
                onPress={() => markAttendance(item.id, true)}
              />
              <Button
                title="Absent"
                onPress={() => markAttendance(item.id, false)}
              />
            </View>
            {item.attendance && item.attendance.length > 0 && (
              <Text style={styles.checkbox}>
                {item.attendance[item.attendance.length - 1].present ? '✔️' : '❌'}
              </Text>
            )}
          </View>
        )}
      />

      {/* Display total present and absent */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
        <Text style={styles.studentName}>Total Present: {totalPresent}</Text>
        <Text style={styles.studentName}>Total Absent: {totalAbsent}</Text>
      </View>
    </View>
  );
};

export default AttendanceMkScreen;
