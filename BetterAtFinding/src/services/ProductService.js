const API_Products = 'https://fakestoreapi.com/products'


export const fetchProducts = async () => {
    const response = await fetch(API_Products)
    const data = await response.json()
    return data
}