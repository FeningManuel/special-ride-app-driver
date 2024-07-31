import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

import tw from 'tailwind-react-native-classnames';

const LogoScreen = ({ navigation}) => {
  useEffect(() => {
    // Simulate a delay before navigating to the home screen
    const timer = setTimeout(() => {
      navigation.navigate('SignupScreen');
    }, 2000);

    return () => clearTimeout(timer); // Clear the timeout if component unmounts
  }, [navigation]);

    const text = "SpecialRide";
  const firstWord = text.substring(0, 7); // "Special"
  const secondWord = text.substring(7);   // "Ride"
  return (
    <SafeAreaView style={tw`bg-black h-full`}>
        <View style={styles.container}>
        <Text>
          <Text style={styles.whiteText}>{firstWord}</Text>
          <Text style={styles.redText}>{secondWord}</Text>
        </Text>
        <Text style={styles.driveText}>
            Drive & Earn
          </Text>
        </View>
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    whiteText: {
        fontSize: 48,
        fontWeight: 'bold',
        letterSpacing: -1.8,
        fontFamily: "Ubuntu-BoldItalic",
        fontStyle: 'italic',
      color: 'white', // Set text color to white
    },
    redText: {
        fontSize: 48,
        letterSpacing: -1.8,
        fontWeight: 'bold',
        fontFamily: "Ubuntu-BoldItalic",
        fontStyle: 'italic',
      color: '#f25c5c', // Set text color to red
    },
    textCenter: {
        textAlign: 'center', 
    },
    driveText: {
      fontStyle: "italic",
      color: "white",
      fontSize: "20"
    }
  });
export default LogoScreen
