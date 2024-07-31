import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ReceiveRideAlert from '../components/ReceiveRideAlert';
import { PanGestureHandler } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(true);  // Default to online for demo
  const [rideAlert, setRideAlert] = useState(false);
  const navigation = useNavigation();
  const alertTimeoutRef = useRef(null);

  const handleGoOffline = () => {
    if (!isOnline) {
      // No delay needed if going offline directly
      setRideAlert(false);
    } else {
      // Set a 15 second delay before showing the ride alert
      alertTimeoutRef.current = setTimeout(() => {
        setRideAlert(true);
      }, 2200); // 15 seconds in milliseconds
    }
    setIsOnline(!isOnline);
  };

  const handleCloseAlert = () => {
    clearTimeout(alertTimeoutRef.current); // Clear timeout if alert is closed manually
    setRideAlert(false);
  };

  return (
    <PanGestureHandler onGestureEvent={() => navigation.openDrawer()}>
      <SafeAreaView>
        <View style={tw`h-1/2`}>
          <Map />
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={32} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`h-1/2 bg-white`}>
          <TouchableOpacity
            style={[styles.goOfflineButton, isOnline ? styles.goOnlineButtonOnline : styles.goOnlineButtonOffline]}
            onPress={handleGoOffline}
          >
            <Text style={styles.goOfflineButtonText}>{isOnline ? 'Offline' : 'Online'}</Text>
          </TouchableOpacity>

          <View style={tw`flex-row justify-around mt-4`}>
            <TouchableOpacity style={styles.infoBox} onPress={() => navigation.navigate('EarningsScreen')}>
              <Text style={styles.infoTitle}>Earnings today</Text>
              <Text style={styles.infoValue}>GHS168.00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoBox} onPress={() => navigation.navigate('BonusPointsScreen')}>
              <Text style={styles.infoTitle}>Bonus Points</Text>
              <Text style={styles.infoValue}>1200/5000</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressBarFill, { width: '24%' }]} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={tw`flex-row justify-around mt-4`}>
            <TouchableOpacity style={styles.infoBox} onPress={() => navigation.navigate('DriversBonusScreen')}>
              <Text style={styles.infoTitle}>Driver's Bonus</Text>
              <Text style={styles.infoValue}>98%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoBox} onPress={() => navigation.navigate('RewardsScreen')}>
              <Text style={styles.infoTitle}>Rewards</Text>
              <Text style={styles.infoValue}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          transparent={true}
          visible={rideAlert}
          animationType="slide"
          onRequestClose={handleCloseAlert}
        >
          <View style={styles.modalBackground}>
            <ReceiveRideAlert
              from="Pickup Location"
              to="Destination"
              distanceFrom="1.5km"
              distanceTo="20km"
              onRequestClose={handleCloseAlert}
            />
          </View>
        </Modal>
      </SafeAreaView>
    </PanGestureHandler>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  goOfflineButton: {
    width: "100%",
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  goOfflineButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
  },
  goOnlineButtonOnline: {
    backgroundColor: '#000', // Black for online
  },
  goOnlineButtonOffline: {
    backgroundColor: '#f25c5c', // Red for offline
  },
  infoBox: {
    width: '45%',
    height: 140,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 16,
    color: '#999999',
  },
  infoValue: {
    fontSize: 20,
    paddingTop: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginTop: 4,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#FF5A5F',
    borderRadius: 4,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingLeft: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});