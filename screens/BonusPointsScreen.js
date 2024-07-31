import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BonusPointsScreen = ({ navigation }) => {
  // Assuming the current bonus is fetched or passed as a prop
  const currentBonus = 0.00; // Replace this with the actual bonus value

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Bonuses</Text>
      <Text style={styles.subtitle}>Current Bonuses</Text>
      <Text style={styles.bonusAmount}>Ghs{currentBonus.toFixed(2)}</Text>
    </View>
  );
};

export default BonusPointsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Adjust the background color if needed
  },
  backButton: {
    position: 'absolute',
    left: wp('2.5%'),
    top: hp('1.5%'),
    zIndex: 1,
  },
  backButtonText: {
    fontSize: hp('3%'),
    color: '#000',
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginTop: hp('10%'), // Adjust based on the design
  },
  subtitle: {
    fontSize: wp('4%'),
    marginTop: hp('2%'),
  },
  bonusAmount: {
    fontSize: wp('12%'),
    fontWeight: 'bold',
    marginTop: hp('2%'),
  },
});