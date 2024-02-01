// AnnouncementsScreen.js

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const AnnouncementsScreen = ({ navigation }) => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Academic Announcement 1', category: 'academic' },
    { id: 2, title: 'Placement Announcement 1', category: 'placements' },
    { id: 3, title: 'Result Announcement 1', category: 'results' },
    { id: 4, title: 'Event Announcement 1', category: 'events' },
    // Add more announcements as needed
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterAnnouncements = (category) => {
    setSelectedCategory(category);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      onPress={() => navigation.navigate('AnnouncementDetail', { announcement: item })}
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  const FilterButton = ({ category, selected, onPress }) => (
    <TouchableOpacity style={[styles.filterButton, { backgroundColor: selected ? '#007bff' : '#fff' }]} onPress={() => onPress(category)}>
      <Text style={{ color: selected ? '#fff' : '#007bff' }}>{category.toUpperCase()}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 }}>
        <FilterButton category="all" selected={selectedCategory === 'all'} onPress={filterAnnouncements} />
        <FilterButton category="academic" selected={selectedCategory === 'academic'} onPress={filterAnnouncements} />
        <FilterButton category="placements" selected={selectedCategory === 'placements'} onPress={filterAnnouncements} />
        <FilterButton category="results" selected={selectedCategory === 'results'} onPress={filterAnnouncements} />
        <FilterButton category="events" selected={selectedCategory === 'events'} onPress={filterAnnouncements} />
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
  filterButton: {
    padding: 8,
    borderRadius: 8,
  },
});

export default AnnouncementsScreen;
