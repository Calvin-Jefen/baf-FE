import axios from "axios";
const API_OAY= 'http://157.245.154.12:8080/api/v1/transactions'

export const createTransaction = async (data, auth) => {
     // Define headers
        const headers = {
            'Content-Type': 'application/json',
            Authorization: auth, // Replace with your token if required
        };

        const body={
            ProductId: data.productId,
            Price: data.price,
            Qty: 1
        }
    try{
        const response = await axios.post(API_OAY,body, {
            headers
        })
        return response.data
    }catch(error){
        console.log(error)
        if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    }
    }
}