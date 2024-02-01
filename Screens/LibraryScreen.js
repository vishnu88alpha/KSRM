// LibraryScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LibraryScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleSearch = () => {
    // Implement your logic to fetch books based on searchInput and selectedDepartment
    // For example, you can make an API call here

    // Dummy alert for demonstration purposes
    Alert.alert('Books Fetched', `Search Input: ${searchInput}\nDepartment: ${selectedDepartment}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Library</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter book title or author"
        value={searchInput}
        onChangeText={setSearchInput}
      />

      <View style={styles.departmentContainer}>
        <Text style={styles.departmentLabel}>Select Department:</Text>
        <View style={styles.radioContainer}>
          {['CSE', 'AI & ML', 'MECH', 'CE', 'EEE', 'ECE'].map((department) => (
            <View key={department} style={styles.radioItem}>
              <Button
                title={department}
                onPress={() => setSelectedDepartment(department)}
                color={selectedDepartment === department ? '#3498db' : '#888'}
              />
            </View>
          ))}
        </View>
      </View>

      <Button title="Search Books" onPress={handleSearch} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  departmentContainer: {
    marginBottom: 20,
  },
  departmentLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  radioItem: {
    marginRight: 10,
    marginBottom: 10,
  },
});

export default LibraryScreen;
