// EventsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const EventsScreen = () => {
  // Dummy data for college events
  const collegeEvents = [
    { id: '1', title: 'College Fair', date: 'January 15, 2023', location: 'Main Block' },
    { id: '2', title: 'Alumni Meetup', date: 'February 5, 2023', location: 'SJ Block Seminar Hall' },
    { id: '3', title: 'Tech Symposium', date: 'March 20, 2023', location: 'Auditorium' },
    // Add more events as needed
  ];
  const renderEventItem = ({ item }) => (
    <View style={styles.eventContainer}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDate}>Date: {item.date}</Text>
      <Text style={styles.eventLocation}>Location: {item.location}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <FlatList
        data={collegeEvents}
        keyExtractor={(item) => item.id}
        renderItem={renderEventItem}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    width: '80%',
  },
  eventContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 16,
    color: '#666',
  },
  eventLocation: {
    fontSize: 16,
    color: '#666',
  },
});

export default EventsScreen;
