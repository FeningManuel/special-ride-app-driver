import { Pressable, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Icon, colors } from 'react-native-elements'


const VehicleInformationScreen = ({ navigation }) => {



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 12,
            color: colors.black,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 75

          }}>
            Vehicle Information
          </Text>
        </View>



        <View style={styles.inputContainer}>
          <TextInput placeholder='Vehicle name' placeholderTextColor={colors.black} keyboardType='name-phone-pad' style={styles.textInput} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Model' placeholderTextColor={colors.black} keyboardType='name-phone-pad' style={styles.textInput} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Number Plate' placeholderTextColor={colors.black} keyboardType='name-phone-pad' style={styles.textInput} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Color' placeholderTextColor={colors.black} keyboardType='name-phone-pad' style={styles.textInput} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Vehicle Insurance' placeholderTextColor={colors.black} keyboardType='name-phone-pad' style={styles.textInput} />
        </View>

        <View>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("VerificationScreen")}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("LicenseScreen")}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>



    </SafeAreaView>
  )
}

export default VehicleInformationScreen

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: '#f25c5c',
    borderRadius: 18,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 4,
  },
  backButton: {
    
    borderRadius: 18,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 4,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingTop: 12,
    marginBottom: 12,
  },
  textInput: {
    width: '100%',
    height: 48,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 22,
  },
})