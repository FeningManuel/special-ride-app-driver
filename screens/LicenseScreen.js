import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CountryPicker from 'react-native-country-picker-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon, colors } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LicenseScreen = ({ navigation }) => {
  const [countryCode, setCountryCode] = useState('FR');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [dateIssued, setDateIssued] = useState('');
  const [dateExpire, setDateExpire] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isDateIssuedPicker, setIsDateIssuedPicker] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  const toggleCountryPicker = () => {
    setShowCountryPicker(!showCountryPicker);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowDatePicker(false);
    if (isDateIssuedPicker) {
      setDateIssued(currentDate.toLocaleDateString());
    } else {
      setDateExpire(currentDate.toLocaleDateString());
    }
  };

  const showDatepicker = (pickerType) => {
    setIsDateIssuedPicker(pickerType === 'issued');
    setShowDatePicker(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1, paddingHorizontal: wp('5%') }}>
        <View style={{ marginVertical: hp('3%') }}>
          <Text style={styles.title}>Driver's License Details</Text>
        </View>
        
        <TouchableOpacity onPress={toggleCountryPicker}>
          <View style={styles.countryPickerContainer}>
            <Text>
              {withCountryNameButton ? country?.name : countryCode}
            </Text>
            <Icon
              name='chevron-down'
              type='font-awesome'
              color={colors.black}
              containerStyle={{ paddingRight: wp('2.5%') }}
            />
          </View>
        </TouchableOpacity>

        <CountryPicker
          withFlag={withFlag}
          withCountryNameButton={withCountryNameButton}
          countryCode={countryCode}
          onSelect={onSelect}
          visible={showCountryPicker}
          onClose={toggleCountryPicker}
        />
        
        <View style={styles.inputContainer}>
          <TextInput placeholder='First name' placeholderTextColor={colors.black} keyboardType='name-phone-pad' style={styles.textInput} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Last name' placeholderTextColor={colors.black} keyboardType='name-phone-pad' style={styles.textInput} />
        </View>

        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.dateInput} onPress={() => showDatepicker('issued')}>
            <Text style={styles.dateText}>{dateIssued || 'Date issued'}</Text>
            <Ionicons name="calendar" size={20} color={colors.black} />
          </TouchableOpacity>
          {showDatePicker && isDateIssuedPicker && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>
        
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.dateInput} onPress={() => showDatepicker('expire')}>
            <Text style={styles.dateText}>{dateExpire || 'Date expire'}</Text>
            <Ionicons name="calendar" size={20} color={colors.black} />
          </TouchableOpacity>
          {showDatePicker && !isDateIssuedPicker && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>
        
        <View>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("VehicleInformationScreen")}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("PersonalInformationScreen")}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LicenseScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: wp('8%'),
    fontWeight: 'bold',
    marginVertical: hp('1.5%'),
    color: colors.black,
    textAlign: 'center',
  },
  countryPickerContainer: {
    width: '100%',
    height: hp('6%'),
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('3%'),
  },
  inputContainer: {
    paddingTop: hp('1.5%'),
    marginBottom: hp('1.5%'),
  },
  dateInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: hp('6%'),
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
  },
  dateText: {
    color: colors.black,
  },
  textInput: {
    width: '100%',
    height: hp('6%'),
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: wp('5%'),
  },
  nextButton: {
    backgroundColor: '#f25c5c',
    borderRadius: 18,
    paddingVertical: hp('1.5%'),
    alignItems: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('0.5%'),
  },
  backButton: {
    borderRadius: 18,
    paddingVertical: hp('1.5%'),
    alignItems: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('0.5%'),
  },
  nextButtonText: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  backButtonText: {
    color: 'black',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
});