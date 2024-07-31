import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DriversBonusScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Driver's Bonus</Text>
      <Text style={styles.details}>Detailed information about the Driver's bonus.</Text>
    </View>
  );
};

export default DriversBonusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
    marginTop: 20,
  },
});