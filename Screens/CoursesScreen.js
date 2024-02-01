// BTechCoursesScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const BTechCoursesScreen = () => {
  // Dummy data for B.Tech courses
  const bTechCourses = [
    { id: '1', name: 'Computer Science and Engineering', duration: '4 years', icon: 'desktop-outline' },
    { id: '2', name: 'Electrical Engineering', duration: '4 years', icon: 'bulb-outline' },
    { id: '3', name: 'Mechanical Engineering', duration: '4 years', icon: 'cog-outline' },
    { id: '4', name: 'Civil Engineering', duration: '4 years', icon: 'construct-outline' },
    { id: '5', name: 'Electronics & communication Engineering', duration: '4 years', icon: 'radio-outline'},
    { id: '6', name: 'Aritifical intelligence & Machine Learning', duration: '4 years', icon:'globe-outline'},
    // Add more B.Tech courses as needed
  ];

  const renderCourseItem = ({ item }) => (
    <View style={styles.courseContainer}>
      <Ionicons name={item.icon} size={30} color="#3498db" style={styles.courseIcon} />
      <View>
        <Text style={styles.courseName}>{item.name}</Text>
        <Text style={styles.duration}>Duration: {item.duration}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>B.Tech Courses</Text>
      <FlatList
        data={bTechCourses}
        keyExtractor={(item) => item.id}
        renderItem={renderCourseItem}
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
  courseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
  courseIcon: {
    marginRight: 10,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  duration: {
    fontSize: 16,
    color: '#666',
  },
});

export default BTechCoursesScreen;
