import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RewardsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rewards</Text>
      <Text style={styles.details}>Detailed information about your Rewards.</Text>
    </View>
  );
};

export default RewardsScreen;

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