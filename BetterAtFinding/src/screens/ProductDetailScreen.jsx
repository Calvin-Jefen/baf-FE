import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react'
import { fetchProduct } from '../services/ProductService';

export default function ProductDetailScreen({ route }) {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(route);
    const productId = route.params.productId
    useEffect(() => {
        const fetch = async () => {
            try {
                const respproduct = await fetchProduct(productId)
                setProduct(respproduct)

            } catch (error) {
                console.error('Failed to fetch products: ', error)
            } finally {
                setLoading(false)
            }
        }
        fetch()
    }, [productId])
    useEffect(() => {
        console.log('The Product: ', product);

    }, [product])
    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
    }
    return (

        <View style={styles.container}>
            <Image
                source={product.Image}
                style={styles.productImage}
            />
            <View style={styles.productDetail}>
                <Text style={styles.productName}>{product.Name}</Text >
                <Text style={styles.productDesc}>{product.Description}</Text >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onAddToCart(product)}
                >
                    <Text style={styles.buttonText} >Buy Now!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
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
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    productName: {
        fontWeight: 'bold'
    },
    productDesc: {
        textAlign: 'left',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 10
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
    }
})