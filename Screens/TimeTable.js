// TimeTable.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TimeTable = ({ timetableData }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {timetableData.map((item, index) => (
          <View key={index} style={styles.timetableItem}>
            <Text style={styles.title}>{item.day}</Text>
            <Text style={styles.schedule}>{item.schedule}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  timetableItem: {
    marginRight: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  schedule: {
    fontSize: 14,
    color: '#333',
  },
});

export default TimeTable;
