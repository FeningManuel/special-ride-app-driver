import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ScheduledRideScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('requests');

  const scheduledRides = [
    {
      id: '1',
      date: '20 June, 11:00',
      location: 'Accra sport stadium',
      price: 'Ghs 59.00',
      status: 'Scheduled trip',
    },
    // Add more scheduled rides as needed
  ];

  const cancelledRides = [
    {
      id: '2',
      date: '19 June, 15:00',
      location: 'Accra mall',
      price: 'Ghs 30.00',
      status: 'Cancelled trip',
    },
    // Add more cancelled rides as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.rideContainer}>
      <View style={styles.rideDetails}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Scheduled Rides Request</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setSelectedTab('requests')}>
          <Text style={[styles.tab, selectedTab === 'requests' && styles.tabActive]}>Requests ({scheduledRides.length})</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('cancelled')}>
          <Text style={[styles.tab, selectedTab === 'cancelled' && styles.tabActive]}>Cancelled ({cancelledRides.length})</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={selectedTab === 'requests' ? scheduledRides : cancelledRides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default ScheduledRideScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    position: 'absolute',
    top: hp('5%'),
    left: wp('5%'),
    fontSize: wp('6%'),
  },
  backButtonText: {
    fontSize: hp('3%'),
    color: '#000',
  },
  title: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: hp('10%'),
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp('3%'),
    marginBottom: hp('2%'),
  },
  tab: {
    fontSize: wp('4%'),
  },
  tabActive: {
    fontWeight: 'bold',
    borderBottomWidth: 2,
    paddingBottom: hp('1%'),
  },
  listContainer: {
    alignItems: 'center',
  },
  rideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: wp('4%'),
    marginVertical: hp('1%'),
    borderRadius: wp('2%'),
    width: wp('90%'),
  },
  rideDetails: {
    flex: 1,
  },
  date: {
    fontSize: wp('4%'),
    marginBottom: hp('0.5%'),
  },
  location: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  status: {
    fontSize: wp('3.5%'),
    color: 'gray',
    marginTop: hp('0.5%'),
  },
  price: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
});