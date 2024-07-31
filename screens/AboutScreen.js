import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About</Text>
      {/* Add About Components Here */}
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: wp('4%'),
  },
  header: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
  },
});