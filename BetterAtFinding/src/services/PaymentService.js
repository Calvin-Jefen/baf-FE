import axios from "axios";
const API_OAY= 'http://157.245.154.12:8080/api/v1/transactions'

export const createTransaction = async (data) => {
    try{
        const response = await axios.post(API_OAY,{
            ProductId: data.productId,
            User_Id: data.userId,
            Price: data.price,
            Qty: 1
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