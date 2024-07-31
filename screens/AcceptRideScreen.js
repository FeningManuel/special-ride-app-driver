import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Map from '../components/Map'
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const AcceptRideScreen = () => {
  const navigation = useNavigation();
  const [price, setPrice] = useState('');
  const priceInputRef = useRef(null);

  const handlePriceSubmit = () => {
    // Do something with the entered price, if needed
    console.log('Entered price:', price);
    // You can handle submission logic here if required
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={tw`flex-1 bg-white`}>
        <View style={tw`h-1/2`}>
          <Map />
          <View style={tw`absolute top-4 left-4`}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={32} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[tw`h-1/2 bg-white`, styles.container]}>
        <View style={styles.fare}>
          <Text style={styles.fareText}>Ghs 30.00</Text>
          </View>
          <View style={styles.setPrice}>
            <TouchableOpacity style={styles.priceButton}>
              <Ionicons name="cash-outline" size={24} color="black" />
              <Text style={styles.priceButtonText}>GHS</Text>
            </TouchableOpacity>
            <TextInput
              ref={priceInputRef}
              style={styles.priceInput}
              placeholder="Set price"
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
            />
          </View>

          <View style={tw`flex-row items-center justify-between my-4`}>
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
            <View style={tw`flex-row`}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="call-outline" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={tw`mb-4`}>
            <View style={styles.pickUp}>
              <Ionicons name="location-outline" size={24} color="black" />
              <Text style={styles.locationText}>Pick-up Location: Good Bullet St</Text>
            </View>
            <View style={styles.destination}>
              <Ionicons name="location-outline" size={24} color="black" />
              <Text style={styles.locationText}>Destination: Neoplan Station Circle</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.acceptButton} onPress={() => navigation.navigate('PickUpScreen')}>
            <Text style={styles.acceptButtonText}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AcceptRideScreen;

const styles = StyleSheet.create({
  
  setPrice: {
    flexDirection: "row",
    paddingLeft: 70,
    borderWidth: 1,
    marginTop: 5,
    marginLeft: 70,
    borderRadius: 20,
    paddingLeft: 10,
    width: "70%",
    
  },
  fare: {
    marginTop: 10,
    marginBottom: 10,
  },
  fareText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  priceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 1,
    marginHorizontal: 8,
  },
  priceButtonText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 8,
  },
  priceInput: {
    flex: 1,
    
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 8,
    fontSize: 16,
    color: 'black',
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
  iconButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    padding: 10,
    marginLeft: 12,
  },
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
  acceptButton: {
    backgroundColor: '#FF5A5F',
    width: "100%",
    paddingLeft: 180,
  
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignSelf: 'center',
    marginTop: 10,
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});