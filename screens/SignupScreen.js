import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CountryPicker from 'react-native-country-picker-modal';
import axios from 'axios';

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState(null);
  const [countryCode, setCountryCode] = useState('+233');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [withFlag, setWithFlag] = useState(true);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        return true;
      };

      const unsubscribe = navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
        backAction();
      });

      return unsubscribe;
    }, [navigation])
  );

  const handlePhoneInputBlur = () => {
    setShowPhoneNumber(false);
    if (phoneNumber.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits.');
    } else {
      setPhoneError('');
    }
  };

  const handlePhoneNumberChange = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, '');
    if (cleanedText.length <= 10) {
      setPhoneNumber(cleanedText);
    }
  };

  const handleSignup = async () => {
    setLoading(true);
    try {
      const userData = {
        firstName,
        lastName,
        email,
        country,
        phone: `${countryCode}${phoneNumber}`,
      };
      const response = await axios.post('http://54.160.124.158:3000/auth/sign-up', userData);
      Alert.alert('Signup Successful', 'You have signed up successfully!');
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error('Error during signup:', error);
      Alert.alert('Signup Failed', `An error occurred during signup: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={styles.headerText}>Create an account</Text>
        </View>
        <View style={{ marginVertical: 3 }}>
          <Text style={styles.welcomeText}>Hello there,</Text>
          <Text style={styles.subText}>Create an account as passenger,</Text>
        </View>
        <View style={{ paddingTop: 30, marginBottom: 12 }}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='First name'
              placeholderTextColor={colors.black}
              keyboardType='default'
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
        </View>
        <View style={{ paddingTop: 12, marginBottom: 12 }}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Last name'
              placeholderTextColor={colors.black}
              keyboardType='default'
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>
        <View style={{ paddingTop: 12, marginBottom: 12 }}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Email address'
              placeholderTextColor={colors.black}
              keyboardType='email-address'
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
        <View style={{ paddingTop: 12, marginBottom: 12 }}>
          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={() => setShowCountryPicker(true)} style={styles.countryPickerContainer}>
              <Text style={styles.input}>
                {country || 'Select Country'}
              </Text>
            </TouchableOpacity>
          </View>
          <CountryPicker
            withFlag={true}
            withFilter={true}
            withCountryNameButton={true}
            onSelect={(selectedCountry) => {
              setCountry(selectedCountry.name);
              setCountryCode(`+${selectedCountry.callingCode}`);
              setShowCountryPicker(false);
            }}
            visible={showCountryPicker}
            onClose={() => setShowCountryPicker(false)}
          />
        </View>
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity
            onPress={() => setShowCountryPicker(true)}
            style={styles.countryCodeButton}
          >
            <Text style={styles.countryCodeText}>
              {countryCode}
            </Text>
            <Ionicons name="caret-down-outline" size={20} color={colors.black} />
          </TouchableOpacity>
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
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSignup}
            disabled={loading}
          >
            <Text style={styles.buttonText}>{loading ? 'Signing Up...' : 'Create an account'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    color: colors.black,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 2,
    color: colors.black,
  },
  subText: {
    fontSize: 16,
    color: colors.black,
  },
  inputContainer: {
    width: '100%',
    height: 48,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: 22,
  },
  input: {
    width: '100%',
  },
  phoneInputContainer: {
    width: '100%',
    height: 48,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 22,
    alignItems: 'center',
  },
  countryCodeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryCodeText: {
    fontSize: 16,
    color: colors.black,
  },
  phoneNumberInput: {
    flex: 1,
    paddingLeft: 12,
  },
  loginButton: {
    backgroundColor: '#f25c5c',
    borderRadius: 18,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 22,
  },
  footerText: {
    fontSize: 16,
    color: colors.black,
  },
  loginText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
  countryPickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});