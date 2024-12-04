import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPaymentThunk } from '../redux/slices/paymentSlice'
import PaymentService from '../services/PaymentService'

export default function CheckoutScreen({route,navigation}) {
    const {product} = route.params
    const dispatch = useDispatch()
    const { user, error } = useSelector(state => state.auth)
    const authToken = user.data
    const {payment} =useSelector(state => state.payment)
    

    const handlePayment = async () => {

        // const pay = dispatch(createPaymentThunk(product, authToken))
        // console.log('pay', pay)   
        // console.log('payment', payment)
        const pay= await createTransaction(product, authToken)
        console.log('pay', pay)
        // In a real app, you would typically get this URL from your backend
        // const paymentUrl = 'https://your-payment-gateway.com/checkout?amount=100';
        const paymentUrl = pay?.data?.redirect_url

        // const paymentUrl ='https://app.sandbox.midtrans.com/snap/v2/vtweb/e688e843-8087-470f-a8c3-f17a64d40630'
        navigation.navigate('Payment', { paymentUrl });
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Image
                source={{ uri: product.Image }}
                style={styles.productImage}
            />
      <Text style={styles.productName}>{product.Name}</Text >
      <Text>{product.productId}</Text>
      <Text style={styles.amount}>Total Amount:Rp.{Number(product.Price).toFixed(2)}</Text>
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
    productDetail: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        margin: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        paddingTop: 10,
        paddingBottom: 10
    },
    productImage: {
        width: '100%',
        aspectRatio: 1,
        marginBottom: 20,
    },
    productName: {
        fontWeight: 'bold',
        flexWrap: 'wrap',
        width: 280,
        textAlign: 'center'
    },
  });