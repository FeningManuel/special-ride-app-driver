import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Icon, colors } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [phoneCode, setPhoneCode] = useState('+233');
  const [phoneNumber, setPhoneNumber] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        // Disable back navigation
        return true;
      };

      const unsubscribe = navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
        backAction();
      });

      return unsubscribe;
    }, [navigation])
  );

  const handleSignup = async () => {
    try {
      const response = await axios.post('https://your-api-endpoint.com/signup', {
        firstName,
        lastName,
        email,
        country,
        phone: `${phoneCode}${phoneNumber}`,
      });

      if (response.status === 200) {
        navigation.navigate('RegistrationScreen');
      } else {
        // Handle other statuses
        console.error('Signup failed:', response.data);
      }
    } catch (error) {
      console.error('Error during signup:', error);
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
            <TextInput
              placeholder='Search for country'
              placeholderTextColor={colors.black}
              keyboardType='default'
              style={styles.input}
              value={country}
              onChangeText={setCountry}
            />
          </View>
        </View>
        <View style={{ paddingTop: 12, marginBottom: 12 }}>
          <View style={styles.phoneInputContainer}>
            <TextInput
              placeholder='+233'
              placeholderTextColor={colors.black}
              keyboardType='phone-pad'
              style={styles.phoneCodeInput}
              value={phoneCode}
              onChangeText={setPhoneCode}
            />
            <TextInput
              placeholder='Phone Number'
              placeholderTextColor={colors.black}
              keyboardType='phone-pad'
              style={styles.phoneNumberInput}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSignup}
          >
            <Text style={styles.buttonText}>Create an account</Text>
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
  },
  phoneCodeInput: {
    width: '20%',
    borderRightWidth: 1,
    borderRightColor: colors.grey1,
    height: '100%',
  },
  phoneNumberInput: {
    width: '75%',
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
});