// BookDisplayScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookDisplayScreen = ({ route }) => {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Details</Text>
      <Text>Title: {book.title}</Text>
      <Text>Author: {book.author}</Text>
      <Text>Department: {book.department}</Text>
      {/* Add more book details here if needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9E3F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db',
  },
});

export default BookDisplayScreen;
