import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CheckoutScreen({product,navigation}) {
    const handlePayment = () => {
        // In a real app, you would typically get this URL from your backend
        const paymentUrl = 'https://your-payment-gateway.com/checkout?amount=100';
        // const paymentUrl ='https://app.sandbox.midtrans.com/snap/v2/vtweb/e688e843-8087-470f-a8c3-f17a64d40630'
        navigation.navigate('Payment', { paymentUrl });
    }
  return (
    <View style={styles.container}>
       console.log(product)
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.amount}>Total Amount: Rp </Text>
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    amount: {
      fontSize: 18,
      marginBottom: 30,
    },
    payButton: {
      backgroundColor: '#4CAF50',
      padding: 15,
      borderRadius: 5,
    },
    payButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });