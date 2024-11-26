import { View, StyleSheet } from 'react-native'
import React, {useEffect} from 'react'
import ProductCard from '../components/ProductCard'
import { FlatList, Dimensions } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductsThunk} from '../redux/slices/productSlice' // {fetchProductsThunk}

const { width } = Dimensions.get('window');
const numColumns = 2;
export default function ProductScreen() {
    const dispatch = useDispatch();
    const { items: products,status, error } = useSelector(state => state.products);

    useEffect(() => {
        console.log('useEffect', fetchProductsThunk());
        dispatch(fetchProductsThunk());
    }, [])

    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchProductsThunk());
        }
      }, [status, dispatch]);

    // const products = [
    //     { id: '1', name: 'Wireless Earbuds', price: 79.99, image: 'https://ca.targus.com/cdn/shop/files/51206_0_1024x1024.jpg?v=1702392744' },
    //     { id: '2', name: 'Smartphone', price: 699.99, image: 'https://down-id.img.susercontent.com/file/id-11134207-7rasa-m2n0lngarrzm4a.webp' },
    //     { id: '3', name: 'Laptop', price: 1299.99, image: 'https://assets.bmdstatic.com/web/image?model=product.product&field=image_1024&id=288709&unique=d0bcd30' },
    //     { id: '4', name: 'Smartwatch', price: 199.99, image: 'https://down-id.img.susercontent.com/file/id-11134207-7rase-m0zz0kugixlw57.webp' },
    //     { id: '5', name: 'Bluetooth Speaker', price: 89.99, image: 'https://down-id.img.susercontent.com/file/sg-11134201-7repa-m1s3kt396h0n02.webp' },
    //     { id: '6', name: 'Tablet', price: 399.99, image: 'https://down-id.img.susercontent.com/file/sg-11134201-22120-w6r9hqnqtqkva6.webp' },
    //   ];
    const handleAddToCart = (product) => {
        // Implement your add to cart logic here
        console.log(`Added ${product.title} to cart`);
      };
      const renderItem = ({ item }) => (
        console.log("item",item),
        <ProductCard product={item} onAddToCart={handleAddToCart} />
      );
    //   if (status === 'loading') {
    //     return <ActivityIndicator size="large" color="#0000ff" />;
    //   }
    
    //   if (status === 'failed') {
    //     return <Text>Error: {error}</Text>;
    //   }
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
      paddingTop: 50, // Add some top padding to avoid status bar
    },
    productList: {
      padding: 8,
    },
  });