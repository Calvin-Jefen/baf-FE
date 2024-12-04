import axios from "axios";
const API_OAY= 'http://157.245.154.12:8080/api/v1/transactions'

export const createTransaction = async (data, auth) => {
     // Define headers
        const headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth, // Replace with your token if required
        };
        console.log(data)
        console.log('auth', auth)
        const body={
            Product_Id: data.ID,
            Price: data.Price.toString(),
            Qty: 1
        }
        console.log("body",body)
    try{
        const response = await axios.post(API_OAY,body, {
            headers
        })
        console.log('res ',response)
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