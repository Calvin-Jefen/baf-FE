import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react'

export default function ProductDetailScreen({ route }) {
    console.log(route);

    return (
        <View style={styles.container}>
            <Image
                source={route.params.productImage}
                style={styles.productImage}
            />
            <Text >{route.params.productId}</Text >
            <Text >PRODUCT DESCRIPTION</Text >
            <TouchableOpacity
                // style={styles.button}
                onPress={() => onAddToCart(product)}
            >
                <Text >Add to Cart</Text>
            </TouchableOpacity>
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
    productImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    }
})