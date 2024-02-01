import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, Linking } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const AssignmentScreen = () => {
  const [showUploadButtons, setShowUploadButtons] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSelectFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });

      if (result.type === 'success') {
        console.log(result.uri, result.type, result.name, result.size);
        setSelectedFile(result);
      } else {
        console.log('Document picking cancelled');
      }
    } catch (err) {
      console.error('Error picking document', err);
    }
  };

  const handleOpenFile = () => {
    // Open the selected file using Linking API
    if (selectedFile && selectedFile.uri) {
      Linking.openURL(selectedFile.uri);
    }
  };

  const handleUploadFile = () => {
    // Implement file upload logic using selectedFile
    if (selectedFile) {
      console.log('File uploaded:', selectedFile.name);
      // Add your upload logic here
    } else {
      console.log('No file selected');
    }
  };

  const handleViewPostedAssignment = () => {
    // Implement logic to view posted assignments
    console.log('View posted assignments');
  };

  const handleUploadAssignmentPress = () => {
    setShowUploadButtons(!showUploadButtons);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{
          marginBottom: 20,
          padding: 10,
          backgroundColor: 'blue',
          borderRadius: 5,
        }}
        onPress={handleUploadAssignmentPress}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
          Upload Assignment
        </Text>
      </TouchableOpacity>

      {showUploadButtons && (
        <View style={{ marginBottom: 20 }}>
          <Button title="Select File" onPress={handleSelectFile} />
          {selectedFile && (
            <TouchableOpacity
              style={{
                marginTop: 10,
                padding: 10,
                backgroundColor: 'gray',
                borderRadius: 5,
              }}
              onPress={handleOpenFile}
            >
              <Text style={{ fontSize: 16, color: 'white' }}>
                Open File: {selectedFile.name}
              </Text>
            </TouchableOpacity>
          )}
          <Button title="Upload File" onPress={handleUploadFile} />
        </View>
      )}

      <TouchableOpacity
        style={{
          marginBottom: 20,
          padding: 10,
          backgroundColor: 'green',
          borderRadius: 5,
        }}
        onPress={handleViewPostedAssignment}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
          Posted Assignments
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AssignmentScreen;
