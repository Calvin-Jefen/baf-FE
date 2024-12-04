import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScreen from '../screens/ProductScreen';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '../screens/LoginScreen';
import PurchaseHistoryScreen from '../screens/PurchaseHistoryScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Tab = createBottomTabNavigator();
export default function MainTabNavigator() {
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
      <Tab.Screen name="Product List" component={ProductScreen} />
      <Tab.Screen name="Purchase History" component={PurchaseHistoryScreen} />
      <Tab.Screen name="Profile" component={CheckoutScreen} />
    </Tab.Navigator>
  )
}