import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Svg, Circle, G, Text as SvgText } from 'react-native-svg';

const ResultsScreen = () => {
  const semesters = [
    { id: 1, name: 'Semester 1', percentage: 95},
    { id: 2, name: 'Semester 2', percentage: 84.1 },
    { id: 3, name: 'Semester 3', percentage: 85.9 },
    { id: 4, name: 'Semester 4', percentage: 84 },
    { id: 5, name: 'Semester 5', percentage: 87 },
    { id: 6, name: 'Semester 6', percentage: 60 },
    { id: 7, name: 'Semester 7', percentage: 80 },
    { id: 8, name: 'Semester 8', percentage: 87 },
  ];

  const handlePress = (semester) => {
    console.log('Semester Pressed:', semester);
  };

  const renderRingProgressBar = (percentage) => {
    const radius = 40;
    const strokeWidth = 8;
    const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
    const progress = (percentage / 100) * circumference ;

    return (
      <Svg height="100" width="100">
        <G transform={{ translate: '50,50' }}>
          <Circle
            r={radius}
            stroke="pink"
            strokeWidth={strokeWidth}
            fill="#9d67e8"
          />
          <Circle
            r={radius}
            stroke="#9d67e8"
            strokeWidth={strokeWidth}
            fill="#292323"
            strokeDasharray={`${progress} ${circumference}`}
            strokeDashoffset="0"
          />
          <SvgText
            x="0"
            y="5"
            textAnchor="middle"
            fontSize="16"
            fill="#3498db"
          >
            {`${percentage}%`}
          </SvgText>
        </G>
      </Svg>
    );
  };

  const calculateOverallPercentage = () => {
    const totalPercentage = semesters.reduce((acc, semester) => acc + semester.percentage, 0);
    return totalPercentage / semesters.length;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={semesters}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.sem}>{item.name}</Text>
            {renderRingProgressBar(item.percentage)}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Set the number of columns according to your preference
        contentContainerStyle={styles.semesterContainer}
      />
      <View style={styles.overallContainer}>
        <Text style={styles.overallLabel}>Overall Percentage:</Text>
        <Text style={styles.overallPercentage}>{calculateOverallPercentage().toFixed(2)}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    marginTop: 20,
    marginLeft: 20,
    justifyContent: 'center', 
  },
  semesterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    width: '40%', // Adjust the width based on the number of columns
    alignItems: 'center',
    elevation: 3,
  },
  sem: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  overallContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  overallLabel: {
    fontSize: 18,
    marginBottom: 5,
  },
  overallPercentage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: 40,
  },
});

export default ResultsScreen;
