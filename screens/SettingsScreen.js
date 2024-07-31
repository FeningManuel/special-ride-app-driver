import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SettingsScreen = ({ navigation }) => {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>
      
      <TouchableOpacity style={styles.settingItem} onPress={() => handleNavigation('NotificationsScreen')}>
        <Text style={styles.settingText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => handleNavigation('PrivacyScreen')}>
        <Text style={styles.settingText}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => handleNavigation('PaymentMethodsScreen')}>
        <Text style={styles.settingText}>Payment Methods</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => handleNavigation('VehicleInformationScreen')}>
        <Text style={styles.settingText}>Vehicle Information</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => handleNavigation('LanguageScreen')}>
        <Text style={styles.settingText}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => handleNavigation('HelpScreen')}>
        <Text style={styles.settingText}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem} onPress={() => handleNavigation('AboutScreen')}>
        <Text style={styles.settingText}>About</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: wp('4%'),
  },
  settingItem: {
    backgroundColor: '#FFFFFF',
    padding: wp('4%'),
    marginVertical: hp('1%'),
    borderRadius: wp('2%'),
  },
  settingText: {
    fontSize: wp('4%'),
  },
});