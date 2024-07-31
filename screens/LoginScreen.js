import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const LoginScreen = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [phoneCode, setPhoneCode] = useState('+233');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://your-api-endpoint.com/login', {
        phone: `${phoneCode}${phoneNumber}`,
        password,
      });

      if (response.status === 200) {
        navigation.navigate('HomeScreen');
      } else {
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={styles.title}>Login to your account</Text>
        </View>
        <View style={{ paddingTop: 57, marginBottom: 12 }}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='+233'
              placeholderTextColor={colors.black}
              keyboardType='numeric'
              style={styles.countryCodeInput}
              value={phoneCode}
              onChangeText={setPhoneCode}
            />
            <TextInput
              placeholder='Phone Number'
              placeholderTextColor={colors.black}
              keyboardType='numeric'
              style={styles.phoneNumberInput}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>
        <View style={{ paddingTop: 30, marginBottom: 12 }}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Password'
              placeholderTextColor={colors.black}
              secureTextEntry={!isPasswordShown}
              style={styles.passwordInput}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={styles.eyeIcon}
            >
              {isPasswordShown ? (
                <Ionicons name="eye-off" size={24} color={colors.black} />
              ) : (
                <Ionicons name="eye" size={24} color={colors.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    color: colors.black,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    height: 48,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 22,
  },
  countryCodeInput: {
    width: '12%',
    borderRightWidth: 1,
    borderRightColor: colors.grey1,
    height: '100%',
  },
  phoneNumberInput: {
    width: '80%',
  },
  passwordInput: {
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
  },
  forgotPasswordButton: {
    alignItems: 'center',
    marginTop: 12,
  },
  forgotPasswordText: {
    color: colors.primary,
    fontSize: 16,
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
});