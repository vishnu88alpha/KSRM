import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Svg, Circle, G, Text as SvgText } from 'react-native-svg';

const ResultsScreen = () => {
  const semesters = [
    { id: 1, name: 'Semester 1', percentage: 95 },
    { id: 2, name: 'Semester 2', percentage: 84.1 },
    { id: 3, name: 'Semester 3', percentage: 85.9 },
    { id: 4, name: 'Semester 4', percentage: 84 },
    { id: 5, name: 'Semester 5', percentage: 87 },
    { id: 6, name: 'Semester 6', percentage: 60 },
    { id: 7, name: 'Semester 7', percentage: 80 },
    { id: 8, name: 'Semester 8', percentage: 1 },
  ];

  const handlePress = (semester) => {
    console.log('Semester Pressed:', semester);
  };

  const renderRingProgressBar = (percentage) => {
    const radius = 40;
    const strokeWidth = 8;
    const circumference = 2 * Math.PI * radius;
    const progress = (percentage / 100) * circumference;

    let circleColor, textColor;

    // Determine circle color based on pass/fail threshold
    if (percentage >= 60) {
      circleColor = '#008000'; // Green if pass
      textColor = '#008000'; // Text color
    } else if (percentage < 60 && percentage > 0) {
      circleColor = '#e74c3c'; // Red if fail
      textColor = '#e74c3c'; // Text color
    } else {
      circleColor = 'transparent'; // Empty circle
      textColor = '#000000'; // Default text color
    }

    return (
      <Svg height="100" width="100">
        <G transform={{ translate: '50,50' }}>
          <Circle
            r={radius}
            stroke="#ffffff"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <Circle
            r={radius}
            stroke={circleColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={`${progress}, ${circumference}`}
            strokeLinecap="round"
            transform={`rotate(-90) translate(${-radius * 2}, 0)`}
          />
          <SvgText
            x="0"
            y="5"
            textAnchor="middle"
            fontSize="16"
            fill={textColor} // Text color changes based on pass/fail
          >
            {`${percentage}%`}
          </SvgText>
        </G>
      </Svg>
    );
  };

  const calculateOverallPercentage = () => {
    const totalPercentage = semesters.reduce((acc, semester) => acc + semester.percentage, 0);
    const overallPercentage = totalPercentage / semesters.length;

    // Determine color based on pass/fail threshold
    const overallColor = overallPercentage >= 60 ? '#008000' : '#e74c3c'; // Green if pass, red if fail

    return { percentage: overallPercentage.toFixed(2), color: overallColor };
  };

  return (
    <View style={styles.container}>
      <View style={styles.overallContainer}>
        <Text style={styles.overallLabel}>Overall Percentage:</Text>
        <Text style={[styles.overallPercentage, { color: calculateOverallPercentage().color }]}>
          {calculateOverallPercentage().percentage}%
        </Text>
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6', // Light blue background color
    padding: 20,
  },
  semesterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#fff', // White button color
    borderRadius: 10,
    margin: 10,
    padding: 15,
    width: '40%', // Adjust the width based on the number of columns
    alignItems: 'center',
    elevation: 3,
  },
  sem: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000', // Black text color
  },
  overallContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  overallLabel: {
    fontSize: 18,
    marginBottom: 5,
    color: '#000', // Black text color
  },
  overallPercentage: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ResultsScreen;
