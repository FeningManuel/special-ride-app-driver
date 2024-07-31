import { Pressable, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { colors } from 'react-native-elements';

const VerificationScreen = ({ navigation }) => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

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

  const handleImagePicker = (setImage) => {
    Alert.alert(
      "Upload Photo",
      "Choose an option",
      [
        {
          text: "Take Photo",
          onPress: () => handleCamera(setImage),
        },
        {
          text: "Choose from Library",
          onPress: () => handleImageLibrary(setImage),
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  const handleImageLibrary = async (setImage) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleCamera = async (setImage) => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 5,
              color: colors.black,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 75
            }}>
            Identity Verification
          </Text>
        </View>
        <View>
          <Text style={styles.subHeading}>
            Upload image  of ID Card
          </Text>
        </View>

        <View style={{ marginVertical: 12 }}>
          <Text style={styles.instructionText}><Ionicons name="checkmark-circle" size={13} color="green" /> Government-issued</Text>
          <Text style={styles.instructionText}><Ionicons name="checkmark-circle" size={13} color="green" /> Original full-size, unedited documents</Text>
          <Text style={styles.instructionText}><Ionicons name="checkmark-circle" size={13} color="green" /> Readable and coloured image</Text>
          <Text style={styles.instructionText}><Ionicons name="close-circle" size={13} color="red" /> Image must not be blurry</Text>
          <Text style={styles.instructionText}><Ionicons name="close-circle" size={13} color="red" /> Image must not have reflections</Text>
        </View>

        <View style={styles.imageContainer}>
          
          {frontImage ? (
            <Image source={{ uri: frontImage }} style={styles.idImage} />
          ) : (
            <TouchableOpacity style={styles.imagePickerButton} onPress={() => handleImagePicker(setFrontImage)}>
            <View style={styles.iconContainer}>
              <Ionicons name="camera-outline" size={50} color={colors.black} />
              
            <Text style={styles.buttonText}>Upload Front of ID</Text>
          
            </View>
            </TouchableOpacity>
          )}
          
        </View>

        <View style={styles.imageContainer}>
          {backImage ? (
            <Image source={{ uri: backImage }} style={styles.idImage} />
          ) : (
            <TouchableOpacity style={styles.imagePickerButton} onPress={() => handleImagePicker(setBackImage)}>
            <View style={styles.iconContainer}>
              <Ionicons name="camera-outline" size={50} color={colors.black} />
            
           
            <Text style={styles.buttonText}>Upload Back of ID</Text>
            </View>
          </TouchableOpacity>
          
          )}
          
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            This information is used for personal verification only and it's kept private and confidential by SpecialRide
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("LivelinessCheckScreen")}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("VehicleInformationScreen")}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
        
        
      </View>
    </SafeAreaView>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  subHeading: {
    fontSize: 16,
    marginLeft: 90,
  },
  nextButton: {
    backgroundColor: '#f25c5c',
    borderRadius: 18,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 4,
  },
  backButton: {
    
    borderRadius: 18,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 5,
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
  buttonText: {
    color: 'black',
    fontSize: 16,
    
  },
  imageContainer: {
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 12,
  },
  idImage: {
    width: 200,
    height: 120,
    borderRadius: 8,
    marginBottom: 12,
  },
  iconContainer: {
    width: 200,
    height: 120,
    borderRadius: 8,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  imagePickerButton: {
    backgroundColor: '#d3d3d3',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  instructionText: {
    fontSize: 13,
    color: colors.black,
    marginVertical: 2,
  },
  infoContainer: {
    padding: 12,
  },
  infoText: {
    lineHeight: 15,
    fontSize: 12,
  }
});