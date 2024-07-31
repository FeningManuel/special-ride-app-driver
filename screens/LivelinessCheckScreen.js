import { StyleSheet, Text, View, Image, Alert, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { colors } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LivelinessCheckScreen = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDoneIcon, setShowDoneIcon] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
      }
    })();
  }, []);

  const handleCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleDone = () => {
    setLoading(true);
    setTimeout(() => {
      setShowDoneIcon(true);
      setTimeout(() => {
        setLoading(false);
        setShowDoneIcon(false);
        navigation.navigate('HomeScreen');
      }, 2000); // Navigate to HomeScreen after 2 seconds of showing the done icon
    }, 3000); // Show done icon after 3 seconds of loading
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={styles.Heading}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              marginVertical: 12,
              color: colors.black,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 50
            }}>
            Liveliness Check
          </Text>
        </View>
        <View style={styles.subHeading}>
          <Text
            style={{
              fontSize: 16,
              paddingLeft: 90,
              marginVertical: 2,
              color: colors.black,
            }}>
            You are almost there!
          </Text>
          </View>
          
          <View>
          <Text
            style={{
              fontSize: 16,
              color: colors.black,
            }}>
            Center your face in the frame and follow the on-screen instructions. Make sure it's completed.
          </Text>
          </View>
        <View style={styles.takeSelfie}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.imagePickerButton} onPress={handleCamera}>
                <Ionicons name="scan" size={100} color={colors.grey2} />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View>
          <Text>
            Take off glasses, hat, or any items that cover your face. Make sure your face is not dark.
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("VerificationScreen")}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>

      {loading && (
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingContainer}>
            {showDoneIcon ? (
              <Ionicons name="checkmark-circle-outline" size={100} color="#4CAF50" />
            ) : (
              <ActivityIndicator size="large" color="#f25c5c" />
            )}
            <Text style={styles.loadingText}>
              {showDoneIcon ? 'Registration Complete' : 'Your registration is under review'}
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default LivelinessCheckScreen;

const styles = StyleSheet.create({
  takeSelfie: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 75,
  },
  subHeading: {
    paddingBottom: 30
  },
  doneButton: {
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
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
  imagePickerButton: {
    borderRadius: 18,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
  },
  iconContainer: {
    width: 200,
    height: 200,
    borderRadius: 60,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
  },
});