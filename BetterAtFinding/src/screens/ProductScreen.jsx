import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ProductCard from '../components/ProductCard'
import { FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const numColumns = 2;
export default function ProductScreen() {
    const products = [
        { id: '1', name: 'Wireless Earbuds', price: 79.99, image: 'https://ca.targus.com/cdn/shop/files/51206_0_1024x1024.jpg?v=1702392744' },
        { id: '2', name: 'Smartphone', price: 699.99, image: 'https://down-id.img.susercontent.com/file/id-11134207-7rasa-m2n0lngarrzm4a.webp' },
        { id: '3', name: 'Laptop', price: 1299.99, image: 'https://assets.bmdstatic.com/web/image?model=product.product&field=image_1024&id=288709&unique=d0bcd30' },
        { id: '4', name: 'Smartwatch', price: 199.99, image: 'https://down-id.img.susercontent.com/file/id-11134207-7rase-m0zz0kugixlw57.webp' },
        { id: '5', name: 'Bluetooth Speaker', price: 89.99, image: 'https://down-id.img.susercontent.com/file/sg-11134201-7repa-m1s3kt396h0n02.webp' },
        { id: '6', name: 'Tablet', price: 399.99, image: 'https://down-id.img.susercontent.com/file/sg-11134201-22120-w6r9hqnqtqkva6.webp' },
      ];
      const handleAddToCart = (product) => {
        // Implement your add to cart logic here
        console.log(`Added ${product.name} to cart`);
      };
      const renderItem = ({ item }) => (
        <ProductCard product={item} onAddToCart={handleAddToCart} />
      );
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    productList: {
      padding: 8,
    },
  });