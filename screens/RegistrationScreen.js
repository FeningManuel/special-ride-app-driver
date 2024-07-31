import { StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const RegistrationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <View>
        <Text style={styles.motto}> Kindly provide the required Information </Text>
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate("PersonalInformationScreen")}>
        <View style={styles.addAction}>
          <Text style={styles.addActionText}>Personal Information</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate("LicenseScreen")}>
        <View style={styles.addAction}>
          <Text style={styles.addActionText}>Driver's License Details</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate("VehicleInformationScreen")}>
        <View style={styles.addAction}>
          <Text style={styles.addActionText}>Vehicle Information</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate("VerificationScreen")}>
        <View style={styles.addAction}>
          <Text style={styles.addActionText}>Identity Verification</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate("LivelinessCheckScreen")}>
        <View style={styles.addAction}>
          <Text style={styles.addActionText}>Liveliness Check</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.terms}>By continuing, I accept the term of the user agreement and consent to the processing of my personalInformation in accordance with terms of the privacy policy</Text>
      </View>

      <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("PersonalInformationScreen")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.03,
      },
      title: {
        fontSize: width * 0.08,
        fontWeight: 'bold',
        textAlign: 'center',
        
      },
      motto: {
        fontSize: width * 0.04,
        textAlign: 'center',
        marginBottom: height * 0.04,
      },
      addAction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: height * 0.02,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      addActionText: {
        fontSize: width * 0.045,
      },
      terms: {
        marginTop: height * 0.04,
        
      },

      loginButton: {
        backgroundColor: '#f25c5c',
        borderRadius: 18,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: height * 0.09,
        marginBottom: 4,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
});