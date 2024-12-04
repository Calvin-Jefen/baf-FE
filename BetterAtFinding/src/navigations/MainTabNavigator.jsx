import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import React from 'react'
import { logout } from '../redux/slices/authSlice';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScreen from '../screens/ProductScreen';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '../screens/LoginScreen';
import PurchaseHistoryScreen from '../screens/PurchaseHistoryScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
export default function MainTabNavigator() {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Logout",
          onPress: () => {
            dispatch(logout()); // Clear Redux state
            navigation.navigate("Login"); // Navigate to the login screen
          }
        }
      ]
    );
  };


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Product List') {
            iconName = focused ? 'list' : 'list-outline'
          } else if (route.name === 'Purchase History') {
            iconName = focused ? 'bag-check' : 'bag-check-outline'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        }
      })
      }
    >
      <Tab.Screen name="Product List" component={ProductScreen} options={{
        headerRight: () => (
          <TouchableOpacity
            style={styles.customButton}
            onPress={handleLogout}
          >
            <Ionicons name="log-out" size={24} color="#fff" />
          </TouchableOpacity>
        ),
      }} />
      <Tab.Screen name="Purchase History" component={PurchaseHistoryScreen} options={{
        headerRight: () => (
          <TouchableOpacity
            style={styles.customButton}
            onPress={handleLogout}
          >
            <Ionicons name="log-out" size={24} color="#fff" />
          </TouchableOpacity>
        ),
      }} />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  customButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#C12E2C',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10, // Space from the edge of the header
  }
});