import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LogoutScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Add logout logic here
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Logout</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Confirm Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: wp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
  },
  button: {
    backgroundColor: '#FF0000',
    padding: wp('4%'),
    borderRadius: wp('2%'),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: wp('4%'),
  },
});