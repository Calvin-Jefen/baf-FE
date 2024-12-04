import { Text, ActivityIndicator, StyleSheet, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import PurchaseHistoryCard from '../components/PurchaseHistoryCard'
import { fetchPurchaseHistory } from '../services/ProductService'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../redux/slices/authSlice'


export default function PurchaseHistoryScreen() {
    const dispatch = useDispatch()
    const { user, error } = useSelector(state => state.auth)
    const authToken = user?.data


    const [purchaseHistory, setPurchaseHistory] = useState(null)
    const [loading, setLoading] = useState(true)



    useEffect(() => {

        const fetch = async () => {
            try {
                const response = await fetchPurchaseHistory(authToken)
                setPurchaseHistory(response)
            } catch {
                console.error('Failed to fetch purcase history: ', error)
            } finally {
                setLoading(false)
            }
        }
        fetch()
    }, [authToken])

    useEffect(() => {
        console.log('Purchase History: ', purchaseHistory);

    }, [purchaseHistory])
    const renderItem = ({ item }) => {
        console.log('Rendering item:', item);
        return <PurchaseHistoryCard purchaseHistory={item} />
    }
    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={purchaseHistory}
                renderItem={renderItem}
                keyExtractor={(item) => item.product_id.toString()}
                contentContainerStyle={styles.productList}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    productList: {
        padding: 8,
    },
});