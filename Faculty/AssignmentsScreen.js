import React, { useState, useEffect } from 'react';
import { View, Button, Alert, Text, Image, ScrollView, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [fileInfo, setFileInfo] = useState([]);

  useEffect(() => {
    // Any initialization or side effects can be handled here
  }, []);

  const pickDocuments = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        multiple: true, // Enable selecting multiple documents
      });

      if (!result.cancelled && result.assets.length > 0) {
        const newDocuments = result.assets.map(doc => ({
          name: doc.name,
          type: 'application/pdf',
          uri: doc.uri
        }));
        setFileInfo([...fileInfo, ...newDocuments]);
      } else {
        console.log('Document picking canceled or no documents selected');
      }
    } catch (error) {
      console.log('Error picking documents:', error);
      Alert.alert('Error', 'Failed to pick documents. Please try again.');
    }
  };

  const pickImages = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        quality: 1,
        multiple: true, // Enable selecting multiple images
      });

      if (!result.cancelled && result.assets.length > 0) {
        const newImages = result.assets.map(image => ({
          name: image.fileName || image.uri.split('/').pop(),
          type: 'image/' + image.uri.split('.').pop(),
          uri: image.uri,
        }));
        setFileInfo([...fileInfo, ...newImages]);
      } else {
        console.log('Image picking canceled or no images selected');
      }
    } catch (error) {
      console.log('Error picking images:', error);
      Alert.alert('Error', 'Failed to pick images. Please try again.');
    }
  };

  const uploadFiles = () => {
    // Implement upload functionality here
    Alert.alert('Upload', 'Files will be uploaded here.');
  };

  const clearFiles = () => {
    setFileInfo([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Pick PDF" onPress={pickDocuments} color="#8fbc8f" />
        <Button title="Pick Images" onPress={pickImages} color="#8fbc8f" />
      </View>
      <ScrollView contentContainerStyle={styles.fileInfoContainer}>
        {fileInfo.length > 0 && (
          <View style={styles.fileListContainer}>
            {fileInfo.map((file, index) => (
              <View key={index} style={styles.fileItemContainer}>
                <Text style={styles.fileNameText}>File Name: {file.name}</Text>
                <Text style={styles.fileTypeText}>File Type: {file.type}</Text>
                {file.type.startsWith('image/') && (
                  <Image source={{ uri: file.uri }} style={styles.image} />
                )}
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      <View style={styles.buttonGroup}>
        <Button title="Upload Files" onPress={uploadFiles} color="#7b68ee" style={styles.button} />
        <Button title="Clear" onPress={clearFiles} color="#7b68ee" style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1e90ff',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 20,
    padding: 20,
  },
  fileInfoContainer: {
    alignItems: 'center',
    backgroundColor: '#e0ffff',
  },
  fileListContainer: {
    marginTop: 20,
  },
  fileItemContainer: {
    marginBottom: 10,
  },
  fileNameText: {
    fontWeight: 'bold',
  },
  fileTypeText: {
    marginBottom: 5,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 5,
  },
  buttonGroup: {
    marginBottom: 320,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#1e90ff', // Match the container background color
  },
});
