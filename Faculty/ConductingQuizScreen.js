import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const ConductingQuizScreen = () => {
  const [googleFormLink, setGoogleFormLink] = useState('');
  const [quizHistory, setQuizHistory] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleLinkChange = (link) => {
    setGoogleFormLink(link);
  };

  const handleStartQuiz = () => {
    if (googleFormLink.trim() !== '' && selectedSubject) {
      setQuizHistory(prevHistory => [...prevHistory, { link: googleFormLink, subject: selectedSubject, selected: false }]);
      setGoogleFormLink('');
    } else {
      Alert.alert('Incomplete Details', 'Please enter Google Form Link and select a subject.');
    }
  };

  const handleClearHistory = () => {
    const selectedItems = quizHistory.filter((item) => item.selected);

    if (selectedItems.length > 0) {
      Alert.alert(
        'Clear Quiz History',
        'Are you sure you want to clear the selected quiz history items?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              const updatedHistory = quizHistory.filter((item) => !item.selected);
              setQuizHistory(updatedHistory);
            },
          },
        ],
        { cancelable: true }
      );
    } else {
      Alert.alert('No Items Selected', 'Please select items to clear from the quiz history.');
    }
  };

  const toggleItemSelection = (index) => {
    const updatedHistory = [...quizHistory];
    updatedHistory[index].selected = !updatedHistory[index].selected;
    setQuizHistory(updatedHistory);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity style={styles.historyItem} onPress={() => toggleItemSelection(index)}>
      <Text style={styles.historyItemText}>{item.link} - {item.subject}</Text>
      <View style={styles.checkbox} />
      {item.selected && <View style={styles.checkmark} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Conduct Quiz</Text>
      
      <RNPickerSelect
        items={[
          { label: 'Sem1-CSE-A-C Programming', value: 'Sem1-CSE-A-C Programming' },
          { label: 'Sem4-CSE-B-ADS', value: 'Sem4-CSE-B-ADS' },
          { label: 'Sem5-CSE-B-DAA', value: 'Sem5-CSE-B-DAA' }
        ]}
        onValueChange={(value) => setSelectedSubject(value)}
        style={pickerSelectStyles}
      />

      <TextInput
        style={styles.input}
        onChangeText={handleLinkChange}
        value={googleFormLink}
        placeholder="Enter Google Form Link"
      />
      <Button title="Upload Quiz" color="gold" onPress={handleStartQuiz} />
      
      <Text style={styles.historyHeader}>Quiz History:</Text>
      <FlatList
        style={styles.historyContainer}
        data={quizHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />

      <Button title="Clear Quiz History" onPress={handleClearHistory} color="gold" style={styles.clearButton} />
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    marginBottom: 10,
  },
  inputAndroid: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    marginBottom: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#1e90ff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db',
    backgroundColor: '#e0ffff',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: '#3498db',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  historyHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
    backgroundColor: '#e0ffff',
    padding: 10,
    borderRadius: 10,
  },
  historyContainer: {
    maxHeight: 200,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fffaf0',
  },
  historyItemText: {
    flex: 1,
    fontSize: 16,
    color: '#34495e',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#3498db',
    marginRight: 10,
  },
  checkmark: {
    width: 12,
    height: 12,
    backgroundColor: '#3498db',
    borderRadius: 3,
    marginRight: 10,
  },
  clearButton: {
    marginTop: 20,
  },
});

export default ConductingQuizScreen;
