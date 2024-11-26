import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ProductCard from './src/components/ProductCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductScreen from './src/screens/ProductScreen';
import MainTabNavigator from './src/navigations/MainTabNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/stores';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen options={{headerShown: false}} name='Main Tabs' component={MainTabNavigator}/>
        
      </Stack.Navigator>

    </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f0f0f0',D
//   },
// });
