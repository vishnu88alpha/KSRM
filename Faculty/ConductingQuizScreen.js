import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ConductingQuizScreen = () => {
  const [googleFormLink, setGoogleFormLink] = useState('');
  const [quizHistory, setQuizHistory] = useState([]);

  const handleLinkChange = (link) => {
    setGoogleFormLink(link);
  };

  const handleStartQuiz = () => {
    // Check if the link is not empty before adding it to history
    if (googleFormLink.trim() !== '') {
      setQuizHistory((prevHistory) => [...prevHistory, googleFormLink]);
      setGoogleFormLink(''); // Clear the input field after adding to history
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Conduct Quiz</Text>
      <Text style={styles.label}>Google Form Link:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleLinkChange}
        value={googleFormLink}
        placeholder="Enter Google Form Link"
      />
      <Button title="Upload Quiz" onPress={handleStartQuiz} />
      
      <Text style={styles.historyHeader}>Quiz History:</Text>
      <FlatList
        data={quizHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyItemText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ecf0f1', // Light background color
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db', // Blue color
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#2c3e50', // Dark gray color
  },
  input: {
    height: 40,
    borderColor: '#3498db', // Blue border color
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  historyHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#27ae60', // Green color
  },
  historyItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7', // Light gray color
    paddingVertical: 10,
  },
  historyItemText: {
    fontSize: 16,
    color: '#34495e', // Dark blue color
  },
});

export default ConductingQuizScreen;
