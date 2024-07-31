
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from "./store";
import LogoScreen from './screens/LogoScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import personalInformationScreen from './screens/PersonalInformationScreen';
import LicenseScreen from './screens/LicenseScreen';
import VehicleInformationScreen from './screens/VehicleInformationScreen';
import VerificationScreen from './screens/VerificationScreen';
import LivelinessCheckScreen from './screens/LivelinessCheckScreen';
import HomeScreen from './screens/HomeScreen';
import AcceptRideScreen from './screens/AcceptRideScreen';
import StartTripScreen from './screens/StartTripScreen';
import PickUpScreen from './screens/PickUpScreen';
import EndTripScreen from './screens/EndTripScreen';
import EarningsScreen from './screens/EarningsScreen';
import BonusPointsScreen from './screens/BonusPointsScreen';
import DriversBonusScreen from './screens/DriversBonusScreen';
import RewardsScreen from './screens/RewardsScreen';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './components/CustomDrawerContent';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileScreen from './screens/ProfileScreen';
import TripHistoryScreen from './screens/TripHistoryScreen';
import ScheduledRideScreen from './screens/ScheduledRideScreen';
import SettingsScreen from './screens/SettingsScreen';
import LogoutScreen from './screens/LogoutScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import PrivacyScreen from './screens/PrivacyScreen';
import PaymentMethodsScreen from './screens/PaymentMethodsScreen';
import LanguageScreen from './screens/LanguageScreen';
import HelpScreen from './screens/HelpScreen';
import AboutScreen from './screens/AboutScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#fff',
        width: 250,
      },
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />} // Use the custom drawer content
  >

<Drawer.Screen
      name="Home"
      options={{
        headerShown: false,
        drawerLabel: 'Home',
        title: 'Home',
        drawerIcon: () => (
        
          <SimpleLineIcons name="home" size={24} color="#808080" />
        ),
      }}
      component={HomeScreen}
    />
<Drawer.Screen
      name="Profile"
      options={{
        headerShown: false,
        drawerLabel: 'Profile',
        title: 'Profile',
        drawerIcon: () => (
        
          <SimpleLineIcons name="user" size={24} color="#808080" />
        ),
      }}
      component={ProfileScreen}
    />
<Drawer.Screen
      name="Earnings"
      options={{
        headerShown: false,
        drawerLabel: 'Earnings',
        title: 'Earnings',
        drawerIcon: () => (
        
          <SimpleLineIcons name="wallet" size={24} color="#808080" />
        ),
      }}
      component={EarningsScreen}
    />
<Drawer.Screen
      name="Bonuses"
      options={{
        headerShown: false,
        drawerLabel: 'Bonuses',
        title: 'Bonuses',
        drawerIcon: () => (
        
          <SimpleLineIcons name="trophy" size={24} color="#808080" />
        ),
      }}
      component={BonusPointsScreen}
    />
<Drawer.Screen
      name="Trip History"
      options={{
        headerShown: false,
        drawerLabel: 'Trip History',
        title: 'Trip History',
        drawerIcon: () => (
        
          <SimpleLineIcons name="clock" size={24} color="#808080" />
        ),
      }}
      component={TripHistoryScreen}
    />
<Drawer.Screen
      name="Scheduled Rides"
      options={{
        headerShown: false,
        drawerLabel: 'Scheduled Rides',
        title: 'Scheduled Rides',
        drawerIcon: () => (
        
          <SimpleLineIcons name="calendar" size={24} color="#808080" />
        ),
      }}
      component={ScheduledRideScreen}
    />
<Drawer.Screen
      name="Settings"
      options={{
        headerShown: false,
        drawerLabel: 'Settings',
        title: 'Settings',
        drawerIcon: () => (
        
          <SimpleLineIcons name="settings" size={24} color="#808080" />
        ),
      }}
      component={SettingsScreen}
    />
<Drawer.Screen
      name="Logout"
      options={{
        headerShown: false,
        drawerLabel: 'Logout',
        title: 'Logout',
        drawerIcon: () => (
        
          <SimpleLineIcons name="logout" size={24} color="#808080" />
        ),
      }}
      component={LogoutScreen}
    />
    </Drawer.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
        
          
            <Stack.Navigator>
              <Stack.Screen
                name="LogoScreen"
                component={LogoScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={{
                  headerShown: false,
                  gestureEnabled: false,
                }}
              />
               <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="RegistrationScreen"
                component={RegistrationScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="PersonalInformationScreen"
                component={personalInformationScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="LicenseScreen"
                component={LicenseScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="VehicleInformationScreen"
                component={VehicleInformationScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="VerificationScreen"
                component={VerificationScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="LivelinessCheckScreen"
                component={LivelinessCheckScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="HomeScreen"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="AcceptRideScreen"
                component={AcceptRideScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="StartTripScreen"
                component={StartTripScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="PickUpScreen"
                component={PickUpScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="EndTripScreen"
                component={EndTripScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="EarningsScreen"
                component={EarningsScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="BonusPointsScreen"
                component={BonusPointsScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="DriversBonusScreen"
                component={DriversBonusScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="RewardsScreen"
                component={RewardsScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="PrivacyScreen"
                component={PrivacyScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="PaymentMethodsScreen"
                component={PaymentMethodsScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="LanguageScreen"
                component={LanguageScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="HelpScreen"
                component={HelpScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="AboutScreen"
                component={AboutScreen}
                options={{
                  headerShown: false,
                }}
              />
              
             
            </Stack.Navigator>
          
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
