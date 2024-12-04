import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

const PaymentScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { paymentUrl } = route.params;

  const handleNavigationStateChange = (navState) => {
    // Check for successful payment
    if (navState.url.includes('payment_success')) {
      Alert.alert('Success', 'Payment was successful!', [
        { text: 'OK', onPress: () => navigation.navigate('Home') }
      ]);
    }
    // Check for payment failure
    else if (navState.url.includes('payment_failure')) {
      Alert.alert('Failed', 'Payment was not successful. Please try again.', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: paymentUrl }}
        style={styles.webview}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onNavigationStateChange={handleNavigationStateChange}
      />
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});

export default PaymentScreen;

