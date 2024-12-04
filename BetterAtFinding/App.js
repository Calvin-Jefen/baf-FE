import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ProductCard from './src/components/ProductCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductScreen from './src/screens/ProductScreen';
import MainTabNavigator from './src/navigations/MainTabNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/stores';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import LoginScreen from './src/screens/LoginScreen';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name='MainTabs' component={MainTabNavigator} />
          <Stack.Screen name='Product Detail' component={ProductDetailScreen} />

        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
}


