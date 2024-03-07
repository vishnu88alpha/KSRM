import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity,ScrollView, StyleSheet } from 'react-native';

const AnnouncementsScreen = ({ navigation }) => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Academic Announcement 1', category: 'academic' },
    { id: 2, title: 'Placement Announcement 1', category: 'placements' },
    { id: 3, title: 'Result Announcement 1', category: 'results' },
    { id: 4, title: 'Event Announcement 1', category: 'events' },
    { id: 5, title: 'Emergency Announcement 1', category: 'emergency' },
    // Add more announcements as needed
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterAnnouncements = (category) => {
    setSelectedCategory(category);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.announcementItem}
      onPress={() => navigation.navigate('AnnouncementDetail', { announcement: item })}
    >
      <Text style={styles.announcementTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const FilterButton = ({ category, selected, onPress }) => (
    <TouchableOpacity style={[styles.filterButton, { backgroundColor: selected ? '#3498db' : '#D9E3F0' }]} onPress={() => onPress(category)}>
      <Text style={{ color: selected ? '#fff' : '#3498db' }}>{category.toUpperCase()}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
      <ScrollView horizontal={true} contentContainerStyle={styles.filterContainer}>
        <FilterButton category="all" selected={selectedCategory === 'all'} onPress={filterAnnouncements} />
        <FilterButton category="academic" selected={selectedCategory === 'academic'} onPress={filterAnnouncements} />
        <FilterButton category="placements" selected={selectedCategory === 'placements'} onPress={filterAnnouncements} />
        <FilterButton category="results" selected={selectedCategory === 'results'} onPress={filterAnnouncements} />
        <FilterButton category="events" selected={selectedCategory === 'events'} onPress={filterAnnouncements} />
        <FilterButton category="emergency" selected={selectedCategory === 'emergency'} onPress={filterAnnouncements} />
        </ScrollView>
      </View>

      <FlatList
        data={selectedCategory === 'all' ? announcements : announcements.filter(a => a.category === selectedCategory)}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'flext-start',
    alignItems: 'center',
    marginBottom: 16,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  announcementItem: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AnnouncementsScreen;
