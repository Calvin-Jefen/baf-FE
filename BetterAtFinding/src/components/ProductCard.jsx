import { View, Text,  Image, StyleSheet, TouchableOpacity  } from 'react-native'
import React from 'react'

export default function ProductCard({ product, onAddToCart }) {
   
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onAddToCart(product)}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
    
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