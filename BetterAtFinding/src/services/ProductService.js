const API = 'https://fakestoreapi.com/products'
const API_Products = 'http://165.22.98.186:8080/api/v1/products'
import axios from 'axios'


export const fetchProducts = async () => {
    const response = await fetch(API_Products)
    const data = await response.json()
    // console.log('masuk')

    return data.data
}

export const fetchProduct = async (id) => {
    const response = await axios.post(API_Products, {
        productId: id
    })
    return response.data.data

}