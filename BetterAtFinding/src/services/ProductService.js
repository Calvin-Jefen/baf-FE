import axios from "axios"
const API = 'https://fakestoreapi.com/products'
const BASE_URL = 'http://157.245.154.12:8080/api/v1'
const API_Products = BASE_URL + '/products'
const API_History = BASE_URL + '/transactions'


export const fetchProducts = async () => {
    const response = await fetch(API_Products)
    const data = await response.json()

    return data.data
}

export const fetchProduct = async (id) => {

    const response = await axios.post(API_Products, {
        productId: id
    })
    console.log(response);

    return response.data.data

}

export const fetchPurchaseHistory = async (Auth) => {
    const response = await axios.get(API_History, {
        headers: {
            Authorization: Auth
        }
    })

    return response.data.data
}