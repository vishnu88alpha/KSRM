import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Modal, Platform, ScrollView } from 'react-native';

const LibraryScreen = () => {
  // State variables
  const [searchInput, setSearchInput] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [matchedBooks, setMatchedBooks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(null);
  const [issuedBooks, setIssuedBooks] = useState([
    { id: 'ABC123', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', issueDate: new Date('2024-02-3') },
    { id: 'DEF456', title: 'To Kill a Mockingbird', author: 'Harper Lee', issueDate: new Date('2024-02-09') },
    { id: 'GHI789', title: '1984', author: 'George Orwell', issueDate: new Date('2024-02-6') },
    // Add more issued books as needed
  ]);
  
  // State variable for available books
  const [availableBooks, setAvailableBooks] = useState([
    { id: '123XYZ', title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', department: 'CSE', location: 'Stack 1, Shelf A' },
    { id: '163XYZ', title: 'Algorithms', author: 'Thomas H. Cormen', department: 'CSE', location: 'Stack 2, Shelf A' },
    { id: '456UVW', title: 'Artificial Intelligence: A Modern Approach', author: 'Michael R. Lindeburg', department: 'AI & ML', location: 'Stack 2, Shelf B' },
    { id: '789QRS', title: 'Database Management Systems', author: 'Raghu Ramakrishnan', department: 'CSE', location: 'Stack 1, Shelf B' },
    { id: '456UVW', title: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell', department: 'AI & ML', location: 'Stack 2, Shelf B' },
    { id: '789QRS', title: 'Database Management Systems', author: 'Raghu Ramakrishnan', department: 'CSE', location: 'Stack 1, Shelf B' },
    { id: '111EFG', title: 'Operating System Concepts', author: 'Abraham Silberschatz', department: 'CSE', location: 'Stack 2, Shelf A' },
    { id: '222TUV', title: 'Mechanical Engineering Design', author: 'Joseph E. Shigley', department: 'MECH', location: 'Stack 3, Shelf A' },
    { id: '333JKL', title: 'Introduction to Civil Engineering', author: 'Michael R. Lindeburg', department: 'CE', location: 'Stack 4, Shelf B' },
    { id: '444NOP', title: 'Electrical Engineering: Principles and Applications', author: 'Allan R. Hambley', department: 'EEE', location: 'Stack 3, Shelf B' },
    { id: '555ABC', title: 'Microelectronic Circuits', author: 'Adel S. Sedra', department: 'ECE', location: 'Stack 4, Shelf A' },
    { id: '666DEF', title: 'Data Structures and Algorithms', author: 'Robert Lafore', department: 'CSE', location: 'Stack 1, Shelf C' },
    // Add more available books as needed
  ]);

  // Function to handle book search
  const handleSearch = () => {
    if (searchInput.length < 3) {
      Alert.alert('Invalid Search', 'Please enter at least 3 letters for book title or author name.');
      return;
    }

    const filteredBooks = availableBooks.filter(
      (book) =>
        (book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          book.author.toLowerCase().includes(searchInput.toLowerCase())) &&
        (selectedDepartment === 'All' || book.department === selectedDepartment)
    );

    if (filteredBooks.length > 0) {
      setMatchedBooks(filteredBooks);
      setModalVisible(true);
    } else {
      Alert.alert('No Book Found', 'No book matches the search criteria.');
    }
  };

  // Function to handle department selection
  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    setError(null);
  };
  
  // Function to calculate fine based on overdue days
  const calculateFine = (endDate) => {
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - endDate.getTime();
    const daysOverdue = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysOverdue > 0 ? daysOverdue * 1 : 0; // Fine is ₹1 for each day overdue
  };

  // UseEffect hook to run when component mounts
  useEffect(() => {
    const timer = setInterval(() => {
      checkEndDates();
    }, 86400000); // Check every day
    return () => clearInterval(timer);
  }, []);

  // Function to check due dates and issue alerts
  const checkEndDates = () => {
    issuedBooks.forEach(book => {
      const endDate = new Date(book.issueDate);
      endDate.setDate(endDate.getDate() + 15); // Adding 15 days
  
      const currentDate = new Date();
      const timeDiff = endDate.getTime() - currentDate.getTime();
      const daysUntilDue = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
      if (daysUntilDue <= 3 && daysUntilDue > 0) {
        if (Platform.OS === 'web') {
          window.alert(`The book '${book.title}' is due in ${daysUntilDue} days.`);
        } else {
          Alert.alert(
            'Book Due Soon',
            `The book '${book.title}' is due in ${daysUntilDue} days. Please return it to avoid fines.`,
            [{ text: 'OK', style: 'cancel' }]
          );
        }
      }
  
      if (daysUntilDue <= 0) {
        const fine = calculateFine(endDate);
        if (currentDate > endDate) {
          if (Platform.OS === 'web') {
            window.alert(`The due date for '${book.title}' has passed. Please return it to avoid fines.`);
          } else {
            Alert.alert(
              'Book Overdue',
              `The due date for '${book.title}' has passed. Please return it to avoid fines.`,
              [{ text: 'OK', style: 'cancel' }]
            );
          }
        }
      }
    });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Library</Text>

      {/* Input field for book search */}
      <TextInput
        style={styles.input}
        placeholder="Enter book title or author name"
        value={searchInput}
        onChangeText={setSearchInput}
      />

      {/* Department selection */}
      <View style={styles.departmentContainer}>
        <Text style={styles.departmentLabel}>Select Department:</Text>
        <View style={styles.radioContainer}>
          {['All', 'CSE', 'AI & ML', 'MECH', 'CE', 'EEE', 'ECE', 'Other'].map((department) => (
            <View key={department} style={styles.radioItem}>
              <Button
                title={department}
                onPress={() => handleDepartmentSelect(department)}
                color={selectedDepartment === department ? '#3498db' : '#888'}
              />
            </View>
          ))}
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
      </View>

      {/* Button to trigger book search */}
      <Button title="Search Books" onPress={handleSearch} />

      {/* Modal to display matched books */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Matched Books</Text>
            {matchedBooks.map((book) => (
              <View key={book.id}>
                <Text>Title: {book.title}</Text>
                <Text>Author: {book.author}</Text>
                <Text>ID: {book.id}</Text>
                <Text>Location: {book.location}</Text>
              </View>
            ))}
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Display issued books */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.issuedBooksContainer}>
          <Text style={styles.issuedBooksLabel}>Issued Books:</Text>
          {issuedBooks.map((book) => {
            // Calculate the end date by adding 15 days to the issue date
            const endDate = new Date(book.issueDate);
            endDate.setDate(endDate.getDate() + 15);
    
            // Check if the end date is exceeded
            const currentDate = new Date();
            const fine = calculateFine(endDate);
            const timeDiff = endDate.getTime() - currentDate.getTime();
            const daysUntilDue = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
            let alertMessage = '';
            if (daysUntilDue <= 0) {
              alertMessage = 'End Date Exceeded!';
            } else if (daysUntilDue === 1) {
              alertMessage = 'Due in 1 Day!';
            } else if (daysUntilDue === 2) {
              alertMessage = 'Due in 2 Days!';
            } else if (daysUntilDue === 3) {
              alertMessage = 'Due in 3 Days!';
            }
    
            return (
              <View key={book.id} style={styles.issuedBookItem}>
                <Text style={styles.issuedBookText}>{book.title}</Text>
                <Text style={styles.issuedBookText}>Issue Date: {book.issueDate.toLocaleDateString()}</Text>
                {currentDate > endDate && (
                  <Text style={[styles.issuedBookText, { color: 'red' }]}>{alertMessage}</Text>
                )}
                {currentDate <= endDate && (
                  <Text style={[styles.issuedBookText, { color: 'red' }]}>{alertMessage}</Text>
                )}
                <Text style={styles.issuedBookText}>End Date: {endDate.toLocaleDateString()}</Text>
                {currentDate > endDate && (
                  <Text style={[styles.issuedBookText, { color: 'red' }]}>Fine: ₹{fine}</Text>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:-15,
    color: 'black',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#f5fffa',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#f8f8ff',
  },
  departmentContainer: {
    marginBottom: 5,
    backgroundColor: '#e0ffff',
    borderRadius: 10,
    marginTop: 4,
  },
  departmentLabel: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 12,
    color: '#333',
  },
  radioContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 12,
  },
  radioItem: {
    marginRight: 10,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#e0ffff',
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  issuedBooksContainer: {
    marginTop: 5,
    backgroundColor: '#e0ffff',
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  issuedBooksLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:10,
    marginBottom: 10,
    color: 'black',
  },
  issuedBookItem: {
    marginBottom: 10,
  },
  issuedBookText: {
    color: 'black',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    maxHeight: 200, // Set a maximum height for ScrollView to enable scrolling
  },
});

export default LibraryScreen;
