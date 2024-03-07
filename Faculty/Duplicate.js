import React, { useState, useEffect } from 'react';
import { View, Button, Alert, Text, Image, ScrollView } from 'react-native';
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
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
        <Button title="Pick PDF" onPress={pickDocuments} />
        <Button title="Pick Images" onPress={pickImages} />
      </View>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {fileInfo.length > 0 && (
          <View style={{ marginTop: 20 }}>
            {fileInfo.map((file, index) => (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text>File Name: {file.name}</Text>
                <Text>File Type: {file.type}</Text>
                {file.type.startsWith('image/') && (
                  <Image source={{ uri: file.uri }} style={{ width: 200, height: 200, marginTop: 5 }} />
                )}
              </View>
            ))}
            <View style={{ marginTop: 10 }}>
              <Button title="Upload Files" onPress={uploadFiles} />
              <Button title="Clear" onPress={clearFiles} />
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}