import React, { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';
export default function PurchaseHistoryCard({ purchaseHistory }) {
    useEffect(() => {
        console.log(purchaseHistory);

    })

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'paid':
                return '#15B75D';
            case 'open':
                return '#05668D';
            case 'cancelled':
                return '#E85F5C';
            default:
                return '#231651';
        }
    };
    return (
        <View style={styles.itemContainer}>
            {/* <Image source={{ uri: item.imageUrl }} style={styles.productImage} /> */}
            <View style={styles.detailsContainer}>
                <Text style={styles.productName}>{purchaseHistory.name}</Text>
                <Text style={styles.purchaseDate}>Purchase Date: {purchaseHistory.createdAt}</Text>
                <Text style={styles.quantity}>Quantity: {purchaseHistory.qty}</Text>
                <Text style={styles.quantity}>Price: Rp.{purchaseHistory.price}</Text>
                <View style={[styles.statusButton, { backgroundColor: getStatusColor(purchaseHistory.status) }]}>
                    <Text style={styles.statusButtonText}>{purchaseHistory.status}</Text>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    productImage: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    productName: {
        fontSize: 18,
        fontWeight: '600',
    },
    purchaseDate: {
        fontSize: 14,
        color: '#666666',
    },
    quantity: {
        fontSize: 14,
        color: '#666666',
    },
    statusButton: {
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: '#007bff', // Blue background
        borderRadius: 1,
        alignItems: 'center',
    },
    statusButtonText: {
        color: '#ffffff', // White text
        fontSize: 14,
        textTransform: 'uppercase'

    },
});

