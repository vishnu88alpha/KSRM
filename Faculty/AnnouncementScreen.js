import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Picker, TextInput } from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker';

const FacultyAttendance = () => {
  const [showSpecificOptions, setShowSpecificOptions] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedOption, setSelectedOption] = useState('SELECT');
  const [textBoxValue, setTextBoxValue] = useState('');

  const semesters = Array.from({ length: 8 }, (_, i) => `Sem ${i + 1}`);
  const branches = ['CSE', 'ECE', 'EEE', 'Civil', 'AI & ML', 'Mechanical'];
  const Sections = ['Sec A', 'Sec B', 'Sec C'];
  const options = ['SELECT', 'ALL', 'ACADEMIC', 'PLACEMENT', 'RESULT', 'EMERGENCY', 'EVENTS'];

  const handleSpecificSubmit = () => {
    setShowSpecificOptions(true);
  };

  const handleBack = () => {
    setShowSpecificOptions(false);
  };

  const handleSubmitAll = () => {
    if ((!selectedOption || selectedOption === 'SELECT' )||(!textBoxValue || textBoxValue === 'Enter announcement content')) {
      // Show validation error for dropdown field
      alert('empty field.');
    }
    else
    {
    // Post announcement to all students
    alert('Announcement posted to all students: ' + textBoxValue);
    }
  };

  const handleSubmitSpecific = () => {
    if ((!selectedOption || selectedOption === 'SELECT' )||(!textBoxValue || textBoxValue === 'Enter announcement content')||(!selectedSubject || selectedSubject === 'Select Section' )||(!selectedBranch || selectedBranch === 'Select Branch')||(!selectedSemester || selectedSemester === 'Select Semester' )) {
      // Show validation error for dropdown field
      alert('empty field.');
    }
    else{
    // Post announcement to specific students based on selected options
    const announcement = `Announcement posted to ${selectedSemester}, ${selectedBranch}, ${selectedSubject}`;
    alert(announcement);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.dropdown} >
        <RNPicker
          selectedValue={selectedOption}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}>
          {options.map((option, index) => (
            <RNPicker.Item key={index} label={option} value={option} />
          ))}
        </RNPicker>
      </View>
      <TextInput
        style={styles.textBox}
        value={textBoxValue}
        onChangeText={setTextBoxValue}
        placeholder="Enter announcement content"
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmitAll}>
        <Text style={styles.buttonText}>SUBMIT TO ALL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={handleSpecificSubmit}>
        <Text style={styles.buttonText}>SUBMIT TO SPECIFIC</Text>
      </TouchableOpacity>
      
      {showSpecificOptions && (
        <View style={styles.specificOptionsContainer}>
          <View style={specificStyles.dropdown}>
            <Text style={[styles.sideHeading, specificStyles.dropdownHeading]}>Select Semester:</Text>
            <RNPicker
              selectedValue={selectedSemester}
              onValueChange={(itemValue) => setSelectedSemester(itemValue)}>
              <RNPicker.Item label="Select Semester" value={null} />
              {semesters.map((semester, index) => (
                <RNPicker.Item key={index} label={semester} value={semester} />
              ))}
            </RNPicker>
          </View>
          <View style={specificStyles.dropdown}>
            <Text style={[styles.sideHeading, specificStyles.dropdownHeading]}> Select a Branch:</Text>
            <RNPicker
              selectedValue={selectedBranch}
              onValueChange={(itemValue) => setSelectedBranch(itemValue)}>
              <RNPicker.Item label="Select Branch" value={null} />
              {branches.map((branch, index) => (
                <RNPicker.Item key={index} label={branch} value={branch} />
              ))}
            </RNPicker>
          </View>
          <View style={specificStyles.dropdown}>
            <Text style={[styles.sideHeading, specificStyles.dropdownHeading]}>Select a Subject:</Text>
            <RNPicker
              selectedValue={selectedSubject}
              onValueChange={(itemValue) => setSelectedSubject(itemValue)}>
              <RNPicker.Item label="Select Section" value={null} />
              {Sections.map((subject, index) => (
                <RNPicker.Item key={index} label={subject} value={subject} />
              ))}
            </RNPicker>
          </View>
          <TouchableOpacity style={styles.submitButtonSpecific} onPress={handleSubmitSpecific}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={handleBack}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    flex : 1,
    backgroundColor: '#1e90ff',
    borderRadius:7,
  },
  dropdown: {
    marginBottom: 20,
    width: '100%',
    borderColor: '#dcdcdc',
    backgroundColor: 'white',
  },
  sideHeading: {
    fontSize: 18,
    marginBottom: 5,
    
  },
  textBox: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  submitButtonSpecific: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft:31,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  specificOptionsContainer: {
    marginTop: 20,
    borderColor: '#ccc',
    borderWidth: 3,
    borderRadius: 5,
    paddingHorizontal: 80,
    paddingVertical: 30,
    backgroundColor: '#e0ffff',
    padding: 10,
  },
  closeButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft:35,
    alignItems: 'center',
    width: '100%',
  },
});

const specificStyles = StyleSheet.create({
  dropdown: {
    marginBottom: 20,
    width: '100%',
    borderColor: '#dcdcdc',
    backgroundColor: 'white',
  },
  dropdownHeading: {
    // Add any specific styles for the dropdown heading here
    marginTop:-30,
    color:'#e0ffff',
  },
});

export default FacultyAttendance;
