import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Animated, PanResponder, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Map from '../components/Map';
import tw from 'tailwind-react-native-classnames';
import { PanGestureHandler } from 'react-native-gesture-handler';
import EndTripAlert from '../components/EndTripAlert';
import { SafeAreaView } from 'react-native-safe-area-context';  // Corrected the import

const EndTripScreen = ({ navigation }) => {
  const [tripEnded, setTripEnded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x }], { useNativeDriver: false }),
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dx > 150) {
          handleSwipeSuccess();
          Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
        } else {
          Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
        }
      },
    })
  ).current;

  const handleSwipeSuccess = () => {
    setTripEnded(true);
    setModalVisible(true);
    console.log('Trip ended!');
    // Handle the end trip logic here
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
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

          <View style={tw`h-1/2 bg-white rounded-t-3xl p-6`}>
            <Text style={styles.arrivalMessage}>You’re at your Destination</Text>
            
            <View style={styles.profile}>
              <View style={tw`flex-row items-center`}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/50' }} // Replace with passenger's image URL
                  style={styles.profileImage}
                />
                <View>
                  <Text style={styles.profileName}>John Dada</Text>
                  <Text style={styles.profileRating}>
                    <FontAwesome name="star" size={16} color="orange" /> 4.7 (32)
                  </Text>
                </View>
              </View>
              <View style={styles.distanceContainer}>
                <Text style={styles.distanceUnit}>20km</Text>
                <Text style={styles.distanceText}>Distance Covered</Text>
              </View>
            </View>

            <View style={styles.swipeContainer}>
              <Animated.View
                {...panResponder.panHandlers}
                style={[styles.swipeButton, { transform: [{ translateX: pan.x }] }]}
              >
                <Ionicons name="arrow-forward" size={24} color="black" />
              </Animated.View>
              <Text style={styles.swipeText}>{tripEnded ? "Trip Ended" : "End Trip"}</Text>
            </View>
          </View>

          <Modal
            transparent={true}
            visible={modalVisible}
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalBackground}>
              <EndTripAlert
                distance="20"
                fare="35.00"
                rating="4.7"
                totalRatings="32"
                profileImage="https://via.placeholder.com/50" // Replace with actual image URL
                onClose={closeModal}
              />
            </View>
          </Modal>
        </SafeAreaView>
      </PanGestureHandler>
    </TouchableWithoutFeedback>
  );
};

export default EndTripScreen;

const styles = StyleSheet.create({
  arrivalMessage: {
    paddingLeft: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 51,
  },
  profile: {
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileRating: {
    fontSize: 14,
    color: 'gray',
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
  distanceContainer: {
    alignItems: 'flex-end',
  },
  distanceText: {
    fontSize: 14,
    color: 'gray',
  },
  distanceUnit: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  swipeContainer: {
    width: "100%",
    marginTop: 40,
    backgroundColor: 'black',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    position: 'relative',
  },
  swipeButton: {
    width: "100%",
    position: 'absolute',
    left: 0,
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});