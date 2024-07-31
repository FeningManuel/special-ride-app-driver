import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Map from '../components/Map'
import tw from 'tailwind-react-native-classnames';

const StartTripScreen = ({ navigation }) => {
  const handleStartTrip = () => {
    navigation.navigate('EndTripScreen');
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`h-1/2`}>
        <Map />
        <View style={styles.openDrawer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`h-1/2 bg-white rounded-t-3xl mt-7 `}>
        <View style={tw`mb-4`}>
          <View style={styles.pickUp}>
            <Ionicons name="location-outline" size={24} color="black" />
            <Text style={styles.locationText}>Pick-up Location: Good Bullet St</Text>
          </View>
          <View style={styles.destination}>
            <Ionicons name="location-outline" size={24} color="black" />
            <Text style={styles.locationText}>Destination: Neoplan Station Circle</Text>
            <Text style={styles.distanceText}>20km</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.startButton} onPress={handleStartTrip}>
          <Text style={styles.startButtonText}>Start Trip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton}>
          <Ionicons name="close-circle" size={24} color="red" />
          <Text style={styles.cancelButtonText}>Cancel ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartTripScreen;

const styles = StyleSheet.create({
  pickUp: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#d3d3d3",
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
    padding: 17,
    
  },
  destination: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBlockColor: "#d3d3d3",
    padding: 17
  },
  locationText: {
    fontSize: 16,
    marginLeft: 8,
  },
  distanceText: {
    fontSize: 16,
    marginLeft: 8,
    color: 'gray',
  },
  startButton: {
    backgroundColor: '#FF5A5F',
    width: "100%",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 160,
    
    
    marginTop: 16,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  cancelButtonText: {
    color: 'red',
    fontSize: 16,
    marginLeft: 8,
  },
  openDrawer: {
    position: "absolute",
    paddingLeft: 20,
    paddingTop: 70,
  },
});