import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ProductCard({ product, onAddToCart }) {
  const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('ProductDetail', {
          productImage: product.Image,
          productId: product.ID
        })
      }}
    >
      <View style={styles.card}>
        <Image source={{ uri: product.Image }} srtyle={styles.image} onError={(error) => console.error('Image load error:', error)} />
        <View style={styles.infoContainer}>
          <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
          <Text style={styles.price}>${Number(product.Price).toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onAddToCart(product)}
          >
            <Text style={styles.buttonText}>BUY NOW!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    height: 40,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});