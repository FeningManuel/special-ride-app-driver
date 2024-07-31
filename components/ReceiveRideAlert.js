import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReceiveRideAlert = ({ from, to, distanceFrom, distanceTo, onRequestClose }) => {
  const navigation = useNavigation();

  const handleViewRequest = () => {
    onRequestClose();
    navigation.navigate('AcceptRideScreen');
  };

  return (
    <View style={styles.alertContainer}>
      <Text style={styles.headerText}>TAXI REQUESTED</Text>
      <View style={styles.infoContainer}>
        <Image source={{ uri: 'path_to_your_image' }} style={styles.carImage} />
        <View style={styles.textContainer}>
          <View style={styles.locationRow}>
            <Text style={styles.labelText}>From</Text>
            <Text style={styles.valueText}>{from}</Text>
            <Text style={styles.distanceText}>{distanceFrom}</Text>
          </View>
          <View style={styles.locationRow}>
            <Text style={styles.labelText}>To</Text>
            <Text style={styles.valueText}>{to}</Text>
            <Text style={styles.distanceText}>{distanceTo}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.viewButton} onPress={handleViewRequest}>
          <Text style={styles.buttonText}>View Request</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ignoreButton} onPress={onRequestClose}>
          <Text style={styles.ignoreButtonText}>Ignore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReceiveRideAlert;

const styles = StyleSheet.create({
  alertContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    top: '40%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999999',
  },
  valueText: {
    fontSize: 16,
  },
  distanceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  viewButton: {
    backgroundColor: '#FF5A5F',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  ignoreButton: {
    backgroundColor: '#CCCCCC',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  ignoreButtonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
});