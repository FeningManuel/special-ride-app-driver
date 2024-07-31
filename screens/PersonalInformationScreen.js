import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert, Keyboard,
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { colors } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CountryPicker } from 'react-native-country-codes-picker';


const PersonalInformationScreen = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+233'); // Default country code
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }

      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      if (cameraStatus.status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
      }
    })();
  }, []);

  const handleImagePicker = () => {
    Alert.alert(
      "Upload Photo",
      "Choose an option",
      [
        { text: "Take Photo", onPress: () => handleCamera() },
        { text: "Choose from Library", onPress: () => handleImageLibrary() },
        { text: "Cancel", style: "cancel" }
      ],
      { cancelable: true }
    );
  };

  const handleImageLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowDatePicker(false);
    setDateOfBirth(currentDate.toLocaleDateString());
  };

  const handlePhoneInputBlur = () => {
    setShowPhoneNumber(false);
    if (phoneNumber.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits.');
    } else {
      setPhoneError('');
    }
  };

  const handlePhoneNumberChange = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    if (cleanedText.length <= 10) {
      setPhoneNumber(cleanedText);
    }
  };

  const handleNextPress = () => {
    if (phoneNumber.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits.');
    } else {
      setPhoneError('');
      navigation.navigate("LicenseScreen");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, paddingHorizontal: wp('5%') }}>
              <View style={{ marginVertical: hp('3%'), alignItems: 'center' }}>
                <Text style={styles.title}>Personal Information</Text>
                {profileImage ? (
                  <Image source={{ uri: profileImage }} style={styles.profileImage} />
                ) : (
                  <Ionicons name="person-circle" size={hp('15%')} color={colors.black} style={{ marginVertical: hp('2%') }} />
                )}
                <TouchableOpacity style={styles.imagePickerButton} onPress={handleImagePicker}>
                  <Text style={styles.buttonText}>Upload Photo</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginVertical: hp('0.5%') }} />
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder='First name'
                  placeholderTextColor={colors.black}
                  keyboardType='name-phone-pad'
                  style={styles.textInput}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder='Last name'
                  placeholderTextColor={colors.black}
                  keyboardType='name-phone-pad'
                  style={styles.textInput}
                />
              </View>
              <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
                  <Text style={styles.dateText}>{dateOfBirth || 'Date of birth'}</Text>
                  <Ionicons name="calendar" size={20} color={colors.black} />
                </TouchableOpacity>
                {showDatePicker && (
                  <DateTimePicker
                    value={new Date()}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                  />
                )}
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder='Email address'
                  placeholderTextColor={colors.black}
                  keyboardType='email-address'
                  style={styles.textInput}
                />
              </View>
              <View style={styles.phoneInputContainer}>
                <TouchableOpacity
                  onPress={() => setShow(true)}
                  style={styles.countryCodeButton}
                >
                  <Text style={styles.countryCodeText}>
                    {countryCode}
                  </Text>
                  <Ionicons name="caret-down-outline" size={20} color={colors.black} />
                </TouchableOpacity>

                <CountryPicker
                  show={show}
                  pickerButtonOnPress={(item) => {
                    setCountryCode(item.dial_code);
                    setShow(false);
                  }}
                />

                <TextInput
                  placeholder='Phone Number'
                  placeholderTextColor={colors.black}
                  keyboardType='numeric'
                  style={styles.phoneNumberInput}
                  onFocus={() => setShowPhoneNumber(true)}
                  onBlur={handlePhoneInputBlur}
                  value={phoneNumber}
                  onChangeText={handlePhoneNumberChange}
                />
              </View>
              {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
              <View>
                <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
                  <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("RegistrationScreen")}>
                  <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PersonalInformationScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginVertical: hp('1.5%'),
    color: colors.black,
    textAlign: 'center'
  },
  profileImage: {
    width: hp('15%'),
    height: hp('15%'),
    borderRadius: hp('7.5%'),
    marginVertical: hp('2%')
  },
  imagePickerButton: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: hp('1.5%'),
    alignItems: 'center',
    width: '80%'
  },
  inputContainer: {
    paddingTop: hp('0.5%'),
    marginBottom: hp('1.5%')
  },
  textInput: {
    width: '100%',
    height: hp('6%'),
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: wp('5%')
  },
  dateInput: {
    width: '100%',
    height: hp('6%'),
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: wp('5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dateText: {
    color: colors.black
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1.5%')
  },
  countryCodeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('1.5%')
  },
  countryCodeText: {
    color: colors.black,
    marginRight: wp('2%')
  },
  phoneNumberInput: {
    width: '70%',
    paddingLeft: wp('2%'),
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    height: hp('6%')
  },
  errorText: {
    color: 'red',
    fontSize: wp('3.5%'),
    marginTop: hp('0.5%')
  },
  nextButton: {
    backgroundColor: '#f25c5c',
    borderRadius: 18,
    paddingVertical: hp('1.5%'),
    alignItems: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('0.5%')
  },
  backButton: {
    borderRadius: 18,
    paddingVertical: hp('1.5%'),
    alignItems: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('0.5%')
  },
  nextButtonText: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: 'bold'
  },
  buttonText: {
    color: 'black',
    fontSize: wp('4%'),
    fontWeight: 'bold'
  }
});