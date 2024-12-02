import axios from "axios"
const API= 'https://fakestoreapi.com/products'
const API_Products='http://159.223.48.190:8080/api/v1/products'


export const fetchProducts = async () => {
    const response = await fetch(API_Products)
    const data = await response.json()
    return data.data
}