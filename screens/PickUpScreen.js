import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Map from '../components/Map'
import tw from 'tailwind-react-native-classnames';

const PickUpScreen = ({ navigation }) => {
  const handleArrive = () => {
    navigation.navigate('StartTripScreen');
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

      <View style={tw`h-1/2 bg-white`}>
        <View style={styles.container}>
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
          <View style={styles.icon}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="call-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="chatbubble" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`mb-4 mt-7`}>
          <View style={styles.pickUp}>
            <Ionicons name="location-outline" size={24} color="black" />
            <Text style={styles.locationText}>Pick-up Location: Good Bullet St</Text>
          </View>
          <View style={styles.destination}>
            <Ionicons name="location-outline" size={24} color="black" />
            <Text style={styles.locationText}>Destination: Neoplan Station Circle</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.arriveButton} onPress={handleArrive}>
          <Text style={styles.arriveButtonText}>Arrive</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton}>
          <Ionicons name="close-circle" size={24} color="red" />
          <Text style={styles.cancelButtonText}>Cancel ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PickUpScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    
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
  icon: {
    flexDirection: "row",
    paddingLeft: 150
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
  arriveButton: {
    width: "100%",
    backgroundColor: '#FF5A5F',
   
    paddingVertical: 12,
    paddingHorizontal: 180,
    alignSelf: 'center',
    marginTop: 16,
  },
  arriveButtonText: {
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