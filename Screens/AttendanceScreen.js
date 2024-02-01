// AttendanceScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const AttendanceScreen = () => {
  const [attendanceData, setAttendanceData] = useState([
    { id: '1', subject: 'Data Structures', attendance: 90 },
    { id: '2', subject: 'Algorithms', attendance: 85 },
    { id: '3', subject: 'Database Management', attendance: 92 },
    { id: '4', subject: 'Operating Systems', attendance: 78 },
    { id: '5', subject: 'Computer Networks', attendance: 88 },
    { id: '6', subject: 'Software Engineering', attendance: 91 },
    { id: '7', subject: 'Artificial Intelligence', attendance: 76 },
    { id: '8', subject: 'Machine Learning', attendance: 87 },
    // Add more subjects as needed
  ]);
  

  
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.subject}>{item.subject}</Text>
      <View style={styles.progressBarContainer}>
        <View
          style={[styles.progressBar, { width: `${item.attendance}%` }]}
        />
      </View>
      <Text style={styles.attendanceText}>{`${item.attendance}%`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={attendanceData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 15,
  },
  subject: {
    fontSize: 18,
    marginBottom: 5,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  attendanceText: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default AttendanceScreen;
