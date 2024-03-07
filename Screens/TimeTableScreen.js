import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Timetable = () => {
  // Define your timetable data here
  const timetableData = [
    { day: 'Monday', subjects: ['Math', 'PF', 'CO', 'Eng', 'Hist', 'Phys'], times: ['9:00-10:00', '10:00-11:00', '11:00-12:00', '1:00-2:00', '2:00-3:00', '3:00-4:00'] },
    { day: 'Tuesday', subjects: ['DLD', 'DS', 'DM', 'OS', 'AI', 'Math'], times: ['9:00-10:00', '10:00-11:00', '11:00-12:00', '1:00-2:00', '2:00-3:00', '3:00-4:00'] },
    { day: 'Wednesday', subjects: ['Eng', 'Hist', 'Math', 'DBMS', 'CN', 'PF'], times: ['9:00-10:00', '10:00-11:00', '11:00-12:00', '1:00-2:00', '2:00-3:00', '3:00-4:00'] },
    { day: 'Thursday', subjects: ['Math', 'PP', 'CG', 'DM', 'WD', 'Hist'], times: ['9:00-10:00', '10:00-11:00', '11:00-12:00', '1:00-2:00', '2:00-3:00', '3:00-4:00'] },
    { day: 'Friday', subjects: ['CA', 'Hist', 'DSP', 'SE', 'ML', 'Eng'], times: ['9:00-10:00', '10:00-11:00', '11:00-12:00', '1:00-2:00', '2:00-3:00', '3:00-4:00'] },
    { day: 'Saturday', subjects: ['Math', 'CN', 'DBMS', 'OS', 'AI', 'Hist'], times: ['9:00-10:00', '10:00-11:00', '11:00-12:00', '1:00-2:00', '2:00-3:00', '3:00-4:00'] },
  ];


  // Get the current day
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay() - 1; // Sunday is 0, we want Monday to be 0

  // Group timetable data into pairs of two days
  const groupedTimetableData = [];
  for (let i = 0; i < timetableData.length; i += 2) {
    if (i + 1 < timetableData.length) {
      groupedTimetableData.push([timetableData[i], timetableData[i + 1]]);
    } else {
      groupedTimetableData.push([timetableData[i]]);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {groupedTimetableData.map((group, index) => (
          <View key={index} style={styles.row}>
            {group.map((day, idx) => (
              <View key={idx} style={[styles.dayContainer, index * 2 + idx === currentDayIndex ? styles.highlightedDay : null]}>
                <Text style={styles.dayText}>{day.day}</Text>
                <View>
                  {day.subjects.map((subject, sIndex) => (
                    <Text key={sIndex} style={styles.subjectText}>{subject} {day.times[sIndex]}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db', // Background color for the timetable
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dayContainer: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  highlightedDay: {
    backgroundColor: 'lightblue', // Highlighted day color
  },
  dayText: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  subjectText: {
    marginLeft: 10,
  },
});

export default Timetable;
