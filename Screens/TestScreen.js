import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const AssignmentScreen = () => {
  const [showUploadButtons, setShowUploadButtons] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleSelectFile = async () => {
    // ... (same as before)
  };

  const handleUploadFile = () => {
    // ... (same as before)
  };

  const handleViewPostedAssignment = () => {
    // ... (same as before)
  };

  const handleUploadAssignmentPress = () => {
    setShowUploadButtons(!showUploadButtons);
  };

  return (
    <View style={styles.container}>
      {selectedFileName !== '' && (
        <Text style={styles.fileInfo}>Selected File: {selectedFileName}</Text>
      )}

      <TouchableOpacity style={styles.uploadButton} onPress={handleUploadAssignmentPress}>
        <Text style={styles.buttonText}>Upload Assignment</Text>
      </TouchableOpacity>

      {showUploadButtons && (
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.secondaryButton} onPress={handleSelectFile}>
            <Text style={styles.buttonText}>Select File</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={handleUploadFile}>
            <Text style={styles.buttonText}>Upload File</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.secondaryButton} onPress={handleViewPostedAssignment}>
        <Text style={styles.buttonText}>Posted Assignments</Text>
      </TouchableOpacity>

      {/* Add the content for the "Posted Assignments" section */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  fileInfo: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  uploadButton: {
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  secondaryButton: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default AssignmentScreen;