import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const postedAssignments = [
  { name: 'Assignment 1', postedDate: new Date(2024, 1, 15) },
  { name: 'Assignment 2', postedDate: new Date(2024, 1, 16) },
  { name: 'Assignment 3', postedDate: new Date(2024, 1, 17) },
  // Add more assignments with their posted dates here
];

const PostedAssignment = ({ name, postedDate }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.postedAssignment}>
      <Text style={styles.assignmentName}>{name}</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={require('../assets/cse.png')} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.postedDate}>Posted Date: {postedDate.toDateString()}</Text>

      {/* Modal for displaying the full image */}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          <Image source={require('../assets/cse.png')} style={styles.fullImage} />
        </View>
      </Modal>
    </View>
  );
};

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {postedAssignments.map((assignment, index) => (
        <PostedAssignment
          key={index}
          name={assignment.name}
          postedDate={assignment.postedDate}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  postedAssignment: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  assignmentName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  postedDate: {
    fontSize: 14,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 999,
  },
  closeText: {
    fontSize: 18,
    color: 'white',
  },
  fullImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default App;
