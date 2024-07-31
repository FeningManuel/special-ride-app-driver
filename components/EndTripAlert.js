import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

const EndTripAlert = ({ distance, fare, rating, totalRatings, profileImage, onClose }) => {
  return (
    <View style={styles.alertContainer}>
      <View style={tw`flex-row items-center justify-between mb-4`}>
        <Image
          source={{ uri: profileImage }}
          style={styles.profileImage}
        />
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="orange" />
          <Text style={styles.ratingText}>{rating} ({totalRatings})</Text>
        </View>
        <Text style={styles.distanceText}>{distance}km Distance Covered</Text>
      </View>
      <Text style={styles.fareText}>Ghs{fare}</Text>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EndTripAlert;

const styles = StyleSheet.create({
  alertContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  distanceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fareText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});