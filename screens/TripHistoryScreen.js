import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const tripData = [
  { id: '1', date: '01 Jan, 12:00', location: 'Ghana Revenue Authority', status: 'Completed trip', amount: 'Ghs 33.00' },
  { id: '2', date: '01 Jan, 11:00', location: 'Accra sport stadium', status: 'Cancelled trip', amount: 'Ghs 33.00' },
  { id: '3', date: '01 Jan, 11:00', location: 'Accra sport stadium', status: 'Completed trip', amount: 'Ghs 33.00' },
  // Add more trips as needed
];

const TripHistoryScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemContent}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={[styles.status, item.status === 'Cancelled trip' && styles.cancelledStatus]}>
          {item.status}
        </Text>
      </View>
      <Text style={styles.amount}>{item.amount}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Trip History</Text>
      <FlatList
        data={tripData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  itemContent: {
    flex: 1,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#555',
  },
  status: {
    fontSize: 14,
    color: '#0b0',
  },
  cancelledStatus: {
    color: 'red',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TripHistoryScreen;