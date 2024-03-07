import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, Button } from 'react-native';
import { Svg, Circle, G, Text as SvgText } from 'react-native-svg';

const ResultsScreen = () => {
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [semesterData, setSemesterData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const semesters = [
    { id: 1, name: 'Semester 1', sgpa: 9.5 },
    { id: 2, name: 'Semester 2', sgpa: 6.0 },
    { id: 3, name: 'Semester 3', sgpa: 7.83 },
    { id: 4, name: 'Semester 4', sgpa: 8.4 },
    { id: 5, name: 'Semester 5', sgpa: 5.83 },
    { id: 6, name: 'Semester 6', sgpa: 6.0 },
    { id: 7, name: 'Semester 7', sgpa: 8.0 },
    { id: 8, name: 'Semester 8', sgpa: 8.0 },
  ];

  const handlePress = (semester) => {
    console.log('Semester Pressed:', semester);
    handleSemesterPress(semester);
  };

  const renderRingProgressBar = (sgpa) => {
    const radius = 40;
    const strokeWidth = 8;
    const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
    const progress = (sgpa / 10) * circumference;

    let circleColor, textColor, failText;

    // Determine circle color based on pass/fail threshold
    if (sgpa >= 6) {
      circleColor = '#008000'; // Green if pass
      textColor = '#008000'; // Text color
      failText = null; // No fail text if pass
    } else if (sgpa > 0) {
      circleColor = '#e74c3c'; // Red if fail
      textColor = '#e74c3c'; // Text color
      failText = <SvgText x="0" y="75" textAnchor="middle" fontSize="12" fill={textColor}>Fail</SvgText>; // Fail text position
    } else {
      circleColor = 'transparent'; // Empty circle
      textColor = '#000000'; // Default text color
      failText = null; // No fail text if no SGPA
    }

    return (
      <Svg height="120" width="120">
        <G transform={{ translate: '60,60' }}>
          <Circle
            r={radius}
            stroke="#ffffff" // Outer outline color
            strokeWidth={strokeWidth + 2} // Increase the width for outer outline
            fill="transparent"
          />
          <Circle
            r={radius}
            stroke="#cccccc" // Inner outline color
            strokeWidth={strokeWidth - 2} // Decrease the width for inner outline
            fill="transparent"
          />
          {sgpa > 0 && (
            <Circle
              r={radius}
              stroke={circleColor}
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={`${circumference - progress}`}
            />
          )}
          <SvgText
            x="0"
            y="5"
            textAnchor="middle"
            fontSize="16"
            fill={textColor} // Text color changes based on pass/fail
          >
            {sgpa}
          </SvgText>
          {failText}
        </G>
      </Svg>
    );
  };

  const calculateOverallCGPA = () => {
    const totalSGPA = semesters.reduce((acc, semester) => acc + semester.sgpa, 0);
    const overallCGPA = totalSGPA / semesters.length;

    // Check if any semester's SGPA is below 6 (failing threshold)
    const anySemesterFail = semesters.some((semester) => semester.sgpa < 6);

    // Determine color based on pass/fail threshold
    const overallColor = anySemesterFail ? '#e74c3c' : '#008000'; // Red if fail, green if pass

    return { cgpa: overallCGPA.toFixed(2), color: overallColor };
  };

  const handleSemesterPress = (semester) => {
    setSelectedSemester(semester);
    let internalMarks, externalMarks;
    
    // Assign marks based on SGPA range
    if (semester.sgpa >= 8.5) {
      internalMarks = Math.floor(Math.random() * (40 - 30 + 1)) + 30;
      externalMarks = Math.floor(Math.random() * (60 - 45 + 1)) + 45;
    } else if (semester.sgpa >= 6.0 && semester.sgpa < 8.5) {
      internalMarks = Math.floor(Math.random() * (30 - 21 + 1)) + 21;
      externalMarks = Math.floor(Math.random() * (45 - 25 + 1)) + 25;
    } else {
      internalMarks = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
      externalMarks = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
    }

    const filteredData = [
      { id: '1', subject: 'Data Structures', internalMarks, externalMarks, credits: (externalMarks + internalMarks < 44 ? 0 : 3), passFail: (externalMarks + internalMarks < 44 ? "F" : "P") },
      { id: '2', subject: 'Algorithms', internalMarks, externalMarks, credits: (externalMarks + internalMarks < 44 ? 0 : 3), passFail: (externalMarks + internalMarks < 44 ? "F" : "P") },
      { id: '3', subject: 'Database Management', internalMarks, externalMarks, credits: (externalMarks + internalMarks < 44 ? 0 : 3), passFail: (externalMarks + internalMarks < 44 ? "F" : "P") },
      { id: '4', subject: 'Operating Systems', internalMarks, externalMarks, credits: (externalMarks + internalMarks < 44 ? 0 : 3), passFail: (externalMarks + internalMarks < 44 ? "F" : "P") },
      { id: '5', subject: 'Computer Networks', internalMarks, externalMarks, credits: (externalMarks + internalMarks < 44 ? 0 : 3), passFail: (externalMarks + internalMarks < 44 ? "F" : "P") },
      { id: '6', subject: 'Software Engineering', internalMarks, externalMarks, credits: (externalMarks + internalMarks < 44 ? 0 : 3), passFail: (externalMarks + internalMarks < 44 ? "F" : "P") },
    ];
    setSemesterData(filteredData);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.overallContainer}>
        <Text style={styles.overallLabel}>Overall CGPA:</Text>
        <Text style={[styles.overallCGPA, { color: calculateOverallCGPA().color }]}>
          {calculateOverallCGPA().cgpa}
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
            {renderRingProgressBar(item.sgpa)}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Set the number of columns according to your preference
        contentContainerStyle={styles.semesterContainer}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Semester: {selectedSemester && selectedSemester.name}</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={[styles.headerText, { flex: 2 }]}>Subject</Text>
                <Text style={[styles.headerText, { flex: 1 }]}>IM</Text>
                <Text style={[styles.headerText, { flex: 0.5 }]}>EM</Text>
                <Text style={[styles.headerText, { flex: 1 }]}>P/F</Text>
                <Text style={[styles.headerText, { flex: 1 }]}>Credits</Text>
              </View>
              <FlatList
                data={semesterData}
                renderItem={({ item }) => (
                  <View style={styles.tableRow}>
                    <Text style={[styles.tableText, { flex: 2 }]}>{item.subject}</Text>
                    <Text style={[styles.tableText, { flex: 1 }]}>{item.internalMarks}</Text>
                    <Text style={[styles.tableText, { flex: 0.5 }]}>{item.externalMarks}</Text>
                    <Text style={[styles.tableText, { flex: 1, color: item.passFail === 'P' ? 'green' : 'red' }]}>{item.passFail}</Text>
                    <Text style={[styles.tableText, { flex: 1 }]}>{item.credits}</Text>
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
            <Button
              title="Close"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff', // Light blue background color
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
    marginTop: 5,
    alignItems: 'center',
    backgroundColor: 'gold',
    borderRadius: 20,
  },
  overallLabel: {
    fontSize: 18,
    marginBottom: 5,
    color: '#000', // Black text color
  },
  overallCGPA: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: 'gold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%', // Adjust the width of the modal
    height: '100%', // Adjust the height of the modal
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  table: {
    width: '100%', // Adjust the width of the table
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  tableText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ResultsScreen;

